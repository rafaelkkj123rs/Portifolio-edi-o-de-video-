document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Navbar background on scroll
    const nav = document.querySelector('nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                nav.classList.add('shadow-lg');
                nav.classList.replace('bg-black/80', 'bg-black/95');
            } else {
                nav.classList.remove('shadow-lg');
                nav.classList.replace('bg-black/95', 'bg-black/80');
            }
        });
    }

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.observe(el);
    });

    // YouTube Iframe API Logic for Custom Player
    const ytPlayerWrappers = document.querySelectorAll('.custom-yt-player');
    
    if (ytPlayerWrappers.length > 0) {
        // Format time (seconds to MM:SS)
        const formatTime = (timeInSeconds) => {
            if (isNaN(timeInSeconds) || timeInSeconds === undefined) return '00:00';
            const minutes = Math.floor(timeInSeconds / 60);
            const seconds = Math.floor(timeInSeconds % 60);
            return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        };

        function initYTPlayers() {
            ytPlayerWrappers.forEach((wrapper, index) => {
                const videoId = wrapper.getAttribute('data-video-id');
                if (!videoId) return;

                const container = wrapper.querySelector('.yt-player-container');
                if (!container.id) {
                    container.id = `yt-player-${index}`;
                }

                let ytPlayer;
                let timeUpdateInterval;

                const playPauseBtn = wrapper.querySelector('.play-pause-btn');
                const playIcon = wrapper.querySelector('.play-icon');
                const pauseIcon = wrapper.querySelector('.pause-icon');
                const bigPlayBtn = wrapper.querySelector('.big-play-btn');
                const timeline = wrapper.querySelector('.video-timeline');
                const timeDisplay = wrapper.querySelector('.time-display');
                const muteBtn = wrapper.querySelector('.mute-btn');
                const volumeOnIcon = wrapper.querySelector('.volume-on-icon');
                const volumeOffIcon = wrapper.querySelector('.volume-off-icon');
                const fullscreenBtn = wrapper.querySelector('.fullscreen-btn');
                const clickOverlay = wrapper.querySelector('.click-overlay');
                const ytPoster = wrapper.querySelector('.yt-poster');

                const togglePlay = () => {
                    if (ytPlayer && typeof ytPlayer.getPlayerState === 'function') {
                        const state = ytPlayer.getPlayerState();
                        if (state === YT.PlayerState.PLAYING || state === YT.PlayerState.BUFFERING) {
                            ytPlayer.pauseVideo();
                        } else {
                            ytPlayer.playVideo();
                            // Optimistically hide big play button
                            bigPlayBtn.classList.add('opacity-0');
                            bigPlayBtn.classList.remove('opacity-80');
                        }
                    }
                };

                playPauseBtn.addEventListener('click', togglePlay);
                clickOverlay.addEventListener('click', togglePlay);

                ytPlayer = new YT.Player(container.id, {
                    videoId: videoId,
                    playerVars: {
                        'playsinline': 1,
                        'controls': 0,
                        'disablekb': 1,
                        'fs': 0,
                        'rel': 0,
                        'modestbranding': 1,
                        'iv_load_policy': 3,
                        'showinfo': 0,
                        'origin': window.location.origin
                    },
                    events: {
                        'onReady': (event) => {
                            const duration = ytPlayer.getDuration();
                            timeDisplay.textContent = `00:00 / ${formatTime(duration)}`;
                        },
                        'onStateChange': (event) => {
                            if (event.data === YT.PlayerState.PLAYING) {
                                playIcon.classList.add('hidden');
                                pauseIcon.classList.remove('hidden');
                                bigPlayBtn.classList.add('opacity-0');
                                bigPlayBtn.classList.remove('opacity-80');
                                if (ytPoster) ytPoster.classList.add('opacity-0');
                                
                                clearInterval(timeUpdateInterval);
                                timeUpdateInterval = setInterval(updateTime, 100);
                            } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
                                playIcon.classList.remove('hidden');
                                pauseIcon.classList.add('hidden');
                                bigPlayBtn.classList.remove('opacity-0');
                                bigPlayBtn.classList.add('opacity-80');
                                
                                clearInterval(timeUpdateInterval);
                            } else if (event.data === YT.PlayerState.BUFFERING) {
                                bigPlayBtn.classList.add('opacity-0');
                                bigPlayBtn.classList.remove('opacity-80');
                            }
                        },
                        'onError': (event) => {
                            console.error('YouTube Player Error:', event.data);
                            if (ytPoster) ytPoster.classList.add('opacity-0'); // Hide poster to show native error
                        }
                    }
                });

                // Seek
                timeline.addEventListener('input', (e) => {
                    if (ytPlayer && typeof ytPlayer.seekTo === 'function') {
                        const duration = ytPlayer.getDuration();
                        const time = (e.target.value / 100) * duration;
                        ytPlayer.seekTo(time, true);
                        timeDisplay.textContent = `${formatTime(time)} / ${formatTime(duration)}`;
                    }
                });

                // Mute/Unmute
                muteBtn.addEventListener('click', () => {
                    if (ytPlayer && typeof ytPlayer.isMuted === 'function') {
                        if (ytPlayer.isMuted()) {
                            ytPlayer.unMute();
                            volumeOnIcon.classList.remove('hidden');
                            volumeOffIcon.classList.add('hidden');
                        } else {
                            ytPlayer.mute();
                            volumeOnIcon.classList.add('hidden');
                            volumeOffIcon.classList.remove('hidden');
                        }
                    }
                });

                // Fullscreen
                fullscreenBtn.addEventListener('click', () => {
                    if (wrapper.requestFullscreen) {
                        wrapper.requestFullscreen();
                    } else if (wrapper.webkitRequestFullscreen) { /* Safari */
                        wrapper.webkitRequestFullscreen();
                    } else if (wrapper.msRequestFullscreen) { /* IE11 */
                        wrapper.msRequestFullscreen();
                    }
                });

                function updateTime() {
                    if (ytPlayer && typeof ytPlayer.getCurrentTime === 'function') {
                        const currentTime = ytPlayer.getCurrentTime();
                        const duration = ytPlayer.getDuration();
                        const percentage = (currentTime / duration) * 100;
                        
                        // Only update timeline if not dragging
                        if (document.activeElement !== timeline) {
                            timeline.value = percentage || 0;
                        }
                        
                        timeDisplay.textContent = `${formatTime(currentTime)} / ${formatTime(duration)}`;
                    }
                }
            });
        }

        // Load YouTube Iframe API safely
        if (window.YT && window.YT.Player) {
            initYTPlayers();
        } else {
            window.onYouTubeIframeAPIReady = initYTPlayers;
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
    }
});
