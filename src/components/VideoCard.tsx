import React, { useState } from 'react';
import { motion } from 'motion/react';
import { VideoProject } from '../types';
import { Play, ExternalLink, Sparkles, Smartphone, Film, Image as ImageIcon, Palette } from 'lucide-react';
import { getYouTubeThumbnail, formatImageOrGifUrl } from '../utils/youtube';

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

  const formattedImage = isDesign ? formatImageOrGifUrl(video.imageUrl) : null;
  const formattedGif = isGif ? formatImageOrGifUrl(video.gifUrl) : null;

  const thumbnailUrl = formattedImage
    ? formattedImage
    : formattedGif
    ? formattedGif
    : imgError || !video.youtubeId
    ? 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80'
    : getYouTubeThumbnail(video.youtubeId, 'maxres');

  const youtubeDirectUrl = formattedImage
    ? formattedImage
    : formattedGif
    ? formattedGif
    : isShort || video.youtubeId
    ? `https://youtube.com/shorts/${video.youtubeId}`
    : `https://youtu.be/${video.youtubeId}`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      id={`video-card-${video.id}`}
      onClick={() => onSelect(video)}
      className={`group relative bg-white border border-zinc-200/90 hover:border-blue-500 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-xl hover:shadow-blue-500/10 ${
        isVertical ? 'col-span-1' : 'col-span-1 sm:col-span-2'
      }`}
    >
      {/* Card Header Bar */}
      <div className="bg-zinc-50 px-4 py-2.5 flex items-center justify-between border-b border-zinc-200">
        <span className="flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-800">
          {isDesign ? (
            <Palette className="w-3.5 h-3.5 text-[#0052ff]" />
          ) : isGif && !video.youtubeId ? (
            <ImageIcon className="w-3.5 h-3.5 text-[#0052ff]" />
          ) : isVertical ? (
            <Smartphone className="w-3.5 h-3.5 text-[#0052ff]" />
          ) : (
            <Film className="w-3.5 h-3.5 text-[#0052ff]" />
          )}
          <span>{video.clientOrProject}</span>
        </span>

        <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-zinc-200/80 text-zinc-800 font-bold uppercase">
          {isDesign ? 'DESIGN' : isGif && video.gifUrl ? 'GIF' : video.aspectRatio === '9:16' ? '9:16' : video.aspectRatio}
        </span>
      </div>

      {/* Media Thumbnail Box */}
      <div
        className={`relative w-full overflow-hidden bg-zinc-950 ${
          isVertical ? 'aspect-[9/16]' : 'aspect-video'
        }`}
      >
        <img
          src={thumbnailUrl}
          alt={video.title || video.clientOrProject || 'Design'}
          onError={() => setImgError(true)}
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain bg-zinc-950 group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
          loading="lazy"
        />

        {/* Featured Badge */}
        {video.featured && (
          <div className="absolute top-3 left-3 z-10">
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#0052ff] text-white font-mono font-bold text-[10px] uppercase shadow-md shadow-blue-500/30">
              <Sparkles className="w-3 h-3" />
              <span>Destaque</span>
            </span>
          </div>
        )}

        {/* Hover Center Action Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
          <div className="w-14 h-14 rounded-full bg-[#0052ff] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
            {isDesign ? (
              <Palette className="w-6 h-6" />
            ) : isGif ? (
              <ImageIcon className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6 fill-current translate-x-0.5" />
            )}
          </div>
        </div>
      </div>

      {/* Card Content & Details */}
      <div className="p-4 bg-white flex-1 flex flex-col justify-between border-t border-zinc-100">
        <div>
          {video.title && !isDesign && (
            <h3 className="font-display font-bold text-zinc-950 text-base leading-snug mb-1.5 uppercase group-hover:text-[#0052ff] transition-colors">
              {video.title}
            </h3>
          )}

          <p className="text-xs font-sans text-zinc-600 line-clamp-2 leading-relaxed">
            {video.description}
          </p>
        </div>

        {/* Footer Tags & Direct Link */}
        <div className="pt-3 mt-3 border-t border-zinc-100 flex items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5 overflow-hidden">
            {video.tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded-full bg-zinc-100 text-[10px] font-mono font-medium text-zinc-600 uppercase tracking-wider"
              >
                #{tag}
              </span>
            ))}
          </div>

          <a
            href={youtubeDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-1.5 text-zinc-400 hover:text-[#0052ff] hover:bg-blue-50 rounded-lg transition-colors focus:outline-none shrink-0"
            title={isDesign ? 'Ver Imagem Completa' : isGif ? 'Ver GIF' : 'Abrir no YouTube'}
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
