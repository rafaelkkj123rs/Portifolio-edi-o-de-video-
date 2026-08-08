import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/portfolioData';
import { MessageSquare, Copy, Check, Send, ArrowUpRight, Clock, Folder, MessageCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedDiscord, setCopiedDiscord] = useState(false);
  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);

  // Form Fields for WhatsApp / Discord quotation
  const [name, setName] = useState('');
  const [projectType, setProjectType] = useState('Shorts / Reels (9:16)');
  const [deadline, setDeadline] = useState('Padrão (3 a 4 dias)');
  const [message, setMessage] = useState('');

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText(CONTACT_INFO.discordUsername);
    setCopiedDiscord(true);
    setTimeout(() => setCopiedDiscord(false), 2000);
  };

  const handleCopyWhatsApp = () => {
    navigator.clipboard.writeText(CONTACT_INFO.whatsappFormatted);
    setCopiedWhatsApp(true);
    setTimeout(() => setCopiedWhatsApp(false), 2000);
  };

  const generateMessageText = () => {
    const text = `Olá! Meu nome é ${name || 'Cliente'}.\nGostaria de solicitar um orçamento:\n- Tipo: ${projectType}\n- Prazo: ${deadline}\n${message ? `- Detalhes: ${message}` : ''}`;
    return encodeURIComponent(text);
  };

  const whatsappDirectUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${generateMessageText()}`;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(whatsappDirectUrl, '_blank');
  };

  return (
    <section id="contato" className="py-16 bg-[#F5F3EC] text-[#111111] relative border-t-2 border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Massive Headline Bar */}
        <div className="mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b-2 border-[#111111] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#18181B] text-white text-xs font-mono font-bold uppercase tracking-widest mb-3">
              <Folder className="w-3.5 h-3.5 text-[#0052FF]" />
              <span>SEÇÃO 03 • CONTATO DIRETO</span>
            </div>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-[#111111] leading-none">
              Trabalhe Comigo!
            </h2>
            <p className="text-zinc-700 font-sans text-base sm:text-lg font-medium mt-3 max-w-xl">
              Atendimento exclusivo via <strong className="text-[#111111]">WhatsApp</strong> e <strong className="text-[#0052FF]">Discord</strong>. Entre em contato para orçamentos, edição de vídeos e parcerias.
            </p>
          </div>

          <div className="bg-[#18181B] text-white p-6 rounded-2xl border-2 border-[#111111] shadow-[4px_4px_0px_0px_#111111] max-w-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold uppercase text-[#0052FF]">CONTATO RÁPIDO</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#0052FF] animate-ping" />
            </div>
            <p className="font-mono text-xs text-zinc-300 mb-3">
              Fale comigo diretamente no WhatsApp ou adicione no Discord.
            </p>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent('Olá! Vim pelo seu portfólio de edição.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-[#0052FF] text-white font-mono font-bold text-xs uppercase rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Cards Column (WhatsApp & Discord) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Card */}
            <div className="p-6 bg-white border-2 border-[#111111] rounded-2xl shadow-[4px_4px_0px_0px_#111111] space-y-4">
              <div className="flex items-center justify-between border-b-2 border-[#111111] pb-3">
                <span className="font-mono text-xs text-[#0052FF] uppercase tracking-widest font-black flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>WHATSAPP DIRETO</span>
                </span>
                <span className="px-2 py-0.5 rounded bg-[#18181B] text-white text-[10px] font-mono font-bold uppercase">
                  OFICIAL
                </span>
              </div>

              <div>
                <span className="block font-mono text-2xl font-black text-[#111111]">
                  {CONTACT_INFO.whatsappFormatted}
                </span>
                <p className="text-xs text-zinc-700 mt-1 font-sans font-medium">
                  Atendimento direto para envio de orçamentos, briefings e tiragem de dúvidas.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <a
                  id="whatsapp-direct-link"
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent('Olá! Vim pelo seu portfólio de vídeos.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 bg-[#0052FF] text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-blue-700 transition-all cursor-pointer shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>ABRIR CONVERSA</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  id="copy-whatsapp-btn"
                  onClick={handleCopyWhatsApp}
                  className="px-4 py-3 bg-[#E5E2D8] border-2 border-[#111111] text-[#111111] font-mono text-xs font-bold uppercase rounded-xl hover:bg-[#18181B] hover:text-white transition-colors cursor-pointer"
                  title="Copiar Número"
                >
                  {copiedWhatsApp ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Discord Card */}
            <div className="p-6 bg-white border-2 border-[#111111] rounded-2xl shadow-[4px_4px_0px_0px_#111111] space-y-4">
              <div className="flex items-center justify-between border-b-2 border-[#111111] pb-3">
                <span className="font-mono text-xs text-[#0052FF] uppercase tracking-widest font-black flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>DISCORD</span>
                </span>
                <span className="px-2 py-0.5 rounded bg-[#0052FF] text-white text-[10px] font-mono font-bold uppercase">
                  USUÁRIO
                </span>
              </div>

              <div>
                <span className="block font-mono text-2xl font-black text-[#111111] bg-[#F5F3EC] p-3 rounded-xl border-2 border-[#111111] text-center tracking-wider">
                  {CONTACT_INFO.discordUsername}
                </span>
                <p className="text-xs text-zinc-700 mt-2 font-sans font-medium">
                  Adicione no Discord para alinhamento rápido, chamadas de briefing e envio de arquivos.
                </p>
              </div>

              <button
                id="copy-discord-btn"
                onClick={handleCopyDiscord}
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-[#18181B] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#0052FF] transition-colors cursor-pointer border-2 border-[#111111]"
              >
                {copiedDiscord ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedDiscord ? 'NICK COPIADO!' : 'COPIAR NICK DO DISCORD'}</span>
              </button>
            </div>

            {/* Response Time Info */}
            <div className="p-5 bg-white border-2 border-[#111111] rounded-2xl shadow-[3px_3px_0px_0px_#111111] space-y-2 text-xs font-mono text-zinc-700">
              <div className="flex items-center gap-2 text-[#111111] font-bold">
                <Clock className="w-4 h-4 text-[#0052FF]" />
                <span>MEIOS ÚNICOS DE CONTATO</span>
              </div>
              <p className="font-sans font-medium text-zinc-700">
                Atendimento exclusivo pelo WhatsApp <strong className="text-[#111111]">(21) 99537-0657</strong> ou Discord <strong className="text-[#0052FF]">sla_2024</strong>.
              </p>
            </div>

          </div>

          {/* Form Column - Direct WhatsApp Request Builder */}
          <div className="lg:col-span-7 bg-white border-2 border-[#111111] p-6 sm:p-8 rounded-2xl shadow-[4px_4px_0px_0px_#111111]">
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="border-b-2 border-[#111111] pb-3 mb-4">
                <h3 className="font-mono text-sm font-black uppercase text-[#111111] tracking-wider">
                  MONTAR SOLICITAÇÃO PARA WHATSAPP / DISCORD
                </h3>
                <p className="text-xs text-zinc-700 font-sans mt-0.5 font-medium">
                  Preencha os detalhes do seu vídeo. Ao clicar, a mensagem será formatada e enviada diretamente no WhatsApp.
                </p>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#111111] uppercase mb-1">
                  Seu Nome ou Canal *
                </label>
                <input
                  type="text"
                  placeholder="Ex: João / Canal Tech"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-[#F5F3EC] border-2 border-[#111111] rounded-xl px-3 py-2.5 text-sm text-[#111111] focus:outline-none focus:border-[#0052FF] font-sans font-medium"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-[#111111] uppercase mb-1">
                    Tipo de Vídeo
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full bg-[#F5F3EC] border-2 border-[#111111] rounded-xl px-3 py-2.5 text-sm text-[#111111] focus:outline-none focus:border-[#0052FF] font-mono font-bold"
                  >
                    <option value="Shorts / Reels (9:16)">Shorts / Reels / TikTok (9:16)</option>
                    <option value="Vídeo Longo YouTube (16:9)">Vídeo Longo YouTube (16:9)</option>
                    <option value="Comercial / VSL">Comercial / VSL</option>
                    <option value="Pacote Mensal de Edição">Pacote Mensal de Edição</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[#111111] uppercase mb-1">
                    Prazo Desejado
                  </label>
                  <select
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="w-full bg-[#F5F3EC] border-2 border-[#111111] rounded-xl px-3 py-2.5 text-sm text-[#111111] focus:outline-none focus:border-[#0052FF] font-mono font-bold"
                  >
                    <option value="Padrão (3 a 4 dias)">Padrão (3 a 4 dias)</option>
                    <option value="Urgente (até 48h)">Urgente (até 48h)</option>
                    <option value="Projeto Recorrente">Projeto Recorrente</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#111111] uppercase mb-1">
                  Detalhes ou Referências
                </label>
                <textarea
                  rows={4}
                  placeholder="Descreva o estilo da edição, duração média ou envie links de referência..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#F5F3EC] border-2 border-[#111111] rounded-xl px-3 py-2.5 text-sm text-[#111111] focus:outline-none focus:border-[#0052FF] font-sans font-medium"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#0052FF] text-white font-mono font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-blue-700 transition-colors cursor-pointer flex items-center justify-center gap-2 border-2 border-[#111111] shadow-[3px_3px_0px_0px_#111111]"
              >
                <Send className="w-4 h-4" />
                <span>ENVIAR SOLICITAÇÃO NO WHATSAPP</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
