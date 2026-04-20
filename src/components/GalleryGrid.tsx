'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GalleryImage } from '@/lib/types';

const GalleryGrid = ({ images }: { images: GalleryImage[] }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5 space-y-4 md:space-y-5">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group relative break-inside-avoid cursor-pointer overflow-hidden
                       rounded-2xl border border-forest-100/40
                       hover:border-burgundy-300/60 hover:shadow-lg
                       transition-all duration-500"
            onClick={() => setSelectedImage(image)}
          >
            <motion.div whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
              <img src={image.src} alt={image.alt}
                className="w-full h-auto object-cover" />
            </motion.div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/30
                            via-transparent to-transparent
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5
                            translate-y-2 group-hover:translate-y-0
                            opacity-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-white/80 text-xs tracking-widest uppercase font-sans">{image.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-forest-900/80 backdrop-blur-xl
                       flex items-center justify-center z-50 p-4 md:p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-5xl rounded-2xl overflow-hidden
                         border border-forest-200/30 shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage.src} alt={selectedImage.alt}
                className="w-full max-h-[80vh] object-contain" />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 md:top-4 right-3 md:right-4 w-8 h-8 md:w-9 md:h-9 rounded-full
                           bg-white/20 border border-white/20 text-white/70
                           hover:bg-white/30 hover:text-white flex items-center justify-center
                           transition-all duration-300 text-sm backdrop-blur-sm"
              >✕</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryGrid;
