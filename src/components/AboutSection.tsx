import React from 'react';
import { motion } from 'motion/react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { User, Cpu, Check, Layers, Film, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const workflowSteps = [
    {
      num: '01',
      title: 'BRIEFING & DIREÇÃO NARRATIVA',
      desc: 'Análise do objetivo do vídeo, público-alvo, gancho inicial (hook) e estratégia de retenção.'
    },
    {
      num: '02',
      title: 'DECURTE BRUTO & PACING',
      desc: 'Eliminação de pausas, seleção das melhores tomadas e construção do ritmo dinâmico.'
    },
    {
      num: '03',
      title: 'SOUND DESIGN & SFX',
      desc: 'Camadas de áudio imersivo, equalização de voz, escolha da trilha e pontuação sonora.'
    },
    {
      num: '04',
      title: 'MOTION GRAPHICS & OVERLAYS',
      desc: 'Legendas dinâmicas animadas, ícones pop-up, animações no After Effects e grafismos.'
    },
    {
      num: '05',
      title: 'CORREÇÃO DE COR & MASTER FINAL',
      desc: 'Color grading, balanço de exposição e exportação otimizada em 4K/60fps com revisões.'
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-zinc-50/70 text-zinc-900 border-t border-zinc-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-zinc-200 pb-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#0052ff] text-xs font-mono font-bold mb-3">
              <User className="w-3.5 h-3.5" />
              <span>SOBRE MIM & PERFIL</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-zinc-950 leading-tight">
              QUEM ESTÁ POR TRÁS <br />
              <span className="text-[#0052ff]">
                DAS PRODUÇÕES.
              </span>
            </h2>
          </div>
          <p className="text-zinc-600 font-sans text-sm sm:text-base max-w-md">
            Editor de vídeo e motion designer focado em criar peças de alta retenção, ritmo envolvente e estética moderna.
          </p>
        </motion.div>

        {/* Dedicated 'Sobre Mim' Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          
          {/* Visual Avatar / Profile Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-white p-8 rounded-2xl border border-zinc-200 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between border-b border-zinc-200 pb-4 mb-6">
                <span className="font-mono text-xs font-bold text-zinc-900 uppercase tracking-wider">
                  PERFIL PROFISSIONAL
                </span>
                <span className="px-2.5 py-1 rounded-full bg-blue-50 text-[#0052ff] border border-blue-200/80 text-[10px] font-mono font-bold uppercase">
                  MOTION & EDIT
                </span>
              </div>

              {/* Logo / Brand Display */}
              <div className="flex items-center gap-4 mb-6 p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                <img
                  src="https://i.ibb.co/27KR398g/logo-sem-fundo.png"
                  alt="Logo do Editor"
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h3 className="font-display font-bold text-base uppercase text-zinc-950">
                    Editor de Vídeo & Motion
                  </h3>
                  <span className="text-xs font-mono text-zinc-500">
                    Especialista em Retenção & Ritmo
                  </span>
                </div>
              </div>

              <p className="text-zinc-700 font-sans text-sm sm:text-base leading-relaxed mb-4">
                Olá! Sou editor de vídeo e motion designer apaixonado por transformar ideias e gravações brutas em conteúdos magnéticos. Atuo desde o decurte inteligente e pacing ágil até a criação de gráficos no After Effects e identidade visual no Photoshop.
              </p>
              <p className="text-zinc-600 font-sans text-xs sm:text-sm leading-relaxed">
                Meu objetivo é garantir que seu vídeo prenda o público desde o primeiro segundo até o final, elevando a percepção de valor do seu canal, marca ou projeto.
              </p>
            </div>
          </motion.div>

          {/* Core Strengths & Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-white border border-zinc-200/90 rounded-2xl shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0052ff] flex items-center justify-center mb-4 font-bold border border-blue-200">
                  <Film className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-base text-zinc-950 uppercase mb-1.5">
                  Narrativa & Pacing
                </h4>
                <p className="text-xs font-sans text-zinc-600 leading-relaxed">
                  Cortes calculados para eliminar tempos mortos e manter uma cadência dinâmica e fluida.
                </p>
              </div>

              <div className="p-6 bg-white border border-zinc-200/90 rounded-2xl shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0052ff] flex items-center justify-center mb-4 font-bold border border-blue-200">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-base text-zinc-950 uppercase mb-1.5">
                  Motion & Overlays
                </h4>
                <p className="text-xs font-sans text-zinc-600 leading-relaxed">
                  Elementos gráficos, legendas cinemáticas, ícones animados e animações de texto no After Effects.
                </p>
              </div>
            </div>

            {/* Checklist of assurances */}
            <div className="p-6 bg-white border border-zinc-200/90 rounded-2xl shadow-xs space-y-3">
              <span className="font-mono text-xs font-bold text-zinc-900 uppercase tracking-wider block mb-2">
                DIFERENCIAIS DO MEU TRABALHO
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 text-xs font-mono text-zinc-800">
                  <Check className="w-4 h-4 text-[#0052ff] shrink-0" />
                  <span>Entrega rápida em 3 a 4 dias</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-mono text-zinc-800">
                  <Check className="w-4 h-4 text-[#0052ff] shrink-0" />
                  <span>Sound design calibrado & SFX</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-mono text-zinc-800">
                  <Check className="w-4 h-4 text-[#0052ff] shrink-0" />
                  <span>Arquivos organizados & Masters 4K</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-mono text-zinc-800">
                  <Check className="w-4 h-4 text-[#0052ff] shrink-0" />
                  <span>Comunicação direta no WhatsApp</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Workflow Steps Timeline */}
        <div className="mb-20">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#0052ff] text-xs font-mono font-bold mb-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>ETAPAS DE PRODUÇÃO</span>
            </div>
            <h3 className="font-display font-black text-3xl sm:text-4xl uppercase text-zinc-950">
              COMO FUNCIONA O PROCESSO
            </h3>
          </div>

          <div className="space-y-3">
            {workflowSteps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                whileHover={{ x: 4 }}
                className="p-5 bg-white border border-zinc-200/90 hover:border-blue-500 rounded-2xl flex items-start gap-4 transition-all group shadow-xs hover:shadow-sm"
              >
                <span className="font-mono font-bold text-sm text-[#0052ff] bg-blue-50 px-3 py-1.5 rounded-lg shrink-0 border border-blue-200">
                  {step.num}
                </span>
                <div>
                  <h4 className="font-display font-bold text-sm text-zinc-950 uppercase tracking-wider group-hover:text-[#0052ff] transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-xs text-zinc-600 mt-1 font-sans leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills & Software Grid */}
        <div id="habilidades" className="pt-12 border-t border-zinc-200">
          <div className="mb-10">
            <span className="font-mono text-xs text-[#0052ff] font-bold uppercase tracking-widest block mb-2">
              STACK TÉCNICA
            </span>
            <h3 className="font-display font-black text-3xl sm:text-4xl uppercase text-zinc-950">
              SOFTWARES & ESPECIALIDADES
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -3 }}
                className="p-6 bg-white border border-zinc-200/90 rounded-2xl space-y-4 hover:border-blue-400 transition-all shadow-xs hover:shadow-sm"
              >
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-950 border-b border-zinc-200 pb-3 flex items-center justify-between">
                  <span>{cat.title}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0052ff]" />
                </h4>
                <ul className="space-y-2">
                  {cat.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="text-xs font-mono text-zinc-700 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#0052ff] shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
