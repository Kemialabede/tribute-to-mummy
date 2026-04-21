'use client';

import { useState, useEffect } from 'react';
import GalleryGrid from '@/components/GalleryGrid';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  name: string;
  message: string;
}

const featuredImages: GalleryImage[] = [
  {
    id: 'featured-1',
    src: '/whatsapp-2.jpeg',
    alt: 'Beautiful smile',
    name: 'Adetutu Grace',
    message: 'Your smile lit up every room.',
  },
  {
    id: 'featured-2',
    src: '/whatsapp-6.jpeg',
    alt: 'Nature lover',
    name: 'Adetutu Grace',
    message: 'Loved nature and peaceful moments.',
  },
  {
    id: 'featured-3',
    src: '/whatsapp-3.jpeg',
    alt: 'Joyful spirit',
    name: 'Adetutu Grace',
    message: 'A heart full of love and joy.',
  },
  {
    id: 'featured-4',
    src: '/whatsapp-4.jpeg',
    alt: 'Joyful spirit',
    name: 'Adetutu Grace',
    message: 'A heart full of love and joy.',
  },
  {
    id: 'featured-5',
    src: '/whatsapp-5.jpeg',
    alt: 'Joyful spirit',
    name: 'Adetutu Grace',
    message: 'A heart full of love and joy.',
  },
  {
    id: 'featured-6',
    src: '/whatsapp-8.jpeg',
    alt: 'Joyful spirit',
    name: 'Adetutu Grace',
    message: 'A heart full of love and joy.',
  },
  {
    id: 'featured-7',
    src: '/whatsapp-7.jpeg',
    alt: 'Joyful spirit',
    name: 'Adetutu Grace',
    message: 'A heart full of love and joy.',
  },
  {
    id: 'featured-8',
    src: '/whatsapp-1.jpeg',
    alt: 'Joyful spirit',
    name: 'Adetutu Grace',
    message: 'A heart full of love and joy.',
  },
  {
    id: 'featured-9',
    src: '/whatsapp-9.jpeg',
    alt: 'Joyful spirit',
    name: 'Adetutu Grace',
    message: 'A heart full of love and joy.',
  },
  {
    id: 'featured-10',
    src: '/whatsapp-3.jpeg',
    alt: 'Joyful spirit',
    name: 'Adetutu Grace',
    message: 'A heart full of love and joy.',
  },
];

export default function GalleryPage() {
  const [apiImages, setApiImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const res = await fetch('/api/gallery');
        const data = await res.json();
        if (Array.isArray(data)) {
          setApiImages(data);
        } else if (data.error) {
          setError(data.details || data.error);
        }
      } catch (err) {
        console.error('Gallery fetch error:', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchGalleryImages();
    const interval = setInterval(fetchGalleryImages, 3000);
    return () => clearInterval(interval);
  }, []);

  const allImages = [...featuredImages, ...apiImages];

  return (
    <div className="min-h-screen py-16 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-neutral-900 mb-3 md:mb-4">
            Memory Gallery
          </h1>
          <p className="text-base md:text-lg text-neutral-600 mb-6 md:mb-8 font-sans max-w-3xl mx-auto">
            A collection of cherished memories and moments from her beautiful life.
          </p>
        </div>

        {/* Gallery Grid */}
        {isLoading && (
          <div className="text-center py-12 text-neutral-500 font-sans">
            Loading gallery...
          </div>
        )}

        {error && (
          <div className="text-center py-12 text-red-500 font-sans">
            Error: {error}
          </div>
        )}

        {!isLoading && !error && allImages.length === 0 && (
          <div className="text-center py-12 text-neutral-500 font-sans">
            No images in the gallery yet. Be the first to upload a photo with your tribute.
          </div>
        )}

        {!isLoading && allImages.length > 0 && (
          <GalleryGrid images={allImages} />
        )}
      </div>
    </div>
  );
}
