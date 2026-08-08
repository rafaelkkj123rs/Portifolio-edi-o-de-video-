export type VideoType = 'video' | 'short' | 'gif';

export type Category = 'todos' | 'destaques' | 'videos' | 'shorts' | 'gifs';

export interface VideoProject {
  id: string;
  youtubeId?: string;
  gifUrl?: string;
  title: string;
  clientOrProject: string;
  type: VideoType;
  category: string;
  featured: boolean;
  duration: string;
  viewsCount?: string;
  aspectRatio: '16:9' | '9:16' | 'banner' | '1:1';
  resolution: string;
  fps: string;
  software: string[];
  description: string;
  tags: string[];
  date: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ContactInfo {
  whatsappNumber: string;
  whatsappFormatted: string;
  discordUsername: string;
  location: string;
  availableForHire: boolean;
}
