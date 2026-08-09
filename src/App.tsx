import React, { useState, useEffect } from 'react';
import { VideoProject } from './types';
import { INITIAL_VIDEOS } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VideoGrid } from './components/VideoGrid';
import { VideoModal } from './components/VideoModal';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from './data/portfolioData';

export default function App() {
  const [videos, setVideos] = useState<VideoProject[]>(() => {
    const saved = localStorage.getItem('portfolio_videos_v3');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge missing initial items into parsed
          const existingIds = new Set(parsed.map((v: VideoProject) => v.id));
          const missingInitials = INITIAL_VIDEOS.filter((v) => !existingIds.has(v.id));
          return [...parsed, ...missingInitials];
        }
      } catch (e) {
        return INITIAL_VIDEOS;
      }
    }
    return INITIAL_VIDEOS;
  });

  useEffect(() => {
    localStorage.setItem('portfolio_videos_v3', JSON.stringify(videos));
  }, [videos]);

  const [selectedVideo, setSelectedVideo] = useState<VideoProject | null>(null);
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'trabalhos', 'sobre', 'habilidades', 'contato'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddVideo = (newVideo: VideoProject) => {
    setVideos((prev) => [newVideo, ...prev]);
  };

  const handleOpenFeatured = (youtubeId: string) => {
    const found = videos.find((v) => v.youtubeId === youtubeId);
    if (found) {
      setSelectedVideo(found);
    } else {
      setSelectedVideo(videos[0]);
    }
  };

  const whatsappFloatingUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent('Olá! Vim pelo seu portfólio e gostaria de um orçamento de vídeo.')}`;

  return (
    <div className="min-h-screen bg-[#F5F3EC] text-[#111111] font-sans selection:bg-[#0052FF] selection:text-white">
      {/* Navigation Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Hero Section */}
      <Hero
        onExploreClick={() => handleNavigate('trabalhos')}
        onOpenFeaturedVideo={handleOpenFeatured}
      />

      {/* Main Video Works Portfolio Grid */}
      <VideoGrid
        videos={videos}
        onSelectVideo={setSelectedVideo}
        onAddVideo={handleAddVideo}
      />

      {/* About & Technical Specs */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

      {/* Lightbox Video Player Modal */}
      <VideoModal
        video={selectedVideo}
        allVideos={videos}
        onClose={() => setSelectedVideo(null)}
        onSelectVideo={setSelectedVideo}
      />

      {/* Floating WhatsApp Action Button Sticker */}
      <a
        id="floating-whatsapp-btn"
        href={whatsappFloatingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-30 p-3.5 bg-[#18181B] text-white rounded-full shadow-2xl hover:bg-[#0052FF] hover:scale-105 transition-all duration-300 flex items-center justify-center group border border-white/10"
        title="Conversar no WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-white" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap font-mono text-xs font-bold uppercase pl-0 group-hover:pl-2">
          Falar no WhatsApp
        </span>
      </a>
    </div>
  );
}
