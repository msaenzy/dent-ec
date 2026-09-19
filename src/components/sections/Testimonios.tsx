import React, { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { TESTIMONIALS_DATA } from '../../data/clinicData';
import { Quote, HeartHandshake, Sparkles, Pause, Play, Star } from 'lucide-react';

export const Testimonios: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.15 });
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate list to create a seamless infinite loop in marquee
  const loopedList = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA];

  return (
    <section
      id="testimonios"
      ref={ref}
      className="py-20 lg:py-28 bg-[#F7F6F3] border-t border-[#E5E2DC]/80 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-[#023B8C] uppercase tracking-wider mb-2">
              Experiencias de Pacientes
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1628] leading-tight mb-3">
              Historias Reales & Sonrisas Felices
            </h2>
            <p className="text-sm sm:text-base text-[#5A6A85] leading-relaxed">
              La confianza se gana con honestidad clínica, tecnología de punta y resultados naturales. Pacientes de Samborondón y Guayaquil comparten su experiencia:
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#E5E2DC] bg-white text-xs text-[#0A1628] hover:bg-slate-50 transition-colors cursor-pointer"
              aria-label={isPaused ? 'Reanudar carrusel' : 'Pausar carrusel'}
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-[#023B8C]" />
                  <span>Reanudar</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#5A6A85]" />
                  <span>Pausar</span>
                </>
              )}
            </button>
            <span className="text-xs text-[#5A6A85] hidden sm:inline">
              (Pausa automática al pasar el cursor)
            </span>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Marquee Track */}
      <div
        className="w-full relative overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Soft edge gradient fade */}
        <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-20 bg-gradient-to-r from-[#F7F6F3] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-20 bg-gradient-to-l from-[#F7F6F3] to-transparent z-10 pointer-events-none" />

        <div
          className={`flex gap-6 sm:gap-8 w-max ${
            isVisible ? 'animate-infinite-scroll' : ''
          }`}
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {loopedList.map((item, idx) => {
            const isNote = item.isHandwrittenNote;

            return (
              <div
                key={`${item.id}-${idx}`}
                className={`w-[320px] sm:w-[380px] p-7 rounded-2xl flex flex-col justify-between shrink-0 transition-all duration-300 ${
                  isNote
                    ? 'bg-[#023B8C] text-white shadow-lg border border-[#023B8C]'
                    : 'bg-white text-[#0A1628] shadow-sm border border-[#E5E2DC] hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top indicator icon & rating */}
                  <div className="flex items-center justify-between mb-4">
                    {isNote ? (
                      <div className="flex items-center gap-2 text-[#01B2DC]">
                        <HeartHandshake className="w-5 h-5" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-white">
                          Gesto Real en Clínica
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    )}

                    {isNote ? (
                      <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#01B2DC]/20 text-[#01B2DC] font-medium border border-[#01B2DC]/30">
                        Destacado
                      </span>
                    ) : (
                      <span className="text-[11px] font-medium text-[#023B8C] bg-[#023B8C]/5 px-2.5 py-0.5 rounded-full border border-[#023B8C]/10">
                        Paciente Verificado
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <p
                    className={`text-sm sm:text-[15px] leading-relaxed mb-6 ${
                      isNote
                        ? 'text-white/95 italic font-serif text-base'
                        : 'text-[#5A6A85]'
                    }`}
                  >
                    "{item.content}"
                  </p>
                </div>

                {/* Author & Tag Footer */}
                <div
                  className={`pt-4 border-t ${
                    isNote ? 'border-white/20 text-white' : 'border-[#E5E2DC]/80 text-[#0A1628]'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <p className="font-semibold text-sm">{item.author}</p>
                      <p
                        className={`text-[11px] mt-0.5 ${
                          isNote ? 'text-white/80' : 'text-[#5A6A85]'
                        }`}
                      >
                        {item.tag}
                      </p>
                    </div>

                    {isNote ? (
                      <Sparkles className="w-4 h-4 text-[#01B2DC]" />
                    ) : (
                      <Quote className="w-4 h-4 text-[#023B8C]/40" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Verification Transparency Notice */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <p className="text-xs text-[#5A6A85] text-center max-w-2xl mx-auto">
          Atención personalizada bajo cita previa en Samborondón. Cada tratamiento inicia con un diagnóstico digital integral 3D.
        </p>
      </div>
    </section>
  );
};
