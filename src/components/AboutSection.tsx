import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Cpu, CheckCircle2, Folder, Layers, Check } from 'lucide-react';

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
      desc: 'Eliminação de pausas, seleção das melhores tomadas e construção do esqueleto rítmico.'
    },
    {
      num: '03',
      title: 'SOUND DESIGN & EFEITOS SONOROS',
      desc: 'Camadas de SFX imersivos, equalização de voz, escolha da trilha e pontuação de transições.'
    },
    {
      num: '04',
      title: 'MOTION GRAPHICS & OVERLAYS',
      desc: 'Legendas dinâmicas animadas, ícones pop-up, animações e elementos na tela.'
    },
    {
      num: '05',
      title: 'CORREÇÃO DE COR & ENTREGA MASTER',
      desc: 'Correção básica de cor, ajuste de exposição e contraste, exportação em alta resolução e revisão.'
    }
  ];

  return (
    <section id="sobre" className="py-16 bg-[#F5F3EC] text-[#111111] border-t-2 border-[#111111] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="bg-[#0052FF] text-white border-2 border-[#111111] rounded-2xl p-6 sm:p-8 shadow-[4px_4px_0px_0px_#111111] mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#18181B] text-white text-xs font-mono font-bold uppercase tracking-widest mb-3 border border-white/20">
            <Cpu className="w-3.5 h-3.5 text-[#0052FF]" />
            <span>SEÇÃO 02 • SOBRE & PROCESSO</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none text-white">
            Estratégia Primeiro, Edição Depois.
          </h2>
          <p className="text-white/90 font-sans text-base sm:text-lg max-w-2xl mt-3 leading-relaxed font-medium">
            Foco em edições de alta performance com storytelling claro, sound design envolvente e ganchos visuais calibrados para prender a atenção.
          </p>
        </div>

        {/* 2 Column Layout: Bio & Workflow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          
          {/* Bio & Philosophy Folder Card */}
          <div className="lg:col-span-5 space-y-6 bg-white p-6 sm:p-8 rounded-2xl border-2 border-[#111111] shadow-[4px_4px_0px_0px_#111111]">
            <div className="flex items-center justify-between border-b-2 border-[#111111] pb-4">
              <span className="font-mono text-xs font-bold text-[#111111] uppercase tracking-wider">
                FILOSOFIA DE TRABALHO
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#0052FF] text-white text-[10px] font-mono font-bold uppercase">
                EDIT & MOTION
              </span>
            </div>

            <p className="text-[#111111] font-sans text-sm sm:text-base leading-relaxed font-medium">
              Minha missão é transformar gravações brutas em narrativas dinâmicas e envolventes. Atuo na produção e edição de vídeos em 16:9 (YouTube) e em formatos curtos verticais de alta retenção (Shorts, Reels, TikTok).
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs font-mono text-[#111111] font-bold">
                <div className="w-5 h-5 rounded-full bg-[#0052FF] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <span>Edição focada na retenção de minutos assistidos</span>
              </div>
              <div className="flex items-start gap-3 text-xs font-mono text-[#111111] font-bold">
                <div className="w-5 h-5 rounded-full bg-[#0052FF] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <span>Tratamento de áudio profissional e remoção de ruídos</span>
              </div>
              <div className="flex items-start gap-3 text-xs font-mono text-[#111111] font-bold">
                <div className="w-5 h-5 rounded-full bg-[#0052FF] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <span>Color Grading inicial e correção básica de exposição/balanço</span>
              </div>
              <div className="flex items-start gap-3 text-xs font-mono text-[#111111] font-bold">
                <div className="w-5 h-5 rounded-full bg-[#0052FF] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <span>Motion Graphics e animações elaboradas em 3 a 4 dias</span>
              </div>
              <div className="flex items-start gap-3 text-xs font-mono text-[#111111] font-bold">
                <div className="w-5 h-5 rounded-full bg-[#0052FF] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <span>Prazos rigorosos e comunicação direta via WhatsApp</span>
              </div>
            </div>

            <div className="pt-4 border-t-2 border-[#111111] flex items-center justify-between text-xs font-mono text-zinc-700 font-bold">
              <span>ATENDIMENTO:</span>
              <span className="text-[#0052FF] font-black uppercase">BRASIL / REMOTO GLOBAL</span>
            </div>
          </div>

          {/* Workflow Timeline */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#18181B] text-white font-mono text-xs font-bold uppercase tracking-widest mb-2">
              <Folder className="w-3.5 h-3.5 text-[#0052FF]" />
              <span>ETAPAS DO PROCESSO DE EDIÇÃO</span>
            </div>

            <div className="space-y-3">
              {workflowSteps.map((step) => (
                <div
                  key={step.num}
                  className="p-4 bg-white border-2 border-[#111111] rounded-xl flex items-start gap-4 shadow-[3px_3px_0px_0px_#111111] hover:shadow-[5px_5px_0px_0px_#0052FF] transition-all"
                >
                  <span className="font-mono font-black text-lg text-white bg-[#0052FF] border-2 border-[#111111] px-3.5 py-1 rounded-lg shrink-0">
                    {step.num}
                  </span>
                  <div>
                    <h4 className="font-mono text-xs font-black text-[#111111] uppercase tracking-wider">
                      {step.title}
                    </h4>
                    <p className="text-xs text-zinc-700 mt-1 font-sans leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills & Software Grid */}
        <div id="habilidades" className="pt-10 border-t-2 border-[#111111]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-mono text-xs text-[#0052FF] font-bold uppercase tracking-widest block mb-2">
              ECOSISTEMA AUDIOVISUAL
            </span>
            <h3 className="text-3xl sm:text-4xl font-black uppercase text-[#111111]">
              SOFTWARE STACK & SKILLS
            </h3>
            <p className="text-zinc-700 font-sans text-xs sm:text-sm mt-1 font-medium">
              Ferramentas e especialidades técnicas para entregas de alto padrão.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="p-5 bg-white border-2 border-[#111111] rounded-2xl shadow-[4px_4px_0px_0px_#111111] space-y-3 flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-mono text-xs font-black uppercase tracking-wider text-[#111111] border-b-2 border-[#111111] pb-2.5 flex items-center justify-between">
                    <span>{cat.title}</span>
                    <span className="w-2 h-2 rounded-full bg-[#0052FF]" />
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {cat.skills.map((skill, sIdx) => (
                      <li
                        key={sIdx}
                        className="text-xs font-mono font-bold text-[#111111] flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0052FF] shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
