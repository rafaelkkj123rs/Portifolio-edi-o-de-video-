import { VideoProject, ContactInfo, SkillCategory } from '../types';

export const INITIAL_VIDEOS: VideoProject[] = [
  {
    id: '1',
    youtubeId: 'QpqL-zt7QXs',
    title: 'Edição Principal & Cinematic Cut',
    clientOrProject: 'Projeto Especial',
    type: 'video',
    category: 'Edição Comercial',
    featured: true,
    duration: '16:9 • Widescreen',
    viewsCount: '15K+ views',
    aspectRatio: '16:9',
    resolution: '4K Ultra HD',
    fps: '60 FPS',
    software: ['Adobe Premiere Pro', 'After Effects'],
    description: 'Corte cinematográfico com dinâmica acelerada, pós-produção e sound design imersivo focado em altíssima retenção de audiência.',
    tags: ['Premiere Pro', 'After Effects', 'Sound Design', 'Storytelling'],
    date: '2024'
  },
  {
    id: '2',
    youtubeId: 'Vdc04s4vXkg',
    title: 'Produção Longa & Narrativa Visual',
    clientOrProject: 'Conteúdo do Canal',
    type: 'video',
    category: 'Documental & Vlog',
    featured: fontTrue(true),
    duration: '16:9 • Long Form',
    viewsCount: '28K+ views',
    aspectRatio: '16:9',
    resolution: '4K Ultra HD',
    fps: '24 FPS',
    software: ['Adobe Premiere Pro', 'Photoshop'],
    description: 'Edição contínua com pacing narrativo, efeitos visuais limpos e sincronização musical precisa para retenção máxima.',
    tags: ['Premiere Pro', 'Photoshop', 'Narrativa', 'Pacing'],
    date: '2024'
  },
  {
    id: '3',
    youtubeId: 'ee17M67XQPE',
    title: 'Short Viral • Visual Hook & SoundFX',
    clientOrProject: 'Content Creator',
    type: 'short',
    category: 'Vertical Content',
    featured: true,
    duration: '9:16 • Vertical',
    viewsCount: '120K+ views',
    aspectRatio: '9:16',
    resolution: '1080x1920 HD',
    fps: '60 FPS',
    software: ['After Effects', 'Premiere Pro'],
    description: 'Edição vertical otimizada para algoritmos de alta retenção (YouTube Shorts, Reels, TikTok) com ganchos visuais e legendas animadas.',
    tags: ['After Effects', 'Premiere Pro', 'Shorts', 'Legendas Animadas'],
    date: '2024'
  },
  {
    id: '4',
    youtubeId: 'APe1QNSY_uQ',
    title: 'Short Edição Dinâmica • Motion & Cut',
    clientOrProject: 'Campanha Social',
    type: 'short',
    category: 'Vertical Content',
    featured: true,
    duration: '9:16 • Vertical',
    viewsCount: '85K+ views',
    aspectRatio: '9:16',
    resolution: '1080x1920 HD',
    fps: '60 FPS',
    software: ['Premiere Pro', 'After Effects'],
    description: 'Corte rápido e efeitos sonoros acentuados projetados para captura imediata de atenção nos primeiros 3 segundos.',
    tags: ['After Effects', 'Premiere Pro', 'Ganchos', 'Motion'],
    date: '2024'
  },
  {
    id: 'gif-1',
    gifUrl: 'https://cdn.discordapp.com/attachments/1252592679611797595/1535529385380155402/KageStore.gif?ex=6a7818ae&is=6a76c72e&hm=0946551513f5dbeb42fef8261489b6f4ae4ca1e2bcee14672da50ad58c322b9b&',
    title: 'KageStore • Motion Banner GIF',
    clientOrProject: 'KageStore',
    type: 'gif',
    category: 'GIFs & Animações',
    featured: true,
    duration: 'GIF Animado Loop',
    viewsCount: 'Motion Graphic',
    aspectRatio: 'banner',
    resolution: 'Full HD Animated',
    fps: '60 FPS',
    software: ['After Effects', 'Photoshop'],
    description: 'Animação e Motion Graphics em GIF desenvolvida no After Effects e exportada para KageStore.',
    tags: ['GIF Animado', 'After Effects', 'Photoshop', 'KageStore'],
    date: '2024'
  },
  {
    id: '5',
    youtubeId: 'ay3Mkyh_A_0',
    title: 'Short Retention Strategy & VFX',
    clientOrProject: 'Branding & Reels',
    type: 'short',
    category: 'Vertical Content',
    featured: false,
    duration: '9:16 • Vertical',
    viewsCount: '45K+ views',
    aspectRatio: '9:16',
    resolution: '1080x1920 HD',
    fps: '60 FPS',
    software: ['After Effects', 'Premiere Pro'],
    description: 'Design de áudio em camadas e elementos gráficos customizados para manter o espectador engajado do início ao fim.',
    tags: ['After Effects', 'Premiere Pro', 'Overlays', 'Reels'],
    date: '2024'
  },
  {
    id: '6',
    youtubeId: '4FXLyDBVdC8',
    title: 'Short Creative Edit & Sync',
    clientOrProject: 'Creative Reel',
    type: 'short',
    category: 'Vertical Content',
    featured: false,
    duration: '9:16 • Vertical',
    viewsCount: '62K+ views',
    aspectRatio: '9:16',
    resolution: '1080x1920 HD',
    fps: '60 FPS',
    software: ['Premiere Pro', 'After Effects'],
    description: 'Sincronização impecável com a trilha sonora, recortes rápidos e animações no After Effects.',
    tags: ['Premiere Pro', 'After Effects', 'Music Sync', 'Speed Ramping'],
    date: '2024'
  },
  {
    id: '7',
    youtubeId: 'ek5TySM0DLQ',
    title: 'Short High Impact Graphics',
    clientOrProject: 'Growth Edit',
    type: 'short',
    category: 'Vertical Content',
    featured: false,
    duration: '9:16 • Vertical',
    viewsCount: '98K+ views',
    aspectRatio: '9:16',
    resolution: '1080x1920 HD',
    fps: '60 FPS',
    software: ['After Effects', 'Premiere Pro'],
    description: 'Gráficos na tela, ícones pop-up animados no After Effects e pontuação sonora contínua construindo urgência narrativa.',
    tags: ['After Effects', 'Premiere Pro', 'Pop-ups', 'Kinetic Type'],
    date: '2024'
  },
  {
    id: '8',
    youtubeId: 'm7ij6w3_hDE',
    title: 'Short Visual Hook & Trend Cut',
    clientOrProject: 'Short Form Master',
    type: 'short',
    category: 'Vertical Content',
    featured: false,
    duration: '9:16 • Vertical',
    viewsCount: '110K+ views',
    aspectRatio: '9:16',
    resolution: '1080x1920 HD',
    fps: '60 FPS',
    software: ['Premiere Pro', 'After Effects'],
    description: 'Montagem rítmica acelerada no Premiere Pro com animações de texto do After Effects.',
    tags: ['Premiere Pro', 'After Effects', 'Seamless Loop', 'Clean VFX'],
    date: '2024'
  }
];

