'use client';

import { useState } from 'react';

interface TributeFormProps {
  onTributeCreated?: () => void;
}

const TributeForm = ({ onTributeCreated }: TributeFormProps) => {
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImageFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      let imageUrl: string | null = null;

      // Upload image if provided
      if (imageFile) {
        const formDataObj = new FormData();
        formDataObj.append('file', imageFile);

        const uploadRes = await fetch('/api/upload', {
          method: 'POST',
          body: formDataObj,
        });

        if (!uploadRes.ok) {
          throw new Error('Failed to upload image');
        }

        const { url } = await uploadRes.json();
        imageUrl = url;
      }

      // Create tribute
      const res = await fetch('/api/tributes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          message: formData.message,
          imageUrl,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to submit tribute');
      }

      // Reset form and show success
      setFormData({ name: '', message: '' });
      setImageFile(null);
      setIsSubmitted(true);
      onTributeCreated?.();

      // Hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = `
    w-full bg-white border border-forest-200/50 rounded-xl px-4 md:px-5 py-3
    text-neutral-900/70 text-sm placeholder:text-neutral-400/50 tracking-wide font-sans
    focus:outline-none focus:border-amber-500 focus:bg-white
    transition-all duration-400
  `;

  if (isSubmitted) {
    return (
      <div className="text-center py-12 md:py-16">
        <div className="inline-flex flex-col items-center gap-3 md:gap-4">
          <div className="text-3xl md:text-4xl animate-bounce">🍂</div>
          <p className="font-['Cormorant_Garamond'] text-xl md:text-2xl text-neutral-900/80 italic">
            Thank you
          </p>
          <p className="text-neutral-500/60 text-sm tracking-widest font-sans">
            Your tribute has been shared with love
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-white border border-forest-100/40 rounded-2xl p-6 md:p-10
                    backdrop-blur-sm overflow-hidden shadow-lg">

      {/* Ambient autumn bg */}
      <div className="absolute -top-10 -right-10 text-[6rem] md:text-[8rem] opacity-[0.04]
                      select-none pointer-events-none rotate-12">🍁</div>

      <h2 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl text-neutral-900/80 italic tracking-wide mb-1">
        Share Your Tribute
      </h2>
      <div className="flex items-center gap-2 mb-6 md:mb-8">
        <div className="w-6 md:w-8 h-px bg-amber-500/60" />
        <div className="w-1 h-1 rounded-full bg-burgundy-500/60" />
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
        <div>
          <label className="block text-xs text-amber-700/80 tracking-[0.2em] uppercase mb-2 font-sans">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="Enter your name"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label className="block text-xs text-amber-700/80 tracking-[0.2em] uppercase mb-2 font-sans">
            Your Message
          </label>
          <textarea
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={`${inputClass} resize-none`}
            placeholder="Share your memories, thoughts, or well wishes…"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label className="block text-xs text-amber-700/80 tracking-[0.2em] uppercase mb-2 font-sans">
            Photo <span className="text-neutral-400/60 normal-case tracking-normal">(optional)</span>
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className={inputClass}
            disabled={isSubmitting}
          />
          {imageFile && (
            <p className="text-xs text-neutral-500 mt-1">
              Selected: {imageFile.name}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="group relative w-full mt-4 py-3.5 md:py-4 rounded-xl overflow-hidden
                     bg-forest-700
                     hover:bg-forest-800
                     disabled:bg-forest-400 disabled:cursor-not-allowed
                     text-white text-xs md:text-sm tracking-[0.15em] uppercase font-sans
                     transition-all duration-500 shadow-md
                     hover:shadow-lg"
        >
          {isSubmitting ? 'Sharing...' : 'Share Tribute'}
        </button>
      </form>
    </div>
  );
};

export default TributeForm;
