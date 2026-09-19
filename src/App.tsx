import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { PorQueElegirnos } from './components/sections/PorQueElegirnos';
import { Tratamientos } from './components/sections/Tratamientos';
import { SobreNosotros } from './components/sections/SobreNosotros';
import { Testimonios } from './components/sections/Testimonios';
import { UbicacionContacto } from './components/sections/UbicacionContacto';
import { Footer } from './components/layout/Footer';
import { CLINIC_CONFIG } from './data/clinicData';
import { MessageCircle, FileText, X, CheckSquare, Sparkles } from 'lucide-react';

export default function App() {
  const [showPreflightModal, setShowPreflightModal] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F3] text-[#0A1628] font-sans antialiased selection:bg-[#01B2DC]/20 selection:text-[#023B8C]">
      {/* 1. Sticky Navbar */}
      <Navbar />

      {/* Main Landing Sections (Strictly in Required Order) */}
      <main className="flex-grow">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Por qué elegirnos */}
        <PorQueElegirnos />

        {/* 3. Oferta / Tratamientos */}
        <Tratamientos />

        {/* 4. Sobre nosotros / La clínica (preview) */}
        <SobreNosotros />

        {/* 5. Testimonios (carrusel loop continuo) */}
        <Testimonios />

        {/* 6. Ubicación y contacto */}
        <UbicacionContacto />
      </main>

      {/* Footer */}
      <Footer />

      {/* High-conversion Floating WhatsApp Action Button */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
        <a
          id="floating-whatsapp-btn"
          href={CLINIC_CONFIG.whatsappOfficialLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-[#01B2DC] text-[#0A1628] pl-3.5 pr-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-[#00a3cb] transition-all duration-300 font-semibold text-sm transform hover:scale-105 active:scale-95 border border-white/40"
          aria-label="Abrir WhatsApp para agendar valoración"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#023B8C] animate-ping" />
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline">¿Dudas? Escríbenos</span>
        </a>

        {/* Discreet Deliverables Preflight Checklist for Spondylus & Clinic */}
        <button
          type="button"
          id="toggle-agency-checklist-btn"
          onClick={() => setShowPreflightModal(true)}
          className="text-[10.5px] text-[#5A6A85] bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#E5E2DC] hover:text-[#023B8C] hover:border-[#023B8C] transition-colors shadow-2xs"
          title="Ver ficha técnica y datos de la clínica"
        >
          <span className="inline-flex items-center gap-1">
            <FileText className="w-3 h-3 text-[#023B8C]" />
            <span>Ficha Spondylus</span>
          </span>
        </button>
      </div>

      {/* Preflight Modal with Client Hand-off notes from prompt */}
      {showPreflightModal && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setShowPreflightModal(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-[#E5E2DC] max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E5E2DC]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#01B2DC]" />
                <h3 className="font-serif font-bold text-lg text-[#0A1628]">
                  Ficha Técnica & Datos de la Clínica
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowPreflightModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-[#0A1628] hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-[#5A6A85] mb-4">
              Configuración y datos activos de la clínica <span className="font-semibold text-[#0A1628]">dent.ec</span>:
            </p>

            <ul className="space-y-3 text-xs text-[#0A1628]">
              <li className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#F7F6F3]">
                <CheckSquare className="w-4 h-4 text-[#023B8C] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#023B8C]">1. Dirección clínica</strong>
                  Dr. David Barrera — Especialista en Rehabilitación Oral y Estética Dental.
                </div>
              </li>
              <li className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#F7F6F3]">
                <CheckSquare className="w-4 h-4 text-[#023B8C] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#023B8C]">2. Ubicación física</strong>
                  Av. Samborondón Km 1.5, Edificio Diana Quintana, Piso 2, Of. 204 — Samborondón, Ecuador.
                </div>
              </li>
              <li className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#F7F6F3]">
                <CheckSquare className="w-4 h-4 text-[#023B8C] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#023B8C]">3. Horario y contacto directo</strong>
                  Lunes a Viernes: 09:00 - 19:00 | Sábados: 09:00 - 14:00 | Tel: +593 99 456 7890.
                </div>
              </li>
              <li className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#F7F6F3]">
                <CheckSquare className="w-4 h-4 text-[#023B8C] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#023B8C]">4. Identidad visual</strong>
                  Isotipo en "D" estilizado y paleta Navy (#0A1628), Hueso (#F7F6F3), Azul (#023B8C) y Cian (#01B2DC).
                </div>
              </li>
              <li className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#F7F6F3]">
                <CheckSquare className="w-4 h-4 text-[#023B8C] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#023B8C]">5. Reseñas y testimonios</strong>
                  6 testimonios activos y positivos con valoración 5 estrellas y mención a casos clínicos reales.
                </div>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-[#E5E2DC] flex justify-end">
              <button
                type="button"
                onClick={() => setShowPreflightModal(false)}
                className="px-4 py-2 bg-[#023B8C] text-white text-xs font-semibold rounded-xl hover:bg-[#012f70] transition-colors"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