function fontTrue(val: boolean) { return val; }

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Edição de Vídeo (Main)',
    skills: ['Adobe Premiere Pro (Principal)', 'Corte Narrativo & Pacing', 'High Retention Editing', 'Sincronização & Trilha', 'Edição Multicâmera']
  },
  {
    title: 'Motion & FX (After Effects)',
    skills: ['Adobe After Effects (Animação)', 'Motion Graphics & Textos', 'Legendas Dinâmicas', 'VFX & Clean Overlays', 'Criação de GIFs & Banners']
  },
  {
    title: 'Design & Assets (Photoshop)',
    skills: ['Adobe Photoshop', 'Criação de Thumbnails', 'Assets Gráficos & PNGs', 'Tratamento de Imagem', 'Composição Visual']
  },
  {
    title: 'Especialidades Técnicas',
    skills: ['Vídeos 16:9 Widescreen', 'Shorts / Reels / TikTok (9:16)', 'Exportação GIF Animado', 'Sound Design Imersivo', 'Color Grading (Iniciante / Básico)']
  }
];

export const CONTACT_INFO: ContactInfo = {
  whatsappNumber: '5521995370657',
  whatsappFormatted: '(21) 99537-0657',
  discordUsername: 'sla_2024',
  location: 'Brasil / Remoto Global',
  availableForHire: true
};
