import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const VideoCard = ({ title, category, youtubeId, onClick }) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

  return (
    <motion.div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="glass-card rounded-2xl overflow-hidden group cursor-pointer border border-brand-border hover:border-gold/45 transition-all duration-300 relative"
      whileHover={{ y: -5 }}
      data-cursor="play"
    >
      {/* Dynamic Hover Autoplay Video Container */}
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-brand-bg select-none">
        
        {/* Default Thumbnail */}
        <img 
          src={thumbnailUrl} 
          alt={title}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
          }`}
        />

        {/* Hover YouTube iframe autoplay (muted) */}
        {isHovered && (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${youtubeId}&playsinline=1`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="absolute inset-0 w-full h-[105%] object-cover pointer-events-none scale-105"
          />
        )}
        
        {/* Dim overlay that fades out on hover */}
        <div className={`absolute inset-0 bg-black/45 transition-opacity duration-300 flex items-center justify-center pointer-events-none ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`} />

        {/* Hover Center Play Button (shrinks when hovered) */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gold/90 text-black flex items-center justify-center shadow-lg transition-all duration-300 bg-gold-gradient pointer-events-none z-10 ${
          isHovered ? 'scale-0 opacity-0' : 'scale-90 opacity-100 group-hover:scale-100'
        }`}>
          <Play size={24} className="fill-black ml-1" />
        </div>
      </div>

      {/* Info Section */}
      <div className="p-5 flex flex-col gap-1.5 bg-brand-card/95 relative z-20">
        <span className="text-xs font-bold text-gold tracking-widest uppercase">
          {category}
        </span>
        <h3 className="text-lg font-bold font-serif text-brand-text group-hover:text-gold transition-colors duration-300">
          {title}
        </h3>
        <span className="text-xs text-brand-text-muted mt-1 flex items-center gap-1 group-hover:text-brand-text transition-colors">
          {t('portfolio.viewProject')} →
        </span>
      </div>
    </motion.div>
  );
};

export default VideoCard;
