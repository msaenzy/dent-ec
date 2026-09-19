import React from 'react';
import { Logo } from '../ui/Logo';
import { CLINIC_CONFIG } from '../../data/clinicData';
import { Instagram, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#0A1628] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Promise */}
          <div className="md:col-span-6 flex flex-col gap-4">
            <Logo variant="light" size="lg" showSubtitle={true} />
            
            <p className="text-sm text-slate-300 max-w-md leading-relaxed mt-2">
              "{CLINIC_CONFIG.brandPromise}"
            </p>

            <p className="text-xs text-slate-400">
              {CLINIC_CONFIG.doctorName} • {CLINIC_CONFIG.locationCity}
            </p>
          </div>

          {/* Col 2: Fast Anchor Links */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#01B2DC] mb-4">
              Navegación
            </p>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#por-que-elegirnos" className="hover:text-white transition-colors">
                  Por qué elegirnos
                </a>
              </li>
              <li>
                <a href="#tratamientos" className="hover:text-white transition-colors">
                  Tratamientos
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-white transition-colors">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-white transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Ubicación y contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & WhatsApp Connect */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#01B2DC] mb-4">
              Canales Oficiales
            </p>
            <div className="flex items-center gap-3 mb-5">
              {/* Instagram link */}
              <a
                id="footer-instagram-link"
                href={CLINIC_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#01B2DC] hover:text-[#0A1628] flex items-center justify-center text-white transition-colors"
                aria-label="Instagram oficial dent.ec"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* Threads link (@dent.ec) */}
              <a
                id="footer-threads-link"
                href={CLINIC_CONFIG.threadsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#01B2DC] hover:text-[#0A1628] flex items-center justify-center text-white transition-colors"
                aria-label="Threads oficial dent.ec"
              >
                {/* Threads SVG Icon */}
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 192 192"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4384 44.7443 97.3155 44.7443 97.193 44.745C75.875 44.745 59.4312 58.1259 55.4851 78.6975C51.539 99.2691 60.7171 118.896 78.4357 127.765C96.1543 136.634 116.899 131.849 130.344 115.8C130.73 115.34 130.676 114.652 130.224 114.258L120.407 105.703C119.988 105.337 119.356 105.378 118.988 105.795C108.625 117.514 92.5117 121.228 78.7188 115.086C64.9258 108.944 57.6534 94.6192 60.5358 79.2809C63.4182 63.9427 75.6983 54.0204 91.2415 54.4727C107.411 54.9431 117.567 65.6179 118.736 86.4178C107.039 88.1672 96.068 91.8021 86.6669 97.1023C73.3429 104.614 65.5901 116.488 65.8643 129.219C66.1952 144.577 78.7495 156.402 94.3986 156.402C108.069 156.402 120.493 148.665 127.355 136.19C133.003 147.288 142.923 155.109 154.919 157.949C168.047 161.058 180.705 156.309 188.825 145.24C197.359 133.606 198.814 117.818 192.704 103.111C184.664 83.7533 166.425 70.3622 144.385 68.618C143.766 68.5689 143.23 68.9959 143.181 69.615L141.776 87.2798C141.727 87.8989 142.154 88.4347 142.773 88.4838C160.038 89.8497 174.195 99.8242 180.126 114.095C184.341 124.238 183.056 134.721 176.711 143.376C170.627 151.674 161.042 154.981 151.723 152.775C141.011 150.239 132.887 141.874 130.407 130.826C138.831 120.158 143.504 106.842 143.834 92.8361C143.844 92.4208 143.682 92.0197 143.388 91.7303C142.871 91.2223 142.235 90.9634 141.537 88.9883ZM93.3082 145.457C84.3683 145.457 76.8152 138.47 76.5746 128.984C76.3885 120.317 81.7588 111.895 91.2612 106.536C98.4116 102.502 107.037 99.4678 116.149 97.7471C114.996 128.214 105.772 145.457 93.3082 145.457Z" />
                </svg>
              </a>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Consulta bajo cita previa en Samborondón.
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright with Dynamic Year + Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} <span className="font-semibold text-white">dent.ec</span>. Todos los derechos reservados. Samborondón, Ecuador.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-slate-400">
              Desarrollado para dent.ec
            </span>
            <a
              id="back-to-top-link"
              href="#inicio"
              onClick={handleBackToTop}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <span>Subir al inicio</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
