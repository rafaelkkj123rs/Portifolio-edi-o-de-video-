import React, { useState } from 'react';
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
    <section id="trabalhos" className="py-16 bg-[#F5F3EC] text-[#111111] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Folder Header */}
        <div className="bg-white border-2 border-[#111111] rounded-2xl p-6 sm:p-8 shadow-[4px_4px_0px_0px_#111111] mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#18181B] text-white text-xs font-mono font-bold uppercase tracking-widest mb-3">
              <Folder className="w-3.5 h-3.5 text-[#0052FF]" />
              <span>SEÇÃO 01 • PROJETOS DE VÍDEO</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#111111]">
              Catálogo de Trabalhos
            </h2>
            <p className="text-zinc-700 font-sans text-sm sm:text-base mt-2 max-w-xl font-medium">
              Selecione qualquer card para abrir o reprodutor com análise de técnicas, resoluções e softwares.
            </p>
          </div>
        </div>

        {/* Filter Tab Buttons */}
        <FilterBar
          currentCategory={currentCategory}
          onSelectCategory={setCurrentCategory}
          counts={counts}
        />

        {/* Video Cards Responsive Grid */}
        {filteredVideos.length === 0 ? (
          <div className="text-center py-16 bg-white border-2 border-dashed border-[#111111] rounded-2xl my-8">
            <p className="font-mono text-sm text-zinc-600 font-bold uppercase">
              Nenhum vídeo encontrado nesta categoria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8 items-start">
            {filteredVideos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onSelect={onSelectVideo}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
