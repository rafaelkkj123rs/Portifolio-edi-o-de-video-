import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CONTACT_INFO } from '../data/portfolioData';
import { MessageSquare, Copy, Check, Send, ArrowUpRight, Clock, MessageCircle, Sparkles } from 'lucide-react';

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
    <section id="contato" className="py-24 bg-white text-zinc-900 relative border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headline Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-zinc-200 pb-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#0052ff] text-xs font-mono font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ORÇAMENTOS & PROJETOS</span>
            </div>
            <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-zinc-950 leading-none">
              VAMOS TRABALHAR <br />
              <span className="text-[#0052ff]">
                JUNTOS.
              </span>
            </h2>
            <p className="text-zinc-600 font-sans text-base sm:text-lg mt-4 max-w-xl">
              Atendimento exclusivo via <strong className="text-zinc-900 font-semibold">WhatsApp</strong> e <strong className="text-[#0052ff] font-semibold">Discord</strong>. Fale diretamente comigo para orçamentos, cronogramas e novas edições.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 max-w-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold uppercase text-[#0052ff]">STATUS DE RESPOSTA</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            </div>
            <p className="font-sans text-xs text-zinc-600 mb-4 leading-relaxed">
              Ativo para novos projetos semanais e pacotes de edição.
            </p>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent('Olá! Vim pelo seu portfólio de edição.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#0052ff] text-white font-mono font-bold text-xs uppercase tracking-wider rounded-full hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Channels Column */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-5"
          >
            
            {/* WhatsApp Card */}
            <div className="p-7 bg-white border border-zinc-200/90 rounded-2xl space-y-4 hover:border-blue-500 transition-colors shadow-sm">
              <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
                <span className="font-mono text-xs text-[#0052ff] uppercase tracking-wider font-bold flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>WHATSAPP OFICIAL</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-mono font-bold uppercase">
                  ONLINE
                </span>
              </div>

              <div>
                <span className="block font-mono text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
                  {CONTACT_INFO.whatsappFormatted}
                </span>
                <p className="text-xs text-zinc-600 mt-1 font-sans">
                  Canal primário para envio de mídias, aprovação de cortes e orçamentos.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                <a
                  id="whatsapp-direct-link"
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent('Olá! Vim pelo seu portfólio de vídeos.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 bg-zinc-950 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#0052ff] transition-all cursor-pointer shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>ABRIR CHAT</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  id="copy-whatsapp-btn"
                  onClick={handleCopyWhatsApp}
                  className="px-4 py-3 bg-zinc-100 border border-zinc-200 text-zinc-800 font-mono text-xs font-semibold uppercase rounded-full hover:bg-zinc-200 transition-colors cursor-pointer"
                  title="Copiar Número"
                >
                  {copiedWhatsApp ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Discord Card */}
            <div className="p-7 bg-white border border-zinc-200/90 rounded-2xl space-y-4 hover:border-blue-500 transition-colors shadow-sm">
              <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
                <span className="font-mono text-xs text-indigo-600 uppercase tracking-wider font-bold flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>DISCORD</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-700 text-[10px] font-mono font-bold uppercase">
                  USUÁRIO
                </span>
              </div>

              <div>
                <span className="block font-mono text-2xl font-bold text-zinc-900 bg-zinc-50 p-3.5 rounded-xl border border-zinc-200 text-center tracking-wider">
                  {CONTACT_INFO.discordUsername}
                </span>
                <p className="text-xs text-zinc-600 mt-2 font-sans">
                  Adicione para alinhamento por voz, envio de arquivos pesados ou dúvidas.
                </p>
              </div>

              <button
                id="copy-discord-btn"
                onClick={handleCopyDiscord}
                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-zinc-100 text-zinc-900 font-mono text-xs font-bold uppercase tracking-wider rounded-full hover:bg-zinc-200 transition-colors cursor-pointer border border-zinc-200"
              >
                {copiedDiscord ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copiedDiscord ? 'NICK COPIADO!' : 'COPIAR NICK DO DISCORD'}</span>
              </button>
            </div>

            {/* Note info */}
            <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-xl space-y-1 text-xs font-mono text-zinc-600">
              <div className="flex items-center gap-2 text-zinc-900 font-bold">
                <Clock className="w-3.5 h-3.5 text-[#0052ff]" />
                <span>PRAZO TÍPICO DE RESPOSTA</span>
              </div>
              <p className="font-sans text-zinc-600 text-xs">
                Mensagens no WhatsApp costumam ser respondidas rapidamente em horário comercial.
              </p>
            </div>

          </motion.div>

          {/* Form Column - WhatsApp Request Builder */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white border border-zinc-200/90 p-8 rounded-2xl shadow-sm"
          >
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="border-b border-zinc-200 pb-4 mb-2">
                <h3 className="font-display font-bold text-lg uppercase text-zinc-950 tracking-wide">
                  MONTAR BRIEFING RÁPIDO
                </h3>
                <p className="text-xs text-zinc-600 font-sans mt-1">
                  Preencha as informações abaixo para gerar uma solicitação detalhada pronta para envio no WhatsApp.
                </p>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-zinc-800 uppercase mb-1.5">
                  Seu Nome ou Canal *
                </label>
                <input
                  type="text"
                  placeholder="Ex: Lucas / Canal Tech"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-[#0052ff] font-sans transition-colors placeholder:text-zinc-400"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-zinc-800 uppercase mb-1.5">
                    Formato de Vídeo
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-[#0052ff] font-sans transition-colors"
                  >
                    <option value="Shorts / Reels (9:16)">Shorts / Reels / TikTok (9:16)</option>
                    <option value="Vídeo Longo YouTube (16:9)">Vídeo Longo YouTube (16:9)</option>
                    <option value="Comercial / VSL">Comercial / VSL</option>
                    <option value="Pacote Mensal de Edição">Pacote Mensal de Edição</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-zinc-800 uppercase mb-1.5">
                    Prazo Desejado
                  </label>
                  <select
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-[#0052ff] font-sans transition-colors"
                  >
                    <option value="Padrão (3 a 4 dias)">Padrão (3 a 4 dias)</option>
                    <option value="Urgente (até 48h)">Urgente (até 48h)</option>
                    <option value="Projeto Recorrente">Projeto Recorrente</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-zinc-800 uppercase mb-1.5">
                  Detalhes ou Referências
                </label>
                <textarea
                  rows={4}
                  placeholder="Descreva o estilo da edição, ritmo desejado, referências de canais..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-[#0052ff] font-sans transition-colors placeholder:text-zinc-400"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full py-4 bg-zinc-950 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#0052ff] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>ENVIAR BRIEFING NO WHATSAPP</span>
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
