export interface Tribute {
  id: string;
  name: string;
  message: string;
  image_url: string | null;
  created_at: string;
  shared_by: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  name: string;
  shared_by: string;
  message: string;
}