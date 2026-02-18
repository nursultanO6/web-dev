import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';

interface Category {
  key: string;
  label: string;
  count: number;
}

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
  activeCategory: string = 'all';
  minPrice: number | null = null;
  maxPrice: number | null = null;
  minRating: number = 0;

  categories: Category[] = [
    { key: 'all',        label: 'ALL CATEGORIES',       count: 12 },
    { key: 'phones',     label: 'PHONE AND GADJETS',  count: 5  },
    { key: 'computers',  label: 'COMPUTERS',           count: 2  },
    { key: 'gaming',     label: 'GAMES',                 count: 1  },
    { key: 'tv',         label: 'TV, AUDIO, VIDEO',    count: 3  },
    { key: 'appliances', label: 'APPLIANCES',      count: 2  },
    { key: 'watches',    label: 'SMART-WATCHES',           count: 2  }
  ];

  sidebarCategories: Category[] = [
    { key: 'phones',     label: 'Smartpgones',       count: 3 },
    { key: 'computers',  label: 'Laptops',        count: 1 },
    { key: 'tablets',    label: 'Tablets',        count: 1 },
    { key: 'gaming',     label: 'Gaming console', count: 1 },
    { key: 'tv',         label: 'TV',      count: 1 },
    { key: 'audio',      label: 'Headphones',        count: 2 },
    { key: 'appliances', label: 'Vacuum cleaners',        count: 2 },
    { key: 'watches',    label: 'Smart watches',      count: 2 }
  ];

  products: Product[] = [
    {
      id: 1,
      name: 'Микроскоп Steamhammer GR009 оптический (световой), учебный',
      description:
        'Микроскоп Steamhammer GR009 оптический (световой), учебный',
      price: 7201,
      rating: 5.0,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/he9/h5e/85064322875422.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9e/h90/85559319232542.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h8e/h64/85559319265310.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h12/85559319167006.jpg?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/mikroskop-steamhammer-gr009-opticheskii-svetovoi-uchebnyi-115183701/?c=750000000&tab=reviews&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_protein&gbraid=0AAAAAC7-v7iDTfZ3QRZwMLA3qKc6oK7Gv&gclid=CjwKCAiAncvMBhBEEiwA9GU_fv-PWQpz74EiGcf2CzGoP_ymWRgAH66zaC76I7IbvsnFt98WeAXdxRoCCIcQAvD_BwE  ',
    },
    {
      id: 2,
      name: 'Автокомпрессор K2KANT поршневый K2-65',
      description:
        'Автокомпрессор K2KANT поршневый K2-65.',
      price: 12990,
      rating: 4.9,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/pc5/pb3/74685502.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p90/pc9/73873538.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p74/pc9/73873539.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p08/pc7/73873540.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/avtokompressor-k2kant-porshnevyi-k2-65-111044420/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_protein&gbraid=0AAAAAC7-v7iDTfZ3QRZwMLA3qKc6oK7Gv&gclid=CjwKCAiAncvMBhBEEiwA9GU_fv-PWQpz74EiGcf2CzGoP_ymWRgAH66zaC76I7IbvsnFt98WeAXdxRoCCIcQAvD_BwE',
    },
    {
      id: 3,
      name: 'КазЭкспорт УР-300 Удалитель ржавчины 500 г',
      description:
        'КазЭкспорт УР-300 Удалитель ржавчины 500 г',
      price: 4400,
      rating: 4.9,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/p57/pba/34437909.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pdf/pbc/34437911.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p57/pba/34437909.png?format=gallery-medium',
        
      ],
      link: 'https://kaspi.kz/shop/p/kazeksport-ur-300-udalitel-rzhavchiny-500-g-137491094/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_protein&gbraid=0AAAAAC7-v7iDTfZ3QRZwMLA3qKc6oK7Gv&gclid=CjwKCAiAncvMBhBEEiwA9GU_fv-PWQpz74EiGcf2CzGoP_ymWRgAH66zaC76I7IbvsnFt98WeAXdxRoCCIcQAvD_BwE',
    },
    {
      id: 4,
      name: 'Модуль управления Arduino UNO R3 CH340',
      description:
        'Модуль управления Arduino UNO R3 CH340',
      price: 1700,
      rating: 4.9,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h1a/h9d/68043442618398.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1a/h9d/68043442618398.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/modul-upravlenija-arduino-uno-r3-ch340-108510572/?c=750000000',
    },
    {
      id: 5,
      name: 'Набор для моделирования Arduino UNO KIT 001, мультиколор',
      description:
        'Набор для моделирования Arduino UNO KIT 001, мультиколор.',
      price: 9495,
      rating: 4.8,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h6b/h37/64426899832862.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h85/hda/64426901930014.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h80/hcc/64426903765022.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h22/hd4/64426905534494.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/nabor-dlja-modelirovanija-arduino-uno-kit-001-mul-tikolor-106898898/?c=750000000',
    },
    {
      id: 6,
      name: 'Креатин YummyLab Creatine monohydrate арбуз 300 г',
      description:
        'Креатин YummyLab Creatine monohydrate арбуз 300 г',
      price: 7454,
      rating: 4.9,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/pa5/p42/54349962.jpeg?format=gallery-medium',
      images: [
        
        'https://resources.cdn-kaspi.kz/img/m/p/p3c/p3f/54349963.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p68/p38/54349965.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc1/p2a/54349969.jpeg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/kreatin-yummylab-creatine-monohydrate-arbuz-300-g-140317462/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_protein&gbraid=0AAAAAC7-v7iDTfZ3QRZwMLA3qKc6oK7Gv&gclid=CjwKCAiAncvMBhBEEiwA9GU_fv-PWQpz74EiGcf2CzGoP_ymWRgAH66zaC76I7IbvsnFt98WeAXdxRoCCIcQAvD_BwE',
    },
    {
      id: 7,
      name: 'NOW Acetyl L-Carnitine 500мг капсулы 50 шт',
      description:
        'NOW Acetyl L-Carnitine 500мг капсулы 50 шт',
      price: 6767,
      rating: 4.7,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/p9c/pd6/87684237.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p9c/pd6/87684237.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb8/pd6/87684238.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p40/pd9/87684240.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p5d/pd9/87684241.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/now-acetyl-l-carnitine-500mg-kapsuly-50-sht-120248464/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_protein&gbraid=0AAAAAC7-v7iDTfZ3QRZwMLA3qKc6oK7Gv&gclid=CjwKCAiAncvMBhBEEiwA9GU_fv-PWQpz74EiGcf2CzGoP_ymWRgAH66zaC76I7IbvsnFt98WeAXdxRoCCIcQAvD_BwE',
    },
    {
      id: 8,
      name: 'Спонж плоский полиуретан 1 шт',
      description: 'Спонж плоский полиуретан 1 шт',
      price: 115,
      rating: 5.0,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h3f/h58/83145716826142.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h37/hcb/83145717907486.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h2b/hcf/83145719152670.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/sponzh-ploskii-poliuretan-1-sht-112846363/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_protein&gbraid=0AAAAAC7-v7iDTfZ3QRZwMLA3qKc6oK7Gv&gclid=CjwKCAiAncvMBhBEEiwA9GU_fv-PWQpz74EiGcf2CzGoP_ymWRgAH66zaC76I7IbvsnFt98WeAXdxRoCCIcQAvD_BwE',
    },
    {
      id: 9,
      name: 'NOW Ashwaganda, Ашваганда 450 мг капсулы 90 шт',
      description:
        'NOW Ashwaganda, Ашваганда 450 мг капсулы 90 шт',
      price: 5740,
      rating: 4.9,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/p85/p28/27486112.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p85/p28/27486112.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p68/p28/27486113.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/now-ashwaganda-ashvaganda-450-mg-kapsuly-90-sht-100501349/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_protein&gbraid=0AAAAAC7-v7iDTfZ3QRZwMLA3qKc6oK7Gv&gclid=CjwKCAiAncvMBhBEEiwA9GU_fv-PWQpz74EiGcf2CzGoP_ymWRgAH66zaC76I7IbvsnFt98WeAXdxRoCCIcQAvD_BwE',
    },
    {
      id: 10,
      name: 'Ручка шариковая WENAO 555-A 1 шт, 1 мм, цвет чернил синий',
      description:
        'Ручка шариковая WENAO 555-A 1 шт, 1 мм, цвет чернил синий',
      price: 40,
      rating: 5.0,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hd0/hf9/80564438269982.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcd/h0f/64410304544798.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hdc/hd1/80496366551070.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd0/hf9/80564438269982.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/ruchka-sharikovaja-wenao-555-a-1-sht-1-mm-tsvet-chernil-sinii-106188867/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_protein&gbraid=0AAAAAC7-v7iDTfZ3QRZwMLA3qKc6oK7Gv&gclid=CjwKCAiAncvMBhBEEiwA9GU_fv-PWQpz74EiGcf2CzGoP_ymWRgAH66zaC76I7IbvsnFt98WeAXdxRoCCIcQAvD_BwE',
    },
    { id:11, name:'Apple iPad Air 5 64GB Wi-Fi Space Gray', description:'Планшет с чипом M1, дисплеем Liquid Retina 10.9" и поддержкой Apple Pencil 2. USB-C, 12 Мп камера, Touch ID в кнопке.',                               price:249990, rating:4.8, image:'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium', images:['https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pdf/p95/64168415.png?format=gallery-medium'], link:'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_protein&gbraid=0AAAAAC7-v7iDTfZ3QRZwMLA3qKc6oK7Gv&gclid=CjwKCAiAncvMBhBEEiwA9GU_fv-PWQpz74EiGcf2CzGoP_ymWRgAH66zaC76I7IbvsnFt98WeAXdxRoCCIcQAvD_BwE' },
    { id:12, name:'Bose QuietComfort 45 Black',            description:'Накладные наушники с активным шумоподавлением и звуком TriPort. Режимы Quiet и Aware, 24 часа работы, Bluetooth 5.1.',                                   price:159990, rating:4.7, image:'https://resources.cdn-kaspi.kz/img/m/p/hba/h67/64374646538270.jpg?format=gallery-medium', images:['https://resources.cdn-kaspi.kz/img/m/p/hba/h67/64374646538270.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hb0/h6c/64374649651230.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h40/h36/64374654369822.jpg?format=gallery-medium'], link:'https://kaspi.kz/shop/p/naushniki-bose-quietcomfort-45-chernyi-102978612/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_protein&gbraid=0AAAAAC7-v7iDTfZ3QRZwMLA3qKc6oK7Gv&gclid=CjwKCAiAncvMBhBEEiwA9GU_fv-PWQpz74EiGcf2CzGoP_ymWRgAH66zaC76I7IbvsnFt98WeAXdxRoCCIcQAvD_BwE' }
  ];

  ngOnInit(): void {
    this.filteredProducts = this.products;
  }

  filterProducts(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(query)
    );
  }

  get activeCategoryLabel(): string {
    const found = this.categories.find(c => c.key === this.activeCategory);
    return found ? found.label : 'Все категории';
  }

  setCategory(key: string): void {
    this.activeCategory = key;
    this.filterProducts();
  }

  resetFilters(): void {
    this.searchQuery = '';
    this.activeCategory = 'all';
    this.minPrice = null;
    this.maxPrice = null;
    this.minRating = 0;
    this.sortBy = 'default';
    this.filteredProducts = this.products;
  }
}