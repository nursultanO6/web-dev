import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  albumId: number = 0;
  loading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.albumId = Number(idParam);
    if (!this.albumId) {
      this.error = 'Invalid album ID.';
      this.loading = false;
      return;
    }

    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data) => {
        this.photos = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load photos.';
        this.loading = false;
        console.error(err);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/albums', this.albumId]);
  }

  onImgError(event: Event, photoId: number): void {
    const img = event.target as HTMLImageElement;
    // Use picsum.photos as a reliable fallback — seeded by photo ID for consistency
    img.src = `https://picsum.photos/seed/${photoId}/150/150`;
    img.onerror = null; // prevent infinite loop if fallback also fails
  }
}
