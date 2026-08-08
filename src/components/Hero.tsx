import React from 'react';
import { Play, Folder, Sparkles, ArrowDown, Check, Film, Smartphone } from 'lucide-react';
import { getYouTubeThumbnail } from '../utils/youtube';

interface HeroProps {
  onExploreClick: () => void;
  onOpenFeaturedVideo: (youtubeId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onOpenFeaturedVideo }) => {
  const mainFeaturedId = 'QpqL-zt7QXs';
  const mainThumbnail = getYouTubeThumbnail(mainFeaturedId, 'maxres');

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#F5F3EC] text-[#111111]">
      {/* Editorial Header Bar Metadata */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center justify-between border-b-2 border-[#111111] pb-2 font-mono text-xs uppercase tracking-widest text-[#111111]">
          <span>PORTFÓLIO DE VÍDEO</span>
          <span className="hidden sm:inline font-bold text-[#0052FF]">PREMIERE PRO • AFTER EFFECTS • PHOTOSHOP</span>
          <span>2026 EDITION</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Graphic Header */}
        <div className="relative mb-12">
          
          {/* Massive Display Title */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tighter uppercase text-[#111111] leading-none">
              Portfólio
            </h1>

            <div className="flex flex-col items-start md:items-end">
              <span className="font-sans font-black text-2xl sm:text-3xl text-[#111111] uppercase tracking-tight">
                EDIÇÃO & MOTION
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#0052FF] font-bold">
                PREMIERE PRO + AFTER EFFECTS + PHOTOSHOP
              </span>
            </div>
          </div>

          {/* Central Blue Folder Graphic Banner with Solid Tabs */}
          <div className="relative mt-8">
            
            {/* Folder Tabs attached seamlessly on top */}
            <div className="flex items-center gap-2 pl-2 sm:pl-4 -mb-[2px] relative z-10 overflow-x-auto pb-0.5">
              <div className="bg-[#18181B] text-white font-mono text-xs px-4 py-2 rounded-t-xl font-black uppercase border-t-2 border-x-2 border-[#111111] flex items-center gap-2 shrink-0">
                <Film className="w-3.5 h-3.5 text-[#0052FF]" />
                <span>16:9 Widescreen</span>
              </div>
              <div className="bg-[#18181B] text-white font-mono text-xs px-4 py-2 rounded-t-xl font-black uppercase border-t-2 border-x-2 border-[#111111] flex items-center gap-2 shrink-0">
                <Smartphone className="w-3.5 h-3.5 text-[#0052FF]" />
                <span>9:16 Shorts & Reels</span>
              </div>
              <div className="bg-[#18181B] text-white font-mono text-xs px-4 py-2 rounded-t-xl font-black uppercase border-t-2 border-x-2 border-[#111111] flex items-center gap-2 shrink-0">
                <Sparkles className="w-3.5 h-3.5 text-[#0052FF]" />
                <span>GIFs & Banners</span>
              </div>
            </div>

            {/* Main Folder Box */}
            <div className="rounded-2xl rounded-tl-none bg-[#0052FF] p-6 sm:p-10 text-white border-2 border-[#111111] shadow-[6px_6px_0px_0px_#111111] relative z-0">
              
              {/* Floating Black Badge Stickers */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#18181B] text-white font-mono text-xs font-bold uppercase shadow-lg border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-[#0052FF] animate-pulse" />
                  <span>Edição em Premiere Pro & After Effects</span>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#18181B] text-white font-mono text-xs font-bold uppercase shadow-lg border border-white/10">
                  <Check className="w-3.5 h-3.5 text-[#0052FF]" />
                  <span>High Retention Pacing</span>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#18181B] text-white font-mono text-xs font-bold uppercase shadow-lg border border-white/10">
                  <Check className="w-3.5 h-3.5 text-[#0052FF]" />
                  <span>Motion & Photoshop Assets</span>
                </div>
              </div>

              {/* Big Headline inside Folder */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                    CONSTRUINDO MARCAS ATRAVÉS DE <span className="underline underline-offset-8 decoration-white/40">ESTRATÉGIA</span>, CONTEÚDO E RITMO.
                  </h2>
                  <p className="text-white/90 font-sans text-base sm:text-lg max-w-2xl font-medium leading-relaxed">
                    Transforme suas gravações brutas em vídeos magnéticos. Edição de alta retenção no Premiere Pro com animações e efeitos no After Effects e artes no Photoshop.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <button
                      id="hero-cta-explore"
                      onClick={onExploreClick}
                      className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#18181B] text-white font-mono text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-black transition-all cursor-pointer shadow-lg border border-white/10"
                    >
                      <span>VER TRABALHOS</span>
                      <ArrowDown className="w-4 h-4" />
                    </button>

                    <button
                      id="hero-cta-featured"
                      onClick={() => onOpenFeaturedVideo(mainFeaturedId)}
                      className="inline-flex items-center gap-3 px-6 py-3.5 bg-white text-[#111111] font-mono text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-slate-100 transition-all cursor-pointer shadow-md"
                    >
                      <Play className="w-4 h-4 fill-[#111111]" />
                      <span>ASSISTIR SHOWREEL</span>
                    </button>
                  </div>
                </div>

                {/* Showreel Thumbnail Card */}
                <div className="lg:col-span-4 relative">
                  <div
                    onClick={() => onOpenFeaturedVideo(mainFeaturedId)}
                    className="relative rounded-xl overflow-hidden bg-[#18181B] p-2 border border-white/20 shadow-2xl cursor-pointer group transform hover:-translate-y-1 transition-transform"
                  >
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                      <img
                        src={mainThumbnail}
                        alt="Showreel de Edição"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-[#0052FF] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 fill-white translate-x-0.5" />
                        </div>
                      </div>
                    </div>
                    <div className="pt-2 px-1 flex items-center justify-between text-[11px] font-mono text-white/80">
                      <span className="font-bold uppercase">Showreel Principal</span>
                      <span className="text-[#0052FF] font-bold">Premiere + After Effects</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Metric Stickers Grid (Matching the reference image "+120% Result & Growth") */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          
          <div className="p-6 bg-white rounded-2xl border-2 border-[#111111] shadow-[4px_4px_0px_0px_#111111] flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-[#E5E2D8] border-2 border-[#111111] flex items-center justify-center shrink-0">
              <span className="font-mono font-black text-xl text-[#111111]">+120%</span>
            </div>
            <div>
              <h3 className="font-sans font-black text-lg text-[#111111] uppercase leading-tight">
                Taxa de Retenção
              </h3>
              <p className="font-mono text-xs text-zinc-600 mt-1">
                Aumento médio de minutos assistidos por espectador.
              </p>
            </div>
          </div>

          <div className="p-6 bg-[#0052FF] text-white rounded-2xl border-2 border-[#111111] shadow-[4px_4px_0px_0px_#111111] flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-white text-[#111111] border-2 border-[#111111] flex items-center justify-center shrink-0">
              <span className="font-mono font-black text-xl text-[#0052FF]">+80%</span>
            </div>
            <div>
              <h3 className="font-sans font-black text-lg uppercase leading-tight">
                Engajamento
              </h3>
              <p className="font-mono text-xs text-white/80 mt-1">
                Crescimento em comentários, compartilhamentos e likes.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border-2 border-[#111111] shadow-[4px_4px_0px_0px_#111111] flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-[#E5E2D8] border-2 border-[#111111] flex items-center justify-center shrink-0">
              <span className="font-mono font-black text-xl text-[#111111]">+60%</span>
            </div>
            <div>
              <h3 className="font-sans font-black text-lg text-[#111111] uppercase leading-tight">
                Alcance Orgânico
              </h3>
              <p className="font-mono text-xs text-zinc-600 mt-1">
                Expansão de impressões em algoritmos verticais e de busca.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
