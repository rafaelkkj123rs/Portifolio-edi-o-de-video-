import React, { useState } from 'react';
import { motion } from 'motion/react';
import { VideoProject, Category } from '../types';
import { VideoCard } from './VideoCard';
import { FilterBar } from './FilterBar';
import { Folder } from 'lucide-react';
import { extractYouTubeId } from '../utils/youtube';

interface VideoGridProps {
  videos: VideoProject[];
  onSelectVideo: (video: VideoProject) => void;
  onAddVideo: (newVideo: VideoProject) => void;
}

export const VideoGrid: React.FC<VideoGridProps> = ({
  videos,
  onSelectVideo,
  onAddVideo
}) => {
  const [currentCategory, setCurrentCategory] = useState<Category>('todos');
  const [showAddForm, setShowAddForm] = useState(false);

  // Form State
  const [newUrl, setNewUrl] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newClient, setNewClient] = useState('');
  const [newType, setNewType] = useState<'video' | 'short'>('short');
  const [newDescription, setNewDescription] = useState('');
  const [newTags, setNewTags] = useState('');
  const [formError, setFormError] = useState('');

  // Counts for tabs
  const counts = {
    todos: videos.length,
    destaques: videos.filter((v) => v.featured).length,
    videos: videos.filter((v) => v.type === 'video').length,
    shorts: videos.filter((v) => v.type === 'short').length,
    gifs: videos.filter((v) => v.type === 'gif').length,
    designs: videos.filter((v) => v.type === 'design').length
  };

  // Filtered list
  const filteredVideos = videos.filter((video) => {
    if (currentCategory === 'destaques') return video.featured;
    if (currentCategory === 'videos') return video.type === 'video';
    if (currentCategory === 'shorts') return video.type === 'short';
    if (currentCategory === 'gifs') return video.type === 'gif';
    if (currentCategory === 'designs') return video.type === 'design';
    return true;
  });

  const handleCreateVideo = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    const extractedId = extractYouTubeId(newUrl);
    if (!extractedId) {
      setFormError('URL de vídeo do YouTube inválida. Insira um link válido do YouTube.');
      return;
    }

    if (!newTitle.trim()) {
      setFormError('Por favor, informe o título do vídeo.');
      return;
    }

    const createdItem: VideoProject = {
      id: Date.now().toString(),
      youtubeId: extractedId,
      title: newTitle.trim(),
      clientOrProject: newClient.trim() || 'Projeto Recente',
      type: newType,
      category: newType === 'short' ? 'Vertical Content' : 'Edição Comercial',
      featured: false,
      duration: newType === 'short' ? '9:16 • Vertical' : '16:9 • Widescreen',
      aspectRatio: newType === 'short' ? '9:16' : '16:9',
      resolution: '4K Ultra HD',
      fps: '60 FPS',
      software: ['Premiere Pro', 'After Effects'],
      description: newDescription.trim() || 'Edição de vídeo focada em dinamismo e impacto visual.',
      tags: newTags ? newTags.split(',').map((t) => t.trim()) : ['Novo', 'Edição'],
      date: new Date().getFullYear().toString()
    };

    onAddVideo(createdItem);
    // Reset Form
    setNewUrl('');
    setNewTitle('');
    setNewClient('');
    setNewDescription('');
    setNewTags('');
    setShowAddForm(false);
  };

  return (
    <section id="trabalhos" className="py-20 bg-white text-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b border-zinc-200 pb-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#0052ff] text-xs font-mono font-bold mb-3">
              <Folder className="w-3.5 h-3.5" />
              <span>GALERIA DE PRODUÇÕES</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-zinc-950 leading-none">
              PROJETOS EM DESTAQUE
            </h2>
            <p className="text-zinc-600 font-sans text-sm sm:text-base mt-2 max-w-xl">
              Clique em qualquer projeto para abrir em alta resolução com especificações técnicas e softwares utilizados.
            </p>
          </div>

          <div className="font-mono text-xs text-zinc-500 font-semibold uppercase tracking-widest">
            {filteredVideos.length} {filteredVideos.length === 1 ? 'PROJETO' : 'PROJETOS'} EXIBIDOS
          </div>
        </motion.div>

        {/* Filter Tab Buttons */}
        <FilterBar
          currentCategory={currentCategory}
          onSelectCategory={setCurrentCategory}
          counts={counts}
        />

        {/* Video Cards Responsive Grid */}
        {filteredVideos.length === 0 ? (
          <div className="text-center py-20 bg-zinc-50 border border-dashed border-zinc-200 rounded-2xl my-8">
            <p className="font-mono text-sm text-zinc-500 uppercase font-semibold">
              Nenhum projeto encontrado nesta categoria.
            </p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8 items-start"
          >
            {filteredVideos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onSelect={onSelectVideo}
              />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};
