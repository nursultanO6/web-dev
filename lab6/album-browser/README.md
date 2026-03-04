# Album Browser — Lab 6

An Angular single-page application (SPA) that browses albums from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com). Demonstrates Angular Router, HttpClient, Observables, and a service-layer architecture.

## Features

- **Multi-route SPA** with Angular Router (Home, About, Albums, Album Detail, Album Photos)
- **Service layer** — all HTTP calls via `AlbumService`, no direct `HttpClient` in components
- **CRUD operations** — Read (list & detail), Update (edit title), Delete (remove from list)
- **Loading indicators** and graceful empty/error states
- **Responsive photo grid** layout
- **Active route highlighting** via `routerLinkActive`

## Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | → `/home` | Redirect |
| `/home` | `HomeComponent` | Welcome page |
| `/about` | `AboutComponent` | App info |
| `/albums` | `AlbumsComponent` | List of all albums |
| `/albums/:id` | `AlbumDetailComponent` | Single album with edit |
| `/albums/:id/photos` | `AlbumPhotosComponent` | Photo grid |

## Getting Started

### Prerequisites

- Node.js 18+
- Angular CLI 16+

```bash
npm install -g @angular/cli
```

### Install & Run

```bash
# Navigate to the project folder
cd lab6/album-browser

# Install dependencies
npm install

# Start development server
ng serve

# Open in browser
# http://localhost:4200
```

### Build for Production

```bash
ng build
```

Output will be in `dist/album-browser/`.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/          # Sticky navigation bar
│   │   ├── home/            # Welcome page
│   │   ├── about/           # About page
│   │   ├── albums/          # Album list with delete
│   │   ├── album-detail/    # Album detail + edit title
│   │   └── album-photos/    # Photo grid
│   ├── models/
│   │   ├── album.model.ts   # Album interface
│   │   └── photo.model.ts   # Photo interface
│   ├── services/
│   │   └── album.service.ts # All API calls
│   ├── app-routing.module.ts
│   ├── app.module.ts
│   └── app.component.ts
└── styles.css
```

## API

All data from [JSONPlaceholder](https://jsonplaceholder.typicode.com):

- `GET /albums` — all 100 albums
- `GET /albums/:id` — single album
- `GET /albums/:id/photos` — photos for an album
- `PUT /albums/:id` — update album (simulated)
- `DELETE /albums/:id` — delete album (simulated)

> Note: JSONPlaceholder simulates mutations — changes don't persist server-side, but the UI updates locally.
