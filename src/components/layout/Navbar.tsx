import React, { useState, useEffect } from 'react';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { CLINIC_CONFIG } from '../../data/clinicData';
import { Menu, X, MessageCircle } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Por qué elegirnos', href: '#por-que-elegirnos' },
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link detection
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F6F3]/95 backdrop-blur-md shadow-xs border-b border-[#E5E2DC]/80 py-3'
          : 'bg-[#F7F6F3] py-4 sm:py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo */}
          <a
            id="nav-logo-link"
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="group focus-visible:outline-2 focus-visible:outline-[#023B8C] rounded-lg p-0.5"
            aria-label="dent.ec - Inicio"
          >
            <Logo size="md" showSubtitle={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            id="desktop-nav-menu"
            className="hidden lg:flex items-center gap-1 xl:gap-2 text-[14.5px] font-medium text-[#0A1628]"
            aria-label="Navegación principal"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  id={`nav-link-${item.href.substring(1)}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-[#023B8C] font-semibold bg-[#023B8C]/5'
                      : 'text-[#0A1628]/80 hover:text-[#023B8C] hover:bg-black/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Fixed Accent Button visible on mobile too */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              id="navbar-cta-whatsapp"
              asAnchor={true}
              href={CLINIC_CONFIG.whatsappOfficialLink}
              target="_blank"
              variant="whatsapp"
              size="sm"
              className="text-xs sm:text-sm font-semibold shadow-xs"
            >
              <MessageCircle className="w-4 h-4 mr-1.5 text-[#0A1628]" />
              <span>Agendar por WhatsApp</span>
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#0A1628] hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-[#023B8C]"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-dropdown-menu"
          className="lg:hidden bg-[#F7F6F3] border-b border-[#E5E2DC] shadow-lg animate-in slide-in-from-top-2 duration-200"
        >
          <div className="px-4 pt-3 pb-6 space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  id={`mobile-nav-link-${item.href.substring(1)}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#023B8C] text-white'
                      : 'text-[#0A1628] hover:bg-black/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-3 border-t border-[#E5E2DC] mt-2">
              <p className="text-xs text-[#5A6A85] px-4 mb-2">
                {CLINIC_CONFIG.locationCity} • Odontología Integral
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
