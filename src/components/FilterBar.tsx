import React from 'react';
import { Category } from '../types';
import { Film, Smartphone, Sparkles, Grid, Image as ImageIcon, Palette } from 'lucide-react';

interface FilterBarProps {
  currentCategory: Category;
  onSelectCategory: (category: Category) => void;
  counts: {
    todos: number;
    destaques: number;
    videos: number;
    shorts: number;
    gifs: number;
    designs: number;
  };
}

export const FilterBar: React.FC<FilterBarProps> = ({
  currentCategory,
  onSelectCategory,
  counts
}) => {
  const tabs: { id: Category; label: string; icon: React.ReactNode; count: number }[] = [
    {
      id: 'todos',
      label: 'Todos',
      icon: <Grid className="w-3.5 h-3.5" />,
      count: counts.todos
    },
    {
      id: 'destaques',
      label: 'Destaques',
      icon: <Sparkles className="w-3.5 h-3.5" />,
      count: counts.destaques
    },
    {
      id: 'videos',
      label: 'Vídeos (16:9)',
      icon: <Film className="w-3.5 h-3.5" />,
      count: counts.videos
    },
    {
      id: 'shorts',
      label: 'Shorts & Reels',
      icon: <Smartphone className="w-3.5 h-3.5" />,
      count: counts.shorts
    },
    {
      id: 'gifs',
      label: 'GIFs & Motion',
      icon: <ImageIcon className="w-3.5 h-3.5" />,
      count: counts.gifs
    },
    {
      id: 'designs',
      label: 'Designs',
      icon: <Palette className="w-3.5 h-3.5" />,
      count: counts.designs
    }
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 py-6 my-2 border-y border-zinc-200">
      {tabs.map((tab) => {
        const isActive = currentCategory === tab.id;
        return (
          <button
            key={tab.id}
            id={`filter-tab-${tab.id}`}
            onClick={() => onSelectCategory(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer focus:outline-none ${
              isActive
                ? 'bg-[#0052ff] text-white font-bold shadow-md shadow-blue-500/25 scale-[1.02]'
                : 'bg-zinc-100 text-zinc-700 hover:text-zinc-950 hover:bg-zinc-200/80 border border-zinc-200/80'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
            <span
              className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                isActive
                  ? 'bg-white/20 text-white'
                  : 'bg-zinc-200 text-zinc-600'
              }`}
            >
              {tab.count}
            </span>
          </button>
        );
      })}
    </div>
  );
};

