import React, { useState } from 'react';
import { VideoProject } from '../types';
import { Play, ExternalLink, Sparkles, Smartphone, Film, Image as ImageIcon, Palette } from 'lucide-react';
import { getYouTubeThumbnail } from '../utils/youtube';

interface VideoCardProps {
  video: VideoProject;
  onSelect: (video: VideoProject) => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, onSelect }) => {
  const [imgError, setImgError] = useState(false);
  const isShort = video.type === 'short';
  const isGif = video.type === 'gif';
  const isDesign = video.type === 'design';
  const isVertical = isShort || isDesign || video.aspectRatio === '9:16';

  const thumbnailUrl = isDesign && video.imageUrl
    ? video.imageUrl
    : isGif && video.gifUrl
    ? video.gifUrl
    : imgError || !video.youtubeId
    ? 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80'
    : getYouTubeThumbnail(video.youtubeId, 'maxres');

  const youtubeDirectUrl = isDesign && video.imageUrl
    ? video.imageUrl
    : isGif && video.gifUrl
    ? video.gifUrl
    : isShort || video.youtubeId
    ? `https://youtube.com/shorts/${video.youtubeId}`
    : `https://youtu.be/${video.youtubeId}`;

  return (
    <div
      id={`video-card-${video.id}`}
      className={`group relative bg-white border-2 border-[#111111] rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_#111111] hover:shadow-[6px_6px_0px_0px_#0052FF] transition-all duration-300 flex flex-col justify-between ${
        isVertical ? 'col-span-1' : 'col-span-1 sm:col-span-2'
      }`}
    >
      {/* Editorial Folder Tab Header */}
      <div className="bg-[#18181B] text-white px-3.5 py-2 flex items-center justify-between border-b-2 border-[#111111]">
        <span className="flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-200">
          {isDesign ? <Palette className="w-3.5 h-3.5 text-[#0052FF]" /> : isGif && !video.youtubeId ? <ImageIcon className="w-3.5 h-3.5 text-[#0052FF]" /> : isVertical ? <Smartphone className="w-3.5 h-3.5 text-[#0052FF]" /> : <Film className="w-3.5 h-3.5 text-[#0052FF]" />}
          <span>{video.clientOrProject}</span>
        </span>

        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#0052FF] text-white font-bold uppercase">
          {isDesign ? 'DESIGN' : isGif && video.gifUrl ? 'GIF ANIMADO' : video.aspectRatio === '9:16' ? '9:16 • MOTION' : video.aspectRatio}
        </span>
      </div>

      {/* Top Media Container */}
      <div
        className={`relative w-full overflow-hidden bg-black cursor-pointer ${
          isVertical ? 'aspect-[9/16]' : 'aspect-video'
        }`}
        onClick={() => onSelect(video)}
      >
        <img
          src={thumbnailUrl}
          alt={video.title}
          onError={() => setImgError(true)}
          className="w-full h-full object-contain bg-[#111111] group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
          loading="lazy"
        />

        {/* Top Feature Badge */}
        {video.featured && (
          <div className="absolute top-3 left-3 z-10">
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#0052FF] text-white font-mono font-bold text-[10px] uppercase shadow-md border border-white/20">
              <Sparkles className="w-3 h-3" />
              <span>Destaque</span>
            </span>
          </div>
        )}

        {/* Center Play/Expand Button on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity bg-black/20 group-hover:bg-black/10">
          <div className="w-14 h-14 rounded-full bg-[#0052FF] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform border-2 border-white">
            {isDesign ? <Palette className="w-6 h-6 stroke-2" /> : isGif ? <ImageIcon className="w-6 h-6 stroke-2" /> : <Play className="w-6 h-6 fill-white translate-x-0.5" />}
          </div>
        </div>

        {/* Bottom overlay inside thumbnail */}
        <div className="absolute bottom-3 right-3 z-10">
          <span className="font-mono text-[10px] bg-[#18181B]/90 text-white font-bold px-2.5 py-1 rounded-md border border-white/20 uppercase shadow">
            {video.clientOrProject}
          </span>
        </div>
      </div>

      {/* Card Content Footer */}
      <div className="p-4 bg-white flex-1 flex flex-col justify-between border-t-2 border-[#111111]">
        <div>
          <div className="flex items-start justify-between gap-2">
            <p className="text-xs font-sans text-zinc-800 line-clamp-3 leading-relaxed font-medium">
              {video.description}
            </p>

            <a
              href={youtubeDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-1.5 text-[#111111] hover:text-[#0052FF] hover:bg-[#E5E2D8] rounded-lg transition-colors focus:outline-none shrink-0"
              title={isDesign ? 'Ver Arte Original' : isGif ? 'Ver GIF Original' : 'Abrir no YouTube'}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Tag pills */}
        <div className="pt-3 mt-3 border-t border-zinc-200 flex flex-wrap items-center gap-1.5">
          {video.tags.slice(0, 4).map((tag, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-md bg-[#E5E2D8] border border-black/10 text-[10px] font-mono text-[#111111] font-bold uppercase tracking-wider"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
