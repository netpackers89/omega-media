import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import VideoCard from './VideoCard';

const Portfolio = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = [
    { id: 'all', label: t('portfolio.all') },
    { id: 'advertisement', label: t('portfolio.advertisement') },
    { id: 'business', label: t('portfolio.business') },
    { id: 'entertainment', label: t('portfolio.entertainment') },
    { id: 'marketing', label: t('portfolio.marketing') },
    { id: 'digital', label: t('portfolio.digital') }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Afri Ads Promo',
      category: 'advertisement',
      videoUrl: '/assets/videos/Afri2.mp4'
    },
    {
      id: 2,
      title: 'Afri Campaign Part I',
      category: 'advertisement',
      videoUrl: '/assets/videos/afri 1.mp4'
    },
    {
      id: 3,
      title: 'Afri Herbal Tea Commercial',
      category: 'advertisement',
      videoUrl: '/assets/videos/afriherbal 3.mp4'
    },
    {
      id: 4,
      title: 'Milo Creative Cut',
      category: 'marketing',
      videoUrl: '/assets/videos/final milo 1.3.mp4'
    },
    {
      id: 5,
      title: 'Milo Campaign Edition',
      category: 'marketing',
      videoUrl: '/assets/videos/final milo 2.4.mp4'
    },
    {
      id: 6,
      title: 'Omega Agency Showreel',
      category: 'business',
      videoUrl: '/assets/videos/FINAL 2_4_2.mp4'
    },
    {
      id: 7,
      title: 'Creative Frame 6',
      category: 'entertainment',
      videoUrl: '/assets/videos/6.mov'
    },
    {
      id: 8,
      title: 'Social Vlog Session',
      category: 'digital',
      videoUrl: '/assets/videos/VID_20260429_094833.mp4'
    },
    {
      id: 9,
      title: 'Behind The Scenes Vlog',
      category: 'digital',
      videoUrl: '/assets/videos/VID_20260605_194551.mp4'
    },
    {
      id: 10,
      title: 'Insta Reel Snippet A',
      category: 'digital',
      videoUrl: '/assets/videos/VID_20260710_161603.mp4'
    },
    {
      id: 11,
      title: 'Insta Reel Snippet B',
      category: 'digital',
      videoUrl: '/assets/videos/VID_20260710_161740.mp4'
    },
    {
      id: 12,
      title: 'Insta Reel Snippet C',
      category: 'digital',
      videoUrl: '/assets/videos/VID_20260710_161745.mp4'
    }
  ];

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-24 px-6 bg-brand-bg relative border-t border-brand-border" id="portfolio">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold tracking-tight font-serif mb-4 text-brand-text"
          >
            {t('portfolio.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-text-muted text-base md:text-lg max-w-2xl mx-auto"
          >
            {t('portfolio.subtitle')}
          </motion.p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 border ${
                activeFilter === cat.id
                  ? 'bg-gold text-black border-gold shadow-md shadow-gold/25'
                  : 'bg-brand-card/35 text-brand-text border-brand-border hover:border-gold/50'
              }`}
              data-cursor="pointer"
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <VideoCard
                  title={item.title}
                  category={t(`portfolio.${item.category}`)}
                  videoUrl={item.videoUrl}
                  onClick={() => setSelectedVideo(item)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Immersive Smartphone Video Player Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-[99999] flex items-center justify-center p-4 md:p-8 overflow-hidden"
          >
            {/* Ambient Blurred Video Background */}
            <div className="absolute inset-0 z-0 overflow-hidden opacity-20 filter blur-3xl scale-125 pointer-events-none select-none">
              <video
                src={selectedVideo.videoUrl}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Backdrop click to dismiss */}
            <div 
              className="absolute inset-0 z-10 cursor-pointer" 
              onClick={() => setSelectedVideo(null)} 
            />

            {/* Smart Phone Device Mockup Container */}
            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative z-20 w-full max-w-[340px] h-[82vh] max-h-[680px] bg-black rounded-[42px] border-[6px] border-neutral-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col items-center justify-center outline-none ring-4 ring-gold/20 ring-offset-4 ring-offset-black"
            >
              {/* Notch / Speaker Ear Piece Mockup */}
              <div className="absolute top-3 w-28 h-4.5 bg-neutral-800 rounded-full z-35 flex items-center justify-center gap-1.5 shadow-inner">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                <div className="w-8 h-0.5 bg-neutral-950 rounded-full" />
              </div>

              {/* Mobile Screen Area */}
              <div className="w-full h-full rounded-[36px] overflow-hidden relative flex items-center justify-center bg-neutral-950">
                <video
                  src={selectedVideo.videoUrl}
                  autoPlay
                  controls
                  className="w-full h-full object-cover"
                  playsInline
                />

                {/* Close Button Inside Screen */}
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-10 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-gold hover:text-black transition-colors z-30 shadow-md border border-white/10"
                  data-cursor="pointer"
                >
                  <X size={15} />
                </button>

                {/* Bottom Swipe Home Bar Mockup */}
                <div className="absolute bottom-2 w-24 h-1 bg-white/30 rounded-full z-30 pointer-events-none" />

                {/* Title Overlay bar */}
                <div className="absolute bottom-6 left-0 w-full p-4 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex flex-col gap-0.5 text-white select-none pointer-events-none z-20">
                  <span className="text-[10px] font-bold text-gold tracking-widest uppercase">
                    {t(`portfolio.${selectedVideo.category}`)}
                  </span>
                  <h4 className="text-xs md:text-sm font-bold font-serif">
                    {selectedVideo.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;