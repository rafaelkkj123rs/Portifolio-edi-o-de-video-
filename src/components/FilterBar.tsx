import React from 'react';
import { Category } from '../types';
import { Film, Smartphone, Sparkles, Grid, Image as ImageIcon } from 'lucide-react';

interface FilterBarProps {
  currentCategory: Category;
  onSelectCategory: (category: Category) => void;
  counts: {
    todos: number;
    destaques: number;
    videos: number;
    shorts: number;
    gifs: number;
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
      label: 'Shorts & Reels (9:16)',
      icon: <Smartphone className="w-3.5 h-3.5" />,
      count: counts.shorts
    },
    {
      id: 'gifs',
      label: 'GIFs & Motion',
      icon: <ImageIcon className="w-3.5 h-3.5" />,
      count: counts.gifs
    }
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 py-6 my-4 border-y-2 border-[#111111]">
      {tabs.map((tab) => {
        const isActive = currentCategory === tab.id;
        return (
          <button
            key={tab.id}
            id={`filter-tab-${tab.id}`}
            onClick={() => onSelectCategory(tab.id)}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-mono text-xs uppercase tracking-wider transition-all cursor-pointer focus:outline-none border-2 border-[#111111] ${
              isActive
                ? 'bg-[#0052FF] text-white font-bold shadow-[3px_3px_0px_0px_#111111]'
                : 'bg-white text-[#111111] hover:bg-[#E5E2D8] shadow-[2px_2px_0px_0px_#111111]'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
            <span
              className={`px-2 py-0.5 rounded-md font-bold text-[10px] ${
                isActive
                  ? 'bg-[#18181B] text-white'
                  : 'bg-[#E5E2D8] text-[#111111]'
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
