import React, { useState, useEffect } from 'react';
import { MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';
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
    { id: 'trabalhos', label: 'Projetos' },
    { id: 'sobre', label: 'Sobre Mim' },
    { id: 'habilidades', label: 'Stack' },
    { id: 'contato', label: 'Contato' }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent('Olá! Vi seu portfólio e gostaria de fazer um orçamento.')}`;

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-zinc-200 py-3 shadow-xs'
          : 'bg-white/80 backdrop-blur-sm py-4 border-b border-zinc-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="nav-logo"
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
        >
          <img
            src="https://i.ibb.co/27KR398g/logo-sem-fundo.png"
            alt="Logo Oficial"
            referrerPolicy="no-referrer"
            className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-100/90 border border-zinc-200/80 px-2 py-1.5 rounded-full">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`text-xs font-mono tracking-wider uppercase transition-all py-1.5 px-4 rounded-full cursor-pointer focus:outline-none ${
                  isActive
                    ? 'bg-[#0052ff] text-white font-bold shadow-xs shadow-blue-500/30'
                    : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/60'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            id="nav-whatsapp-cta"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-950 text-white text-xs font-mono font-bold uppercase tracking-wider rounded-full hover:bg-[#0052ff] transition-all cursor-pointer shadow-xs hover:scale-[1.02] active:scale-95"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Fazer Orçamento</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 text-zinc-800 bg-zinc-100 hover:bg-zinc-200 rounded-xl border border-zinc-200 focus:outline-none transition-colors"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-zinc-200 px-6 pt-4 pb-6 mt-3 space-y-4 shadow-xl">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`mobile-nav-link-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`text-left text-xs font-mono uppercase tracking-wider py-3 px-4 rounded-xl transition-all ${
                  activeSection === link.id
                    ? 'bg-[#0052ff] text-white font-bold'
                    : 'text-zinc-700 hover:bg-zinc-100'
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
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-zinc-950 text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl hover:bg-[#0052ff] transition-all mt-4"
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
