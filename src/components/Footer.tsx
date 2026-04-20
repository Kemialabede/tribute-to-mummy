const Footer = () => {
  return (
    <footer className="relative bg-white border-t border-amber-500/40 py-12 md:py-16 overflow-hidden">
      {/* Decorative autumn elements */}
      <div className="absolute bottom-0 left-4 md:left-10 opacity-10 select-none text-6xl md:text-8xl pointer-events-none">
        🍂
      </div>
      <div className="absolute top-0 right-4 md:right-10 opacity-10 select-none text-5xl md:text-7xl pointer-events-none rotate-12">
        🌰
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center space-y-3 md:space-y-4">
        <div className="flex items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
          <div className="h-px w-16 md:w-20 bg-gradient-to-r from-transparent to-amber-500/60" />
          <svg width="12" height="12" viewBox="0 0 14 14" className="w-3.5 h-3.5 md:w-[14px] md:h-[14px]">
            <circle cx="7" cy="7" r="2" fill="#d97706" />
            <circle cx="7" cy="2" r="1.5" fill="#d97706" opacity="0.5" />
            <circle cx="7" cy="12" r="1.5" fill="#d97706" opacity="0.5" />
            <circle cx="2" cy="7" r="1.5" fill="#d97706" opacity="0.5" />
            <circle cx="12" cy="7" r="1.5" fill="#d97706" opacity="0.5" />
          </svg>
          <div className="h-px w-16 md:w-20 bg-gradient-to-l from-transparent to-amber-500/60" />
        </div>

        <p className="font-['Cormorant_Garamond'] text-xl md:text-2xl text-neutral-900/80 italic tracking-wide">
          Adetutu Grace Alabede
        </p>
        <p className="text-neutral-600/50 text-xs tracking-[0.3em] uppercase font-sans">
          Forever blooming in our hearts
        </p>
        <p className="text-neutral-500/40 text-xs tracking-wide font-sans mt-4 md:mt-6">
          Created with love and remembrance
        </p>
      </div>
    </footer>
  );
};

export default Footer;
