import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';
import { Category } from '../../models/category.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  searchQuery: string = '';
  filteredProducts: Product[] = [];
  sortBy: string = 'default';
  activeCategory: number | 'all' = 'all';
  minPrice: number | null = null;
  maxPrice: number | null = null;
  minRating: number = 0;

  categories: (Category | { id: 'all', name: string })[] = [];
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.categories = this.productService.getCategories();
    this.products = this.productService.getProducts();
    this.filterProducts();
  }

  filterProducts(): void {
    const query = this.searchQuery.toLowerCase();
    let filtered = this.products.filter(product =>
      product.name.toLowerCase().includes(query)
    );
    if (this.activeCategory !== 'all') {
      filtered = filtered.filter(product => product.categoryId === this.activeCategory);
    }
    if (this.minRating > 0) {
      filtered = filtered.filter(product => product.rating >= this.minRating);
    }
    if (this.sortBy === 'rating') {
      filtered = filtered.slice().sort((a, b) => b.rating - a.rating);
    } else if (this.sortBy === 'price-asc') {
      filtered = filtered.slice().sort((a, b) => a.price - b.price);
    } else if (this.sortBy === 'price-desc') {
      filtered = filtered.slice().sort((a, b) => b.price - a.price);
    }
    this.filteredProducts = filtered;
  }

  onProductDeleted(productId: number): void {
    this.products = this.products.filter(p => p.id !== productId);
    this.filterProducts();
  }

  get activeCategoryLabel(): string {
    if (this.activeCategory === 'all') return 'Все категории';
    const found = this.categories.find(c => c.id === this.activeCategory);
    return found ? found.name : 'Все категории';
  }

  setCategory(id: number | 'all'): void {
    this.activeCategory = id;
    this.filterProducts();
  }

  resetFilters(): void {
    this.searchQuery = '';
    this.activeCategory = 'all';
    this.minPrice = null;
    this.maxPrice = null;
    this.minRating = 0;
    this.sortBy = 'default';
    this.filterProducts();
  }
}