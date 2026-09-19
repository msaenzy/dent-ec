import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { ABOUT_CLINIC_COPY, CLINIC_VALUES, CLINIC_CONFIG } from '../../data/clinicData';
import { Cpu, SearchCheck, Shield, CalendarClock, Stethoscope } from 'lucide-react';

const valueIcons: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-5 h-5 text-[#023B8C]" />,
  SearchCheck: <SearchCheck className="w-5 h-5 text-[#023B8C]" />,
  Shield: <Shield className="w-5 h-5 text-[#023B8C]" />,
  CalendarClock: <CalendarClock className="w-5 h-5 text-[#023B8C]" />,
};

export const SobreNosotros: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.2 });

  return (
    <section
      id="nosotros"
      ref={ref}
      className="py-20 lg:py-28 bg-[#F7F6F3] border-t border-[#E5E2DC]/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-xs font-semibold text-[#023B8C] uppercase tracking-wider mb-2">
            Filosofía y Dirección
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1628] leading-tight mb-4">
            Sobre nosotros / La clínica
          </h2>
        </div>

        {/* Two Column Layout: Exact Copy Narrative & Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left: Exact Narrative & Clinic Credentials */}
          <div
            className={`lg:col-span-6 transition-all duration-700 transform ${
              isVisible
                ? 'opacity-100 scale-100 translate-y-0'
                : 'opacity-0 scale-[0.98] translate-y-6'
            }`}
          >
            <div className="dent-card p-8 sm:p-10 relative overflow-hidden bg-white">
              {/* Doctor direction header badge */}
              <div className="flex items-center gap-3 pb-6 mb-6 border-b border-[#E5E2DC]/80">
                <div className="w-12 h-12 rounded-full bg-[#023B8C]/10 border border-[#023B8C]/20 flex items-center justify-center shrink-0">
                  <Stethoscope className="w-6 h-6 text-[#023B8C]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#0A1628] leading-tight">
                    {CLINIC_CONFIG.doctorName}
                  </h3>
                  <p className="text-xs text-[#5A6A85]">
                    {CLINIC_CONFIG.doctorTitle} • Samborondón
                  </p>
                </div>
              </div>

              {/* Exact Copy from Prompt */}
              <p
                id="about-clinic-text"
                className="text-base sm:text-[17px] text-[#0A1628] leading-relaxed font-normal"
              >
                {ABOUT_CLINIC_COPY}
              </p>

              {/* Verified clinic note badge */}
              <div className="mt-8 pt-6 border-t border-[#E5E2DC]/80 flex items-center justify-between text-xs text-[#5A6A85]">
                <span className="font-medium text-[#023B8C]">Samborondón • Ecuador 🇪🇨</span>
                <span>Planificación 3D & CAD-CAM</span>
              </div>
            </div>

            {/* Reference photographic snippet */}
            <div className="mt-6 rounded-2xl overflow-hidden border border-[#E5E2DC] shadow-sm relative h-48 bg-slate-200">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80"
                alt="Instrumental clínico y tecnología odontológica de precisión en Samborondón"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/80 to-transparent flex items-center p-6">
                <p className="text-white text-sm font-serif max-w-xs leading-snug">
                  Tecnología de última generación y biomateriales de alta biocompatibilidad.
                </p>
              </div>
            </div>
          </div>

          {/* Right: 4 Values Grid with Consistent Line Icons */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5">
            <h3 className="text-xs font-semibold text-[#023B8C] uppercase tracking-wider mb-1">
              Pilares de Atención
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {CLINIC_VALUES.map((val, index) => {
                const delayMs = 150 + index * 100;

                return (
                  <div
                    key={val.id}
                    id={`clinic-value-${val.id}`}
                    style={{
                      transitionDelay: `${delayMs}ms`,
                    }}
                    className={`dent-card p-6 bg-white transition-all duration-500 transform ${
                      isVisible
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-95'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#023B8C]/8 flex items-center justify-center border border-[#023B8C]/15 mb-4">
                      {valueIcons[val.iconName]}
                    </div>
                    <h4 className="font-serif text-lg font-bold text-[#0A1628] mb-1.5 leading-snug">
                      {val.title}
                    </h4>
                    <p className="text-sm text-[#5A6A85] leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Scientific Commitment Note */}
            <div className="mt-4 p-5 rounded-xl bg-[#023B8C]/5 border border-[#023B8C]/15 text-xs text-[#0A1628]/90 leading-relaxed">
              <span className="font-bold text-[#023B8C]">Enfoque Clínico-Científico:</span> La predictibilidad de cada tratamiento surge del diagnóstico computarizado y del respeto biológico a las estructuras dentales originales.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
