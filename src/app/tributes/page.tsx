'use client';

import { useState, useEffect } from 'react';
import TributeCard from '@/components/TributeCard';
import TributeForm from '@/components/TributeForm';
import { Tribute } from '@/lib/types';

export default function TributesPage() {
  const [tributes, setTributes] = useState<Tribute[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTributes();
  }, []);

  const fetchTributes = async () => {
    try {
      const res = await fetch('/api/tributes');
      if (!res.ok) {
        throw new Error('Failed to fetch tributes');
      }
      const data = await res.json();
      setTributes(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load tributes');
    } finally {
      setIsLoading(false);
    }
  };

  const handleTributeCreated = () => {
    fetchTributes();
  };

  return (
    <div className="min-h-screen py-16 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] text-neutral-900 mb-3 md:mb-4">
            Tributes & Memories
          </h1>
          <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto font-sans">
            Share your thoughts, memories, and well wishes. Your words mean the world to us.
          </p>
        </div>

        {/* Tribute Form */}
        <div className="mb-12 md:mb-16">
          <TributeForm onTributeCreated={handleTributeCreated} />
        </div>

        {/* Tributes List */}
        <div>
          <h2 className="text-2xl font-['Cormorant_Garamond'] text-neutral-900 mb-6 md:mb-8">
            Shared Tributes
          </h2>

          {isLoading && (
            <div className="text-center py-12 text-neutral-500 font-sans">
              Loading tributes...
            </div>
          )}

          {error && (
            <div className="text-center py-12 text-red-600 font-sans">
              {error}
            </div>
          )}

          {!isLoading && !error && tributes.length === 0 && (
            <div className="text-center py-12 text-neutral-500 font-sans">
              No tributes yet. Be the first to share a memory.
            </div>
          )}

          {!isLoading && !error && tributes.length > 0 && (
            <div className="grid gap-4 md:gap-6 md:grid-cols-1 lg:grid-cols-2">
              {tributes.map((tribute) => (
                <TributeCard key={tribute.id} tribute={tribute} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
