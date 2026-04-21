import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-cream-100">

      {/* ── HERO ─────────────────────────────────── */}
        <section
          className="relative min-h-screen flex items-center md:items-end overflow-hidden"
          style={{
            backgroundImage: `url('https://picsum.photos/1920/1080')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
        {/* Fallback gradient shown while image loads */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-cream-50 to-cream-200" />

        {/* Subtle warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-t
                        from-forest-900/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r
                        from-cream-50/50 via-transparent to-transparent" />

        {/* Decorative autumn elements */}
        <div className="absolute top-32 md:top-32 right-4 md:right-16 text-3xl md:text-6xl opacity-10 md:opacity-15 animate-float
                        select-none pointer-events-none">🍂</div>
        <div className="absolute top-48 md:top-56 right-16 md:right-48 text-2xl md:text-4xl opacity-8 md:opacity-12 animate-float-slow
                        select-none pointer-events-none" style={{ animationDelay: '1s' }}>🌰</div>
        <div className="absolute top-64 md:top-80 right-4 md:right-28 text-3xl md:text-5xl opacity-8 md:opacity-10 animate-float
                        select-none pointer-events-none" style={{ animationDelay: '2s' }}>🍁</div>

         {/* Hero content */}
          <div
            className="relative z-10 pb-12 md:pb-24 px-4 md:px-12 lg:px-20 max-w-7xl w-full animate-fade-in-up"
            style={{ animationDuration: '1.4s', animationFillMode: 'both' }}
          >
            <div className="flex items-center gap-2 mb-3 md:mb-6">
              <div className="w-5 h-px md:w-8 md:h-px bg-burgundy-500/50" />
              <span className="text-burgundy-700/60 text-[9px] md:text-xs tracking-[0.4em] uppercase font-sans font-light">
                In Loving Memory
              </span>
            </div>

             <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-12 items-center">
               {/* Left — Image */}
               <div className="relative w-full max-w-[200px] mx-auto md:max-w-sm md:mx-0">
                 <div className="relative aspect-square">
                   <Image
                     src="/whatsapp-1.jpeg"
                     alt="Adetutu Grace Alabede"
                     fill
                     sizes="(max-width: 768px) 60vw, 400px"
                     className="object-cover rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl"
                   />
                   {/* Decorative border */}
                   <div className="absolute -inset-1 md:-inset-4 border-2 border-burgundy-300/40 rounded-2xl md:rounded-3xl" />
                 </div>
               </div>

               {/* Right — Text */}
               <div className="space-y-2 md:space-y-6 text-center md:text-left">
                <h1 className="font-cormorant text-2xl md:text-4xl lg:text-5xl font-light leading-tight
                               text-neutral-900/80">
                  Adetutu
                </h1>
                <h1 className="font-cormorant text-2xl md:text-4xl lg:text-5xl font-light leading-tight
                               italic text-burgundy-700/70">
                  Grace
                </h1>
                <h1 className="font-cormorant text-2xl md:text-4xl lg:text-5xl font-light leading-tight
                               text-neutral-900/60">
                  Alabede
                </h1>

                <p className="text-amber-700/55 text-sm md:text-base lg:text-lg font-light tracking-wide
                              max-w-md leading-relaxed font-sans">
                  Beloved mother, cherished soul, and garden of grace.
                  <br className="hidden sm:block" />Forever blooming in our hearts.
                </p>

                {/* WhatsApp Images Preview */}
                <div className="flex items-center gap-2 md:gap-4">
                  <div className="flex -space-x-1.5 md:-space-x-3">
                    <img src="/whatsapp-2.jpeg"
                         alt="Memory 1"
                         className="w-6 h-6 md:w-10 md:h-10 rounded-full object-cover border-2 border-cream-100 ring-2 ring-burgundy-200/50" />
                    <img src="/whatsapp-4.jpeg"
                         alt="Memory 2"
                         className="w-6 h-6 md:w-10 md:h-10 rounded-full object-cover border-2 border-cream-100 ring-2 ring-burgundy-200/50" />
                  </div>
                  <span className="text-neutral-600/60 text-[9px] md:text-xs tracking-[0.2em] uppercase font-sans">
                    Cherished memories
                  </span>
                </div>

                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-px h-6 md:h-10 md:h-14 bg-gradient-to-b from-amber-500/40 to-transparent" />
                  <span className="text-amber-700/50 text-[9px] md:text-xs tracking-[0.25em] uppercase font-sans">
                    Scroll to remember her
                  </span>
                </div>
              </div>
            </div>
         </div>
      </section>

      {/* ── LIFE SUMMARY ─────────────────────────── */}
      <section className="relative py-20 md:py-32 px-4 md:px-6 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#e9ebe5_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#f6f7f4_0%,_transparent_60%)]" />

        <div className="relative max-w-4xl mx-auto px-4 md:px-0">
          <div className="flex items-center gap-3 md:gap-5 mb-12 md:mb-20">
            <div className="h-px flex-1 bg-amber-500/50" />
            <span className="text-amber-700/60 text-xs tracking-[0.35em] uppercase font-sans shrink-0">
              A Life Well Lived
            </span>
            <div className="h-px flex-1 bg-amber-500/50" />
          </div>

          <div className="grid md:grid-cols-[160px_1fr] gap-8 md:gap-12 items-start">
            {/* Dates */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <p className="text-neutral-500/60 text-xs tracking-[0.3em] uppercase font-sans mb-1">Born</p>
                <p className="font-cormorant text-neutral-800/70 text-xl md:text-2xl tracking-wide">September 5</p>
                <p className="font-cormorant text-neutral-600/80 text-3xl md:text-4xl font-light">1968</p>
              </div>
              <div className="w-px h-10 md:h-12 bg-amber-500/60 ml-2" />
              <div>
                <p className="text-neutral-500/60 text-xs tracking-[0.3em] uppercase font-sans mb-1">Passed</p>
                <p className="font-cormorant text-neutral-800/70 text-xl md:text-2xl tracking-wide">April 15</p>
                <p className="font-cormorant text-neutral-600/80 text-3xl md:text-4xl font-light">2026</p>
              </div>
            </div>

            {/* Body text */}
            <div className="space-y-5 md:space-y-8">
               <p className="font-cormorant text-neutral-900/70 text-base md:text-xl leading-[1.9] font-light">
                 Adetutu was a woman of extraordinary warmth — her name meant
                 &quot;gentle and sweet as honey,&quot; and she lived every day as a testament
                 to that truth.
               </p>
              <p className="font-cormorant text-neutral-900/55 text-base md:text-xl leading-[1.9] font-light">
                She moved through life with quiet grace and fierce love, filling every
                room she entered with a presence that felt like sunlight through autumn leaves.
                Her laughter was a garden that everyone wanted to sit in.
              </p>
              <p className="font-cormorant text-neutral-900/55 text-base md:text-xl leading-[1.9] font-light">
                She leaves behind a legacy of love, dignity, and faith — rooted deep,
                and blooming still in those of us who were lucky enough to know her.
              </p>

               <div className="border-l-2 border-burgundy-500/40 pl-6 md:pl-8 mt-8 md:mt-12">
                 <p className="font-cormorant text-burgundy-700/60 text-xl md:text-2xl italic leading-relaxed font-light">
                   &quot;She was the kind of person the whole world felt softer around.&quot;
                 </p>
               </div>
            </div>
          </div>
        </div>
      </section>

       {/* ── FEATURED MEMORIES ───────────────────────── */}
       <section className="py-10 md:py-24 px-4 bg-cream-50">
         <div className="max-w-6xl mx-auto">
           <div className="text-center mb-6 md:mb-10">
             <h2 className="font-cormorant text-2xl md:text-4xl text-neutral-900 mb-2 md:mb-3">
               Cherished Memories
             </h2>
             <p className="text-amber-700/60 text-sm md:text-base lg:text-lg font-sans max-w-2xl mx-auto">
               A selection of beautiful moments from her life.
             </p>
           </div>
           <div className="grid md:grid-cols-2 gap-4 md:gap-8">
             <div className="relative h-56 md:h-96 rounded-2xl overflow-hidden shadow-lg">
               <Image src="/whatsapp-1.jpeg" alt="Memory 1" fill className="object-cover" />
             </div>
             <div className="relative h-56 md:h-96 rounded-2xl overflow-hidden shadow-lg">
               <Image src="/whatsapp-5.jpeg" alt="Memory 2" fill className="object-cover" />
             </div>
           </div>
         </div>
       </section>

      {/* ── CALL TO ACTION ───────────────────────── */}
      <section className="relative py-20 md:py-32 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cream-50 via-cream-100 to-cream-50" />
        <div className="absolute left-0 bottom-0 text-[8rem] md:text-[14rem] opacity-[0.04]
                        select-none pointer-events-none leading-none">🍂</div>
        <div className="absolute right-0 top-0 text-[6rem] md:text-[10rem] opacity-[0.04]
                        select-none pointer-events-none rotate-45 leading-none">🌰</div>

        <div className="relative max-w-3xl mx-auto text-center px-4">
          <p className="text-amber-700/60 text-xs tracking-[0.4em] uppercase font-sans mb-6 md:mb-8">
            Tributes & Memories
          </p>
          <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light
                         text-neutral-900/70 leading-tight mb-4 md:mb-6 px-2">
            She touched so many lives.
            <span className="italic text-amber-700/60 block mt-2">
              Share how she touched yours.
            </span>
          </h2>

           {/* WhatsApp Photos Preview */}
           <div className="flex items-center justify-center gap-2 md:gap-4 my-6 md:my-10">
             <div className="h-px w-6 md:w-12 bg-amber-500/50" />
             <div className="flex items-center justify-center -space-x-1.5 md:-space-x-3">
               <img src="/whatsapp-1.jpeg"
                    alt="Memory 1"
                    className="w-8 h-8 md:w-14 md:h-14 rounded-full object-cover border-2 border-cream-100 ring-2 ring-burgundy-300/60 shadow-md" />
               <img src="/whatsapp-2.jpeg"
                    alt="Memory 2"
                    className="w-8 h-8 md:w-14 md:h-14 rounded-full object-cover border-2 border-cream-100 ring-2 ring-burgundy-300/60 shadow-md" />
               <img src="/whatsapp-4.jpeg"
                    alt="Memory 3"
                    className="w-8 h-8 md:w-14 md:h-14 rounded-full object-cover border-2 border-cream-100 ring-2 ring-burgundy-300/60 shadow-md" />
             </div>
             <div className="h-px w-6 md:w-12 bg-amber-500/50" />
           </div>

          <p className="text-amber-700/50 text-sm md:text-lg leading-relaxed font-light
                        mb-10 md:mb-14 max-w-xl mx-auto font-sans px-2">
            If Adetutu Grace touched your life, we would love to hear from you.
            Leave a memory, a prayer, or a few words — every tribute is a leaf
            laid at her feet.
          </p>

          <Link
            href="/tributes"
            className="group inline-flex items-center gap-3 md:gap-4 px-8 md:px-10 py-3.5 md:py-5
                       bg-forest-600
                       hover:bg-forest-700
                       text-white rounded-full text-xs md:text-sm tracking-[0.2em] uppercase font-sans
                       transition-all duration-500 shadow-lg
                       hover:shadow-xl
                       hover:-translate-y-1"
          >
            Leave a Tribute
            <span className="w-4 md:w-5 h-px bg-white/60 group-hover:w-6 md:group-hover:w-8 transition-all duration-500 block" />
          </Link>
        </div>
      </section>

    </div>
  );
}
