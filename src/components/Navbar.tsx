import React, { useState, useEffect } from 'react';
import { Play, MessageSquare, Menu, X, ArrowUpRight, Folder } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'trabalhos', label: 'Portfólio' },
    { id: 'sobre', label: 'Sobre & Specs' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'contato', label: 'Contato' }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent('Olá! Vi seu portfólio e gostaria de fazer um orçamento de vídeo.')}`;

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F5F3EC]/90 backdrop-blur-md border-b border-[#111111]/10 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Editorial Brand Header */}
        <button
          id="nav-logo"
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg bg-[#0052FF] text-white flex items-center justify-center font-mono font-bold text-sm group-hover:scale-105 transition-transform shadow-sm">
            <Folder className="w-5 h-5 fill-white" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-sans font-black text-[#111111] tracking-tight text-base uppercase">
                PORTFÓLIO
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 bg-[#18181B] text-white rounded font-bold">
                2026
              </span>
            </div>
            <span className="font-mono text-[10px] text-[#0052FF] font-bold tracking-wider uppercase">
              VIDEO EDITOR & MOTION
            </span>
          </div>
        </button>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6 bg-[#18181B] text-white px-5 py-2 rounded-full border border-black/10 shadow-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`text-xs font-mono tracking-widest uppercase transition-all py-1 px-3 rounded-full cursor-pointer focus:outline-none ${
                  isActive
                    ? 'bg-[#0052FF] text-white font-bold'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Status Badge & CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            id="nav-whatsapp-cta"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#0052FF] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-lg hover:bg-blue-700 transition-all cursor-pointer shadow-md"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Orçamento</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#111111] bg-[#E5E2D8] rounded-lg border border-black/10 focus:outline-none"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F5F3EC] border-b border-black/10 px-4 pt-4 pb-6 mt-3 space-y-4 shadow-xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`mobile-nav-link-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`text-left text-sm font-mono py-2 px-4 rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#0052FF] text-white font-bold'
                    : 'text-[#111111] hover:bg-[#E5E2D8]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <a
            id="mobile-nav-whatsapp-cta"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 bg-[#18181B] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-lg hover:bg-[#0052FF] transition-all mt-4"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chamar no WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
};
