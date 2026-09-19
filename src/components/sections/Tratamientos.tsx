import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { TREATMENTS_LIST, CLINIC_CONFIG } from '../../data/clinicData';
import {
  Sparkles,
  Smile,
  Sparkle,
  Activity,
  EyeOff,
  ShieldCheck,
  HeartPulse,
  Stethoscope,
  ArrowUpRight,
} from 'lucide-react';

const treatmentIcons: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-5 h-5 text-[#023B8C]" />,
  Smile: <Smile className="w-5 h-5 text-[#023B8C]" />,
  Sparkle: <Sparkle className="w-5 h-5 text-[#023B8C]" />,
  Activity: <Activity className="w-5 h-5 text-[#023B8C]" />,
  EyeOff: <EyeOff className="w-5 h-5 text-[#023B8C]" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#023B8C]" />,
  HeartPulse: <HeartPulse className="w-5 h-5 text-[#023B8C]" />,
  Stethoscope: <Stethoscope className="w-5 h-5 text-[#023B8C]" />,
};

export const Tratamientos: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  const handleConsultTreatment = (treatmentName: string) => {
    // Fill or jump to contact form with pre-selected treatment or open direct WhatsApp
    const formSection = document.getElementById('contacto');
    if (formSection) {
      const selectElem = document.getElementById('select-tratamiento') as HTMLSelectElement | null;
      if (selectElem) {
        // Find best match in options
        for (let i = 0; i < selectElem.options.length; i++) {
          if (selectElem.options[i].text.toLowerCase().includes(treatmentName.substring(0, 10).toLowerCase())) {
            selectElem.selectedIndex = i;
            selectElem.dispatchEvent(new Event('change', { bubbles: true }));
            break;
          }
        }
      }
      const navOffset = 80;
      const elementPosition = formSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    } else {
      window.open(CLINIC_CONFIG.whatsappOfficialLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section
      id="tratamientos"
      ref={ref}
      className="py-20 lg:py-28 bg-[#F7F6F3] border-t border-[#E5E2DC]/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-[#023B8C] uppercase tracking-wider mb-2">
              Especialidades Clínicas
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1628] leading-tight mb-4">
              Oferta y Tratamientos
            </h2>
            <p className="text-base text-[#5A6A85] leading-relaxed">
              Planes integrales diseñados bajo evidencia científica, instrumental CAD-CAM y protocolos de máxima preservación dental.
            </p>
          </div>

          <div className="shrink-0">
            <span className="inline-flex items-center text-xs font-semibold text-[#023B8C] bg-white px-3 py-1.5 rounded-full border border-[#E5E2DC]">
              8 especialidades en Samborondón
            </span>
          </div>
        </div>

        {/* 8 Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {TREATMENTS_LIST.map((item, index) => {
            const staggerDelay = (index % 4) * 100 + Math.floor(index / 4) * 80;

            return (
              <div
                key={item.id}
                id={`treatment-card-${item.id}`}
                style={{
                  transitionDelay: `${staggerDelay}ms`,
                }}
                className={`dent-card dent-card-interactive p-6 flex flex-col justify-between transition-all duration-500 transform ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div>
                  {/* Card Header with Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#023B8C]/8 flex items-center justify-center border border-[#023B8C]/15">
                      {treatmentIcons[item.iconName]}
                    </div>
                    {item.badge && (
                      <span className="text-[11px] font-medium tracking-wide text-[#023B8C] bg-[#023B8C]/6 px-2.5 py-0.5 rounded-full border border-[#023B8C]/10">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Treatment Name */}
                  <h3 className="font-serif text-lg font-bold text-[#0A1628] mb-2.5 leading-snug">
                    {item.name}
                  </h3>

                  {/* Treatment Description */}
                  <p className="text-sm text-[#5A6A85] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <button
                  type="button"
                  id={`consult-treatment-${item.id}`}
                  onClick={() => handleConsultTreatment(item.name)}
                  className="inline-flex items-center justify-between w-full pt-3 border-t border-[#E5E2DC]/70 text-xs font-semibold text-[#023B8C] group hover:text-[#01B2DC] transition-colors"
                  aria-label={`Consultar sobre ${item.name}`}
                >
                  <span>Consultar valoración</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
