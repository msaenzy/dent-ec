import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { CLINIC_CONFIG } from '../../data/clinicData';
import { MessageCircle, ArrowDown, Sparkles, CheckCircle2, Shield } from 'lucide-react';

export const Hero: React.FC = () => {
  const headlineWords = CLINIC_CONFIG.brandPromise.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  };

  const handleScrollToTreatments = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const el = document.getElementById('tratamientos');
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] sm:min-h-screen pt-24 pb-16 lg:pt-32 lg:pb-24 flex items-center justify-center overflow-hidden bg-[#F7F6F3]"
    >
      {/* Background subtle geometric accents & clinical precision grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-10 right-[-5%] w-[450px] h-[450px] rounded-full bg-[#01B2DC]/6 blur-3xl" />
        <div className="absolute bottom-10 left-[-5%] w-[400px] h-[400px] rounded-full bg-[#023B8C]/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#0A1628_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-[0.035]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clinical Direction pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023B8C]/8 text-[#023B8C] text-xs font-semibold tracking-wide w-fit mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#01B2DC]" />
              <span>Odontología Integral en Samborondón</span>
              <span className="text-slate-300">•</span>
              <span className="font-medium text-[#0A1628]/80">{CLINIC_CONFIG.doctorName}</span>
            </div>

            {/* H1 with stagger word by word */}
            <motion.h1
              id="hero-main-title"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#0A1628] leading-[1.12] tracking-tight mb-6"
            >
              {headlineWords.map((word, idx) => (
                <motion.span
                  key={idx}
                  variants={wordVariants}
                  className={`inline-block mr-[0.28em] ${
                    word.toLowerCase().includes('digitalmente') ? 'text-[#023B8C]' : ''
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Exact Subheadline */}
            <motion.p
              id="hero-subheadline"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-base sm:text-lg text-[#5A6A85] leading-relaxed max-w-2xl mb-8 sm:mb-10 font-normal"
            >
              {CLINIC_CONFIG.subheadline}
            </motion.p>

            {/* CTAs with delay fade */}
            <motion.div
              id="hero-cta-group"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-10"
            >
              <Button
                id="hero-cta-primary"
                asAnchor={true}
                href={CLINIC_CONFIG.whatsappOfficialLink}
                target="_blank"
                variant="whatsapp"
                size="lg"
                className="shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2 text-[#0A1628]" />
                <span>Agenda tu valoración</span>
              </Button>

              <Button
                id="hero-cta-secondary"
                asAnchor={true}
                href="#tratamientos"
                onClick={handleScrollToTreatments}
                variant="outline"
                size="lg"
              >
                <span>Ver tratamientos</span>
                <ArrowDown className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>

            {/* Trust points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="pt-6 border-t border-[#E5E2DC] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#5A6A85]"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#01B2DC]" />
                <span>Planificación 3D previa</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#023B8C]" />
                <span>Protocolo de bioseguridad documentado</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#01B2DC]" />
                <span>Atención personalizada por cita</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Case Presentation / High-End Modern Clinic Consultation */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E5E2DC] bg-white group"
            >
              {/* Reference clinic photography: Modern clinical consultation with digital screening */}
              <div className="relative aspect-[4/4.8] sm:aspect-[4/4.5] w-full overflow-hidden bg-slate-100">
                <img
                  id="hero-showcase-image"
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80"
                  alt="Consulta dental moderna y luminosa con tecnología digital en dent.ec"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/85 via-transparent to-transparent opacity-80" />
                
                {/* Floating clinical badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-[#E5E2DC] flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#01B2DC] animate-pulse" />
                  <div>
                    <p className="text-[11px] font-bold text-[#0A1628] leading-tight">Planificación CAD-CAM</p>
                    <p className="text-[10px] text-[#5A6A85] leading-tight">Simulación estética 3D</p>
                  </div>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#E5E2DC] shadow-lg">
                  <p className="text-xs font-semibold text-[#023B8C] uppercase tracking-wider mb-1">
                    Odontología Integral
                  </p>
                  <p className="text-sm font-serif font-bold text-[#0A1628] leading-snug">
                    Rehabilitación oral, estética & implantes con precisión milimétrica
                  </p>
                  <p className="text-[11px] text-[#5A6A85] mt-1">
                    Samborondón, Ecuador
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
