import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowDown, Sparkles, Flame, CheckCircle2 } from 'lucide-react';
import { getYouTubeThumbnail } from '../utils/youtube';

interface HeroProps {
  onExploreClick: () => void;
  onOpenFeaturedVideo: (youtubeId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onOpenFeaturedVideo }) => {
  const mainFeaturedId = 'QpqL-zt7QXs';
  const mainThumbnail = getYouTubeThumbnail(mainFeaturedId, 'maxres');

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-white text-zinc-900">
      {/* Subtle Blue Tint Animated Background Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/70 blur-[110px] pointer-events-none rounded-full"
      />
      <motion.div
        animate={{
          scale: [1.05, 0.95, 1.05],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-40 left-1/4 w-[400px] h-[300px] bg-indigo-50/50 blur-[100px] pointer-events-none rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Status Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between border-b border-zinc-200/80 pb-4 mb-12 text-xs font-mono"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0052ff]" />
            <span className="text-zinc-800 font-bold tracking-wider uppercase">Disponível para Novos Projetos</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-zinc-400 uppercase tracking-widest text-[11px] font-medium">
            <span>PREMIERE PRO</span>
            <span className="text-zinc-300">•</span>
            <span>AFTER EFFECTS</span>
            <span className="text-zinc-300">•</span>
            <span>PHOTOSHOP</span>
          </div>
        </motion.div>

        {/* Hero Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0052ff] text-xs font-mono font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Edição Dinâmica & Motion Graphics</span>
            </div>

            <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[1.02] uppercase text-zinc-950">
              VÍDEOS QUE <span className="text-[#0052ff]">PRENDEM</span> A ATENÇÃO.
            </h1>

            <p className="text-zinc-600 font-sans text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Transformo gravações brutas em conteúdos de alta retenção no <strong className="text-zinc-900 font-semibold">Premiere Pro</strong>, com animações e efeitos no <strong className="text-zinc-900 font-semibold">After Effects</strong> e identidade visual no <strong className="text-zinc-900 font-semibold">Photoshop</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                id="hero-cta-explore"
                onClick={onExploreClick}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-zinc-950 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#0052ff] transition-all cursor-pointer shadow-lg active:scale-95"
              >
                <span>Explorar Trabalhos</span>
                <ArrowDown className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                id="hero-cta-featured"
                onClick={() => onOpenFeaturedVideo(mainFeaturedId)}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-zinc-900 font-mono text-xs font-bold uppercase tracking-wider rounded-full hover:bg-zinc-100 transition-all cursor-pointer border border-zinc-300 hover:border-zinc-400 active:scale-95 shadow-xs"
              >
                <Play className="w-3.5 h-3.5 fill-current text-[#0052ff]" />
                <span>Assistir Showreel</span>
              </motion.button>
            </div>

            {/* Quick Feature Badges */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-4 text-xs font-mono text-zinc-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0052ff]" />
                <span className="font-semibold text-zinc-800">Pacing de Retenção</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0052ff]" />
                <span className="font-semibold text-zinc-800">Sound Design Imersivo</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0052ff]" />
                <span className="font-semibold text-zinc-800">Entrega em 3 a 4 Dias</span>
              </div>
            </div>
          </motion.div>

          {/* Right Featured Reel Spotlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div
              onClick={() => onOpenFeaturedVideo(mainFeaturedId)}
              className="group relative rounded-2xl overflow-hidden bg-white border border-zinc-200 hover:border-blue-500/60 p-2.5 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-900">
                <img
                  src={mainThumbnail}
                  alt="Showreel de Edição de Vídeo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="w-16 h-16 rounded-full bg-[#0052ff] text-white flex items-center justify-center shadow-xl shadow-blue-500/50"
                  >
                    <Play className="w-6 h-6 fill-current translate-x-0.5" />
                  </motion.div>
                </div>

                <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-mono font-bold text-white border border-white/20 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-blue-400" />
                  <span>SHOWREEL OFICIAL</span>
                </div>
              </div>

              <div className="p-3.5 flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="font-bold text-zinc-900 uppercase block">Edição Dinâmica 16:9</span>
                  <span className="text-zinc-500 text-[11px]">Premiere Pro + After Effects</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0052ff] border border-blue-200 text-[10px] font-bold">
                  ASSISTIR
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
        >
          
          <div className="p-6 rounded-2xl bg-zinc-50/80 border border-zinc-200 hover:border-zinc-300 transition-colors">
            <span className="font-display font-extrabold text-3xl sm:text-4xl text-zinc-950 block">
              +120%
            </span>
            <span className="font-sans font-bold text-sm text-zinc-800 mt-2 block">
              Taxa de Retenção
            </span>
            <p className="font-sans text-xs text-zinc-500 mt-1 leading-relaxed">
              Cortes precisos e ganchos rítmicos para prender o espectador até o final.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-50/80 border border-zinc-200 hover:border-zinc-300 transition-colors">
            <span className="font-display font-extrabold text-3xl sm:text-4xl text-[#0052ff] block">
              3 a 4 Dias
            </span>
            <span className="font-sans font-bold text-sm text-zinc-800 mt-2 block">
              Prazo de Entrega
            </span>
            <p className="font-sans text-xs text-zinc-500 mt-1 leading-relaxed">
              Fluxo ágil e organizado para manter seu cronograma de postagens em dia.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-50/80 border border-zinc-200 hover:border-zinc-300 transition-colors">
            <span className="font-display font-extrabold text-3xl sm:text-4xl text-zinc-950 block">
              4K / 60 FPS
            </span>
            <span className="font-sans font-bold text-sm text-zinc-800 mt-2 block">
              Qualidade Master
            </span>
            <p className="font-sans text-xs text-zinc-500 mt-1 leading-relaxed">
              Exportação otimizada para YouTube, Instagram Reels e TikTok com máxima nitidez.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
