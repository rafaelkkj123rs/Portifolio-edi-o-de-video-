export function getYouTubeThumbnail(youtubeId: string, quality: 'maxres' | 'hq' = 'hq'): string {
  if (quality === 'maxres') {
    return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  }
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
}

export function getYouTubeEmbedUrl(youtubeId: string, autoplay = true): string {
  return `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=${autoplay ? 1 : 0}&rel=0&modestbranding=1`;
}

export function extractYouTubeId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

export function formatImageOrGifUrl(url: string | undefined): string {
  if (!url) return '';
  // Convert ImgBB web page links (e.g. https://ibb.co/PvBSnBgq) to direct image URLs
  if (url.includes('ibb.co/') && !url.includes('i.ibb.co/')) {
    const code = url.split('ibb.co/').pop()?.split('/')[0]?.split('?')[0];
    if (code) {
      return `https://i.ibb.co/${code}/image.gif`;
    }
  }
  return url;
}
