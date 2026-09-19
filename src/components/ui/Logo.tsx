import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
  showSubtitle = false,
}) => {
  const isLight = variant === 'light';

  // Dimension scaling
  const iconSize = size === 'sm' ? 34 : size === 'lg' ? 48 : 40;
  const textSize = size === 'sm' ? 'text-xl' : size === 'lg' ? 'text-2xl' : 'text-[22px]';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Precision SVG Isotype */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
        aria-label="Isotipo dent.ec"
      >
        <defs>
          <linearGradient id="dentecGradPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#023B8C" />
            <stop offset="100%" stopColor="#01B2DC" />
          </linearGradient>
          <linearGradient id="dentecGradWing" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#01B2DC" />
            <stop offset="60%" stopColor="#023B8C" />
            <stop offset="100%" stopColor="#007DA1" />
          </linearGradient>
          <linearGradient id="dentecRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#01B2DC" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#023B8C" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Circular base */}
        <circle cx="32" cy="32" r="30" fill="#0A1628" />
        <circle cx="32" cy="32" r="29.2" stroke="url(#dentecRingGrad)" strokeWidth="1.6" />

        {/* Geometric ribbon / paper airplane facet forming a modern "D" */}
        <g transform="translate(1, 0)">
          {/* Main vertical stem & rear fold */}
          <path
            d="M21 16.5 L28 13 L28 47.5 L21 44 Z"
            fill="#023B8C"
          />
          {/* Dynamic sweeping outer facet of the 'D' */}
          <path
            d="M28 13 C38.5 13.5 45 20.5 45 30.5 C45 39.5 38.5 47 28 47.5 L34 40.5 C40 37.5 40 23.5 32 19 Z"
            fill="url(#dentecGradPrimary)"
          />
          {/* Central aerodynamic folding wing / paper-airplane apex */}
          <path
            d="M24.5 19.5 L39.5 30.5 L24.5 38.5 L29 30.5 Z"
            fill="url(#dentecGradWing)"
          />
          {/* Cyan edge highlight */}
          <path
            d="M28 13 L39.5 30.5 L28 47.5"
            stroke="#01B2DC"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.8"
          />
        </g>
      </svg>

      {/* Wordmark typography in Fraunces */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline">
          <span
            className={`font-serif font-bold tracking-tight ${textSize} ${
              isLight ? 'text-white' : 'text-[#0A1628]'
            }`}
          >
            dent
          </span>
          <span className="font-serif font-bold text-[#01B2DC] text-[1.15em] ml-0.5">
            .ec
          </span>
        </div>
        {showSubtitle && (
          <span
            className={`text-[9.5px] font-sans uppercase tracking-[0.16em] font-medium mt-0.5 ${
              isLight ? 'text-slate-300' : 'text-[#023B8C]'
            }`}
          >
            Dent on Dents
          </span>
        )}
      </div>
    </div>
  );
};
