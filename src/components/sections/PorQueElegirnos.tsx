import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { WHY_US_CARDS } from '../../data/clinicData';
import { ScanFace, Layers, FileCheck2 } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  ScanFace: <ScanFace className="w-6 h-6 text-[#023B8C]" />,
  Layers: <Layers className="w-6 h-6 text-[#023B8C]" />,
  FileCheck2: <FileCheck2 className="w-6 h-6 text-[#023B8C]" />,
};

export const PorQueElegirnos: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.2 });

  return (
    <section
      id="por-que-elegirnos"
      ref={ref}
      className="py-20 lg:py-28 bg-[#F7F6F3] border-t border-[#E5E2DC]/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-16">
          <p className="text-xs font-semibold text-[#023B8C] uppercase tracking-wider mb-2">
            Metodología Clínica
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1628] leading-tight mb-4">
            Por qué elegirnos
          </h2>
          <p className="text-base text-[#5A6A85] leading-relaxed">
            La odontología contemporánea exige exactitud científica y predictibilidad. Así cuidamos de tu salud bucodental:
          </p>
        </div>

        {/* 3 Staggered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {WHY_US_CARDS.map((card, index) => {
            const delayMs = index * 140;

            return (
              <div
                key={card.id}
                id={`card-why-us-${card.id}`}
                style={{
                  transitionDelay: `${delayMs}ms`,
                }}
                className={`dent-card dent-card-interactive p-7 sm:p-8 flex flex-col justify-between transition-all duration-500 transform ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div>
                  {/* Top indicator & icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#023B8C]/8 flex items-center justify-center border border-[#023B8C]/15">
                      {iconMap[card.iconName]}
                    </div>
                    <span className="font-serif text-2xl font-bold text-[#01B2DC]/60 select-none">
                      {card.indexNumber}
                    </span>
                  </div>

                  {/* Exact Title */}
                  <h3 className="font-serif text-xl font-bold text-[#0A1628] mb-3 leading-snug">
                    {card.title}
                  </h3>

                  {/* Exact Description */}
                  <p className="text-sm sm:text-[15px] text-[#5A6A85] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Subtle bottom detail line */}
                <div className="mt-8 pt-4 border-t border-[#E5E2DC]/60 flex items-center justify-between text-xs font-medium text-[#023B8C]">
                  <span>Estándar dent.ec</span>
                  <div className="w-2 h-2 rounded-full bg-[#01B2DC]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
