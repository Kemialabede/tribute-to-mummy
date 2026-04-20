'use client';

import { useState, useEffect } from 'react';
import GalleryGrid from '@/components/GalleryGrid';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  name: string;
  shared_by: string;
  message: string;
}

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  const fetchGalleryImages = async () => {
    try {
      const res = await fetch('/api/gallery');
      if (!res.ok) {
        throw new Error('Failed to fetch gallery images');
      }
      const data = await res.json();
      setImages(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load gallery');
    } finally {
      setIsLoading(false);
    }
  };

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
          <div className="text-center py-12 text-red-600 font-sans">
            {error}
          </div>
        )}

        {!isLoading && !error && images.length === 0 && (
          <div className="text-center py-12 text-neutral-500 font-sans">
            No images in the gallery yet. Be the first to upload a photo with your tribute.
          </div>
        )}

        {!isLoading && !error && images.length > 0 && (
          <GalleryGrid images={images} />
        )}
      </div>
    </div>
  );
}
