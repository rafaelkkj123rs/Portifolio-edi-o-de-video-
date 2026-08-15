import React, { useState, useEffect } from 'react';
import { VideoProject } from '../types';
import { X, ChevronLeft, ChevronRight, Copy, Check, ExternalLink, Film, Smartphone, Sparkles, Image as ImageIcon, Palette } from 'lucide-react';
import { getYouTubeEmbedUrl, formatImageOrGifUrl } from '../utils/youtube';

interface VideoModalProps {
  video: VideoProject | null;
  allVideos: VideoProject[];
  onClose: () => void;
  onSelectVideo: (video: VideoProject) => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  video,
  allVideos,
  onClose,
  onSelectVideo
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!video) return null;

  const currentIndex = allVideos.findIndex((v) => v.id === video.id);
  const prevVideo = allVideos[(currentIndex - 1 + allVideos.length) % allVideos.length];
  const nextVideo = allVideos[(currentIndex + 1) % allVideos.length];

  const isGif = video.type === 'gif';
  const isDesign = video.type === 'design';
  const isShort = video.type === 'short';
  const isVertical = isShort || isDesign || video.aspectRatio === '9:16';

  const rawUrl = isDesign ? (video.imageUrl || video.gifUrl) : isGif && video.gifUrl ? video.gifUrl : null;
  const imageUrl = formatImageOrGifUrl(rawUrl || undefined);

  const directUrl = imageUrl
    ? imageUrl
    : isShort || video.aspectRatio === '9:16'
    ? `https://youtube.com/shorts/${video.youtubeId}`
    : `https://youtu.be/${video.youtubeId}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(directUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="video-modal-overlay"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="video-modal-container"
        className="relative w-full max-w-5xl bg-white border-2 border-[#111111] rounded-2xl overflow-hidden my-auto shadow-[8px_8px_0px_0px_#111111] flex flex-col lg:flex-row max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="modal-close-btn"
          onClick={onClose}
          className="absolute top-3 right-3 z-30 p-2 rounded-xl bg-[#18181B] hover:bg-[#0052FF] text-white border border-white/20 transition-colors focus:outline-none"
          title="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video / GIF / Image Player Side */}
        <div className={`relative bg-[#18181B] flex items-center justify-center ${isVertical ? 'lg:w-1/2 p-4' : 'lg:w-2/3 p-2 sm:p-4'}`}>
          <div
            className={`w-full relative mx-auto overflow-hidden rounded-xl border-2 border-black/20 bg-black flex items-center justify-center ${
              isVertical ? 'aspect-[9/16] max-h-[70vh] max-w-[360px]' : 'aspect-video max-h-[70vh]'
            }`}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={video.title || video.clientOrProject || 'Design'}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain bg-black"
              />
            ) : (
              <iframe
                src={getYouTubeEmbedUrl(video.youtubeId || '', true)}
                title={video.title || video.clientOrProject || 'Video'}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </div>

          {/* Navigation Arrows overlay on player */}
          <button
            id="modal-prev-video-btn"
            onClick={() => onSelectVideo(prevVideo)}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2.5 rounded-xl bg-[#0052FF] text-white hover:bg-blue-600 border border-white/20 transition-colors z-20 focus:outline-none shadow-md"
            title="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            id="modal-next-video-btn"
            onClick={() => onSelectVideo(nextVideo)}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-xl bg-[#0052FF] text-white hover:bg-blue-600 border border-white/20 transition-colors z-20 focus:outline-none shadow-md"
            title="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Details Side */}
        <div className={`p-6 bg-white flex flex-col justify-between overflow-y-auto ${isVertical ? 'lg:w-1/2' : 'lg:w-1/3'} border-t-2 lg:border-t-0 lg:border-l-2 border-[#111111]`}>
          <div className="space-y-4">
            {/* Badges Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#111111] pb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#F5F3EC] border border-black/10 text-xs font-mono font-bold text-[#111111] uppercase">
                {isDesign ? <Palette className="w-3.5 h-3.5 text-[#0052FF]" /> : isGif && !video.youtubeId ? <ImageIcon className="w-3.5 h-3.5 text-[#0052FF]" /> : isVertical ? <Smartphone className="w-3.5 h-3.5 text-[#0052FF]" /> : <Film className="w-3.5 h-3.5 text-[#0052FF]" />}
                <span>{isDesign ? 'DESIGN GRÁFICO' : isGif && video.gifUrl ? 'GIF ANIMADO' : video.aspectRatio === '9:16' ? '9:16 • MOTION' : video.aspectRatio} • {video.category}</span>
              </span>

              {video.featured && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#0052FF] text-white font-mono font-bold text-xs uppercase shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Destaque</span>
                </span>
              )}
            </div>

            {/* Title & Client */}
            <div>
              <span className="text-xs font-mono font-bold text-[#0052FF] uppercase tracking-widest block">
                {video.clientOrProject}
              </span>
              {video.title && !isDesign && (
                <h2 className="text-2xl font-sans font-black text-[#111111] mt-1 leading-tight uppercase">
                  {video.title}
                </h2>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-700 font-sans leading-relaxed font-medium">
              {video.description}
            </p>

            {/* Tech Specs Table */}
            <div className="bg-[#F5F3EC] border-2 border-[#111111] rounded-xl p-3.5 space-y-2 text-xs font-mono">
              <div className="flex justify-between border-b border-black/10 pb-1.5 text-zinc-700 font-bold">
                <span>Resolução:</span>
                <span className="text-[#111111]">{video.resolution}</span>
              </div>
              <div className="flex justify-between border-b border-black/10 pb-1.5 text-zinc-700 font-bold">
                <span>Taxa de Quadros:</span>
                <span className="text-[#111111]">{video.fps}</span>
              </div>
              <div className="flex justify-between text-zinc-700 font-bold">
                <span>Softwares Usados:</span>
                <span className="text-[#0052FF]">{video.software.join(', ')}</span>
              </div>
            </div>

            {/* Tags */}
            <div>
              <span className="text-[11px] font-mono text-zinc-600 font-bold uppercase tracking-wider block mb-2">
                Palavras-chave:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {video.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-[#E5E2D8] border border-black/10 text-xs font-mono text-[#111111] font-bold uppercase"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-6 mt-6 border-t-2 border-[#111111] flex items-center gap-3">
            <button
              id="modal-copy-link-btn"
              onClick={handleCopyLink}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#E5E2D8] border-2 border-[#111111] text-[#111111] font-mono text-xs font-bold uppercase rounded-xl hover:bg-[#0052FF] hover:text-white transition-colors focus:outline-none"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'LINK COPIADO!' : 'COPIAR LINK'}</span>
            </button>

            <a
              id="modal-external-link"
              href={directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#18181B] text-white font-mono text-xs font-bold uppercase rounded-xl hover:bg-[#0052FF] transition-colors border-2 border-[#111111]"
            >
              <ExternalLink className="w-4 h-4" />
              <span>{isDesign ? 'ABRIR ARTE' : isGif ? 'ABRIR GIF' : 'YOUTUBE'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
