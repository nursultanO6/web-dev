export interface Event {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  link: string;
  date?: string;
  category?: string;
  location?: string;
}
