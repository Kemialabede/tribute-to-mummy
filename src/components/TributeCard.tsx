import Image from 'next/image';
import { Tribute } from '@/lib/types';

interface TributeCardProps {
  tribute: Tribute;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

const TributeCard = ({ tribute }: TributeCardProps) => {
  return (
    <div className="group relative bg-white border border-forest-100/40 rounded-2xl p-5 md:p-7
                    hover:bg-white hover:border-amber-300/50 hover:shadow-lg
                    transition-all duration-500 backdrop-blur-sm overflow-hidden">

      {/* Soft leaf watermark */}
      <div className="absolute -bottom-4 -right-4 text-5xl md:text-7xl opacity-5
                      select-none pointer-events-none rotate-12 group-hover:opacity-10
                      transition-opacity duration-700">
        🍂
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-8 md:left-10 right-8 md:right-10 h-px
                      bg-gradient-to-r from-transparent via-amber-500/40 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="flex items-start gap-3 md:gap-5">
        {
          <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br
                          from-forest-50 to-forest-100 flex items-center justify-center
                          ring-1 ring-forest-200/60">
            <span className="font-['Cormorant_Garamond'] text-neutral-700 text-lg md:text-xl italic">
              {tribute.name[0]}
            </span>
          </div>
        }

        <div className="flex-1 min-w-0">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-['Cormorant_Garamond'] text-base md:text-lg text-neutral-900/80 tracking-wide">
              {tribute.name}
            </h3>
            <span className="text-xs text-amber-600/50 tracking-wide shrink-0 font-sans">
              {formatDate(tribute.created_at)}
            </span>
          </div>
          <div className="w-5 h-px bg-amber-500/40 my-2 md:my-3" />
          <p className="text-neutral-900/60 text-sm leading-relaxed font-light">
            {tribute.message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TributeCard;
