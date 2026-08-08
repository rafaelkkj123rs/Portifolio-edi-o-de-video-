import React, { useState } from 'react';
import { ArrowUp, MessageSquare, Folder, MessageCircle, Copy, Check } from 'lucide-react';
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
    <footer className="bg-[#18181B] text-white py-12 border-t-2 border-[#111111] font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#0052FF] text-white flex items-center justify-center font-bold border border-white/20">
            <Folder className="w-5 h-5 fill-white" />
          </div>
          <div>
            <span className="block font-black text-white uppercase text-sm tracking-wider">
              PORTFÓLIO DE VÍDEO
            </span>
            <span className="block text-[10px] text-zinc-400 uppercase font-bold">
              EDIÇÃO & MOTION GRAPHICS • 2026 EDITION
            </span>
          </div>
        </div>

        {/* Exclusive Contact Links: WhatsApp & Discord */}
        <div className="flex flex-wrap items-center gap-4 font-bold">
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0052FF] text-white hover:bg-blue-600 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp: {CONTACT_INFO.whatsappFormatted}</span>
          </a>

          <button
            onClick={handleCopyDiscord}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#27272A] border border-white/20 text-white hover:bg-white hover:text-[#111111] transition-colors cursor-pointer"
          >
            {copiedDiscord ? <Check className="w-4 h-4 text-emerald-400" /> : <MessageCircle className="w-4 h-4 text-[#0052FF]" />}
            <span>Discord: {CONTACT_INFO.discordUsername}</span>
          </button>
        </div>

        {/* Copyright & Scroll Top */}
        <div className="flex items-center gap-4">
          <span className="text-[11px] text-zinc-400">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </span>

          <button
            onClick={onScrollToTop}
            className="p-3 rounded-xl bg-[#0052FF] text-white hover:bg-blue-600 transition-colors cursor-pointer border border-white/20 shadow-sm"
            title="Voltar ao Topo"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
