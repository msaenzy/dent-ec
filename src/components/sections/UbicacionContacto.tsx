import React, { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import {
  CLINIC_CONFIG,
  TREATMENT_OPTIONS,
  SITUATION_OPTIONS,
  SCHEDULE_OPTIONS,
  STAFF_WHATSAPP_SCRIPT,
} from '../../data/clinicData';
import { Button } from '../ui/Button';
import { TreatmentOption, SituationOption, ScheduleOption, ContactFormData } from '../../types';
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  ExternalLink,
  Send,
  Sparkles,
  Info,
  CheckCircle2,
  Copy,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

export const UbicacionContacto: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  const [formData, setFormData] = useState<ContactFormData>({
    nombre: '',
    tratamiento: TREATMENT_OPTIONS[0],
    situacion: SITUATION_OPTIONS[0],
    horario: SCHEDULE_OPTIONS[0],
  });

  const [copiedScript, setCopiedScript] = useState(false);
  const [showStaffGuide, setShowStaffGuide] = useState(false);
  const [submissionNotice, setSubmissionNotice] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nombre.trim()) {
      alert('Por favor, ingresa tu nombre completo para personalizar tu mensaje.');
      return;
    }

    const rawMessage = `Hola, soy ${formData.nombre.trim()}. Me interesa ${formData.tratamiento} — mi situación actual es: ${formData.situacion}. Mi horario preferente es ${formData.horario}. ¿Podrían ayudarme a agendar una valoración?`;

    const encodedMessage = encodeURIComponent(rawMessage);

    // Official WhatsApp Business short link with text parameter
    // Note: If short link wa.me/message/... doesn't append ?text= on all web clients, we provide direct URL
    const targetUrl = `${CLINIC_CONFIG.whatsappOfficialLink}?text=${encodedMessage}`;

    setSubmissionNotice(
      `Abriendo WhatsApp con tu solicitud pre-calificada para ${formData.tratamiento}...`
    );

    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyScript = () => {
    navigator.clipboard.writeText(STAFF_WHATSAPP_SCRIPT.template);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2500);
  };

  return (
    <section
      id="contacto"
      ref={ref}
      className="py-20 lg:py-28 bg-[#F7F6F3] border-t border-[#E5E2DC]/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-16">
          <p className="text-xs font-semibold text-[#023B8C] uppercase tracking-wider mb-2">
            Agendamiento & Localización
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1628] leading-tight mb-4">
            Ubicación y Contacto
          </h2>
          <p className="text-base text-[#5A6A85] leading-relaxed">
            Completa tus datos para iniciar tu valoración pre-calificada directamente por WhatsApp. Dedicamos el tiempo necesario a cada consulta.
          </p>
        </div>

        {/* Opposite Slide-in Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Form & Clinical Contact Details (Slides from Left) */}
          <div
            className={`lg:col-span-7 transition-all duration-700 ease-out transform ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
            }`}
          >
            {/* Intelligent Filtration Form Card */}
            <div className="dent-card p-7 sm:p-9 bg-white shadow-md border border-[#E5E2DC]">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E5E2DC]">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#0A1628]">
                    Formulario de Filtración Inteligente
                  </h3>
                  <p className="text-xs text-[#5A6A85] mt-1">
                    Pre-califica tu valoración sin intermediarios ni llamadas innecesarias.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#01B2DC]/10 border border-[#01B2DC]/20 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#01B2DC]" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* 1. Nombre completo */}
                <div>
                  <label
                    htmlFor="input-nombre"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#0A1628] mb-2"
                  >
                    1. Nombre completo
                  </label>
                  <input
                    id="input-nombre"
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    placeholder="Ej. Carolina Mendoza"
                    className="w-full px-4 py-3 text-sm rounded-xl border border-[#E5E2DC] bg-[#F7F6F3]/50 focus:bg-white focus:border-[#023B8C] focus:ring-2 focus:ring-[#023B8C]/15 outline-none transition-all placeholder:text-[#5A6A85]/50"
                  />
                </div>

                {/* 2. Tratamiento de interés */}
                <div>
                  <label
                    htmlFor="select-tratamiento"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#0A1628] mb-2"
                  >
                    2. ¿Qué tratamiento te interesa?
                  </label>
                  <select
                    id="select-tratamiento"
                    value={formData.tratamiento}
                    onChange={(e) =>
                      setFormData({ ...formData, tratamiento: e.target.value as TreatmentOption })
                    }
                    className="w-full px-4 py-3 text-sm rounded-xl border border-[#E5E2DC] bg-[#F7F6F3]/50 focus:bg-white focus:border-[#023B8C] focus:ring-2 focus:ring-[#023B8C]/15 outline-none transition-all cursor-pointer"
                  >
                    {TREATMENT_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 3. Situación actual */}
                <div>
                  <label
                    htmlFor="select-situacion"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#0A1628] mb-2"
                  >
                    3. ¿Cómo describirías tu situación actual?
                  </label>
                  <select
                    id="select-situacion"
                    value={formData.situacion}
                    onChange={(e) =>
                      setFormData({ ...formData, situacion: e.target.value as SituationOption })
                    }
                    className="w-full px-4 py-3 text-sm rounded-xl border border-[#E5E2DC] bg-[#F7F6F3]/50 focus:bg-white focus:border-[#023B8C] focus:ring-2 focus:ring-[#023B8C]/15 outline-none transition-all cursor-pointer"
                  >
                    {SITUATION_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 4. Horario preferente */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0A1628] mb-2">
                    4. Horario preferente para tu valoración
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {SCHEDULE_OPTIONS.map((slot) => {
                      const isSelected = formData.horario === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          id={`radio-horario-${slot.toLowerCase()}`}
                          onClick={() => setFormData({ ...formData, horario: slot })}
                          className={`py-3 px-4 rounded-xl text-sm font-medium border flex items-center justify-center gap-2 transition-all ${
                            isSelected
                              ? 'bg-[#023B8C] text-white border-[#023B8C] shadow-xs'
                              : 'bg-white text-[#0A1628] border-[#E5E2DC] hover:border-[#023B8C]/40'
                          }`}
                        >
                          <Clock className="w-4 h-4" />
                          <span>{slot}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Live Message Preview */}
                <div className="p-3.5 rounded-xl bg-[#023B8C]/5 border border-[#023B8C]/15 text-xs text-[#0A1628]/90">
                  <div className="flex items-center gap-1.5 font-semibold text-[#023B8C] mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#01B2DC]" />
                    <span>Mensaje que se enviará a WhatsApp:</span>
                  </div>
                  <p className="italic text-[#5A6A85] text-[13px] leading-relaxed">
                    "Hola, soy {formData.nombre.trim() || '[Nombre]'}. Me interesa {formData.tratamiento} — mi situación actual es: {formData.situacion}. Mi horario preferente es {formData.horario}. ¿Podrían ayudarme a agendar una valoración?"
                  </p>
                </div>

                {submissionNotice && (
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{submissionNotice}</span>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  id="submit-whatsapp-form"
                  type="submit"
                  variant="whatsapp"
                  size="lg"
                  className="w-full shadow-md hover:shadow-lg font-semibold text-base"
                >
                  <Send className="w-4 h-4 mr-2" />
                  <span>Enviar y agendar por WhatsApp</span>
                </Button>
              </form>
            </div>

            {/* Guion de WhatsApp de Recepción (Staff & agency tool) */}
            <div className="mt-6">
              <button
                type="button"
                id="toggle-staff-guide"
                onClick={() => setShowStaffGuide(!showStaffGuide)}
                className="w-full flex items-center justify-between p-4 rounded-xl border border-[#E5E2DC] bg-white/70 hover:bg-white text-xs font-semibold text-[#023B8C] transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-[#01B2DC]" />
                  <span>Guion de WhatsApp para el equipo clínico (Recepción dent.ec)</span>
                </div>
                {showStaffGuide ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>

              {showStaffGuide && (
                <div className="mt-2 p-5 rounded-xl bg-white border border-[#E5E2DC] text-xs text-[#0A1628] shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-[#023B8C]">
                      {STAFF_WHATSAPP_SCRIPT.title}
                    </p>
                    <button
                      type="button"
                      onClick={handleCopyScript}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#023B8C]/10 text-[#023B8C] hover:bg-[#023B8C]/20 transition-colors"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copiedScript ? '¡Copiado!' : 'Copiar guion'}</span>
                    </button>
                  </div>
                  <p className="text-[#5A6A85] mb-3">
                    {STAFF_WHATSAPP_SCRIPT.description}
                  </p>
                  <pre className="p-3.5 rounded-lg bg-[#F7F6F3] border border-[#E5E2DC] font-sans text-xs whitespace-pre-wrap leading-relaxed text-[#0A1628]">
                    {STAFF_WHATSAPP_SCRIPT.template}
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Exact Info & Embedded Google Maps (Slides from Right) */}
          <div
            className={`lg:col-span-5 flex flex-col gap-6 transition-all duration-700 ease-out transform ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Clinic Info Box */}
            <div className="dent-card p-6 sm:p-7 bg-white">
              <h3 className="font-serif text-lg font-bold text-[#0A1628] mb-5">
                Datos de Atención
              </h3>

              <div className="space-y-4 text-sm">
                {/* Dirección exacta */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#023B8C]/8 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#023B8C]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#5A6A85]">
                      Dirección
                    </p>
                    <p className="text-[#0A1628] font-medium leading-snug mt-0.5">
                      {CLINIC_CONFIG.exactAddressText}
                    </p>
                  </div>
                </div>

                {/* Horario */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#023B8C]/8 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#023B8C]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#5A6A85]">
                      Horario
                    </p>
                    <p className="text-[#0A1628] font-medium leading-snug mt-0.5">
                      {CLINIC_CONFIG.scheduleText}
                    </p>
                  </div>
                </div>

                {/* Teléfono Directo */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#023B8C]/8 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-[#023B8C]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#5A6A85]">
                      Teléfono
                    </p>
                    <a
                      href={`tel:${CLINIC_CONFIG.phoneDirect.replace(/\s+/g, '')}`}
                      className="text-[#0A1628] hover:text-[#023B8C] font-semibold leading-snug mt-0.5 inline-block"
                    >
                      {CLINIC_CONFIG.phoneDirect}
                    </a>
                  </div>
                </div>

                {/* WhatsApp Oficial */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#01B2DC]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4 text-[#01B2DC]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#5A6A85]">
                      WhatsApp Directo
                    </p>
                    <a
                      href={CLINIC_CONFIG.whatsappOfficialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#023B8C] hover:text-[#01B2DC] font-semibold flex items-center gap-1.5 mt-0.5"
                    >
                      <span>Abrir chat de WhatsApp</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Botón "Abrir en Mapa" */}
              <div className="mt-6 pt-5 border-t border-[#E5E2DC]">
                <Button
                  id="btn-open-google-maps"
                  asAnchor={true}
                  href={CLINIC_CONFIG.googleMapsSearchUrl}
                  target="_blank"
                  variant="outline"
                  size="md"
                  className="w-full"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Abrir en Mapa</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-2" />
                </Button>
              </div>
            </div>

            {/* Embedded Google Maps iFrame */}
            <div className="dent-card overflow-hidden bg-white shadow-sm border border-[#E5E2DC]">
              <div className="p-3 border-b border-[#E5E2DC] bg-[#F7F6F3] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#023B8C] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#01B2DC]" />
                  <span>Samborondón, Ecuador</span>
                </span>
                <span className="text-[#5A6A85] text-[11px]">
                  (Pin aproximado)
                </span>
              </div>
              <div className="relative w-full h-[280px] sm:h-[320px] bg-slate-100">
                <iframe
                  id="google-maps-iframe"
                  title="Mapa de Samborondón, Ecuador - dent.ec"
                  src="https://maps.google.com/maps?q=Samborond%C3%B3n%2C%20Ecuador&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen={false}
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
