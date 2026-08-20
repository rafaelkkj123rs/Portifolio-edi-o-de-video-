import React, { useState } from 'react';
import { ArrowUp, MessageSquare, MessageCircle, Check } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

interface FooterProps {
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  const [copiedDiscord, setCopiedDiscord] = useState(false);

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText(CONTACT_INFO.discordUsername);
    setCopiedDiscord(true);
    setTimeout(() => setCopiedDiscord(false), 2000);
  };

  return (
    <footer className="bg-zinc-50 text-zinc-900 py-12 border-t border-zinc-200 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <img
            src="https://i.ibb.co/27KR398g/logo-sem-fundo.png"
            alt="Logo Oficial"
            referrerPolicy="no-referrer"
            className="h-10 w-auto object-contain"
          />
          <div>
            <span className="block font-display font-black text-zinc-950 uppercase text-sm tracking-wider">
              PORTFÓLIO DE VÍDEO
            </span>
            <span className="block text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
              PREMIERE PRO • AFTER EFFECTS • PHOTOSHOP
            </span>
          </div>
        </div>

        {/* Contact Quick Pills */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 text-zinc-800 hover:text-zinc-950 hover:border-blue-500 transition-colors shadow-xs"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#0052ff]" />
            <span>WhatsApp: {CONTACT_INFO.whatsappFormatted}</span>
          </a>

          <button
            onClick={handleCopyDiscord}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 text-zinc-800 hover:text-zinc-950 hover:border-indigo-500 transition-colors cursor-pointer shadow-xs"
          >
            {copiedDiscord ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <MessageCircle className="w-3.5 h-3.5 text-indigo-600" />}
            <span>Discord: {CONTACT_INFO.discordUsername}</span>
          </button>
        </div>

        {/* Copyright & Scroll Top */}
        <div className="flex items-center gap-4">
          <span className="text-[11px] text-zinc-500">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </span>

          <button
            onClick={onScrollToTop}
            className="p-2.5 rounded-full bg-white hover:bg-zinc-950 text-zinc-700 hover:text-white border border-zinc-200 transition-all cursor-pointer shadow-xs"
            title="Voltar ao Topo"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
