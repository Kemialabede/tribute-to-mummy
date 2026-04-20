'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Tributes', href: '/tributes' },
    { label: 'Gallery', href: '/gallery' },
  ];

  return (
    <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled
            ? 'bg-cream-100/95 backdrop-blur-xl border-b border-forest-500/60 py-2'
            : 'bg-transparent py-3 md:py-4'
          }`}
    >
      <div className="w-full max-w-7xl mx-auto px-3 md:px-8 flex items-center justify-between">

        {/* LEFT — logo */}
        <Link href="/" className="group flex items-center gap-1.5 md:gap-3 shrink-0">
          <svg width="16" height="16" viewBox="0 0 18 18" fill="none" className="w-3.5 h-3.5 md:w-[18px] md:h-[18px]">
            <ellipse cx="9" cy="5" rx="3" ry="5" fill="#8b7bb8" opacity="0.8" transform="rotate(0 9 9)" />
            <ellipse cx="9" cy="5" rx="3" ry="5" fill="#c9c2b5" opacity="0.7" transform="rotate(72 9 9)" />
            <ellipse cx="9" cy="5" rx="3" ry="5" fill="#8b7bb8" opacity="0.8" transform="rotate(144 9 9)" />
            <ellipse cx="9" cy="5" rx="3" ry="5" fill="#c9c2b5" opacity="0.7" transform="rotate(216 9 9)" />
            <ellipse cx="9" cy="5" rx="3" ry="5" fill="#8b7bb8" opacity="0.8" transform="rotate(288 9 9)" />
            <circle cx="9" cy="9" r="2" fill="#faf8f6" />
          </svg>
          <span className="font-['Cormorant_Garamond'] text-neutral-900/80 text-[10px] md:text-xs
                           tracking-[0.15em] uppercase italic
                           group-hover:text-neutral-900 transition-colors duration-500">
            In Loving Memory
          </span>
        </Link>

        {/* RIGHT — nav links (desktop) */}
        <div className="hidden md:flex items-center gap-8 md:gap-10">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="relative text-neutral-700 hover:text-burgundy-600 transition-colors
                         duration-300 text-xs tracking-[0.2em] uppercase font-sans group"
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-burgundy-500/70
                               group-hover:w-full transition-all duration-500" />
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 text-neutral-900 rounded-lg hover:bg-neutral-100/50 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>

      </div>

       {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-cream-100/95 backdrop-blur-xl border-b border-forest-500/50 py-4 px-4 animate-fade-in">
            <div className="flex flex-col gap-3">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="text-neutral-700 hover:text-burgundy-600 transition-colors
                           duration-300 text-sm tracking-[0.2em] uppercase font-sans py-2 text-center"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
    </nav>
  );
};

export default Navbar;
