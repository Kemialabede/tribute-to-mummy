export interface Tribute {
  id: string;
  name: string;
  message: string;
  image_url: string | null;
  created_at: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  name: string;
  message: string;
}