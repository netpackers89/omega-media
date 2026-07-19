import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowDown } from 'lucide-react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const { t } = useTranslation();
  const heroRef = useRef(null);
  const parallaxBgRef = useRef(null);

  useGSAP(() => {
    // Parallax background effect
    gsap.to(parallaxBgRef.current, {
      yPercent: 25,
      scale: 1.1,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

  }, { scope: heroRef });

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-bg px-6 py-24"
      id="home"
    >
      {/* Dynamic Parallax Background */}
      <div 
        ref={parallaxBgRef} 
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden no-transition"
      >
        {/* Glowing Orbs (Hardware-accelerated with optimized blur filters) */}
        <div className="absolute top-1/4 right-[-10%] w-[600px] h-[600px] rounded-full bg-radial from-gold/10 to-transparent blur-[50px] dark:from-gold/5 transform-gpu" />
        <div className="absolute bottom-1/10 left-[-10%] w-[500px] h-[500px] rounded-full bg-radial from-gold-dark/10 to-transparent blur-[60px] dark:from-gold-dark/5 transform-gpu" />
        
        {/* Subtle Cyber Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(var(--brand-text) 1px, transparent 1px), 
                             linear-gradient(90deg, var(--brand-text) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-4xl text-center flex flex-col items-center gap-6 transform-gpu will-change-[transform,opacity]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs md:text-sm font-semibold tracking-wider uppercase glow-gold"
        >
          {t('hero.badge')}
        </motion.div>

        {/* H1 Heading */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-7xl font-extrabold tracking-tight leading-[1.1] font-serif text-brand-text"
        >
          {t('hero.titlePart1')}<br />
          <span className="text-gold-gradient font-bold">{t('hero.titlePart2')}</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-2xl text-brand-text-muted italic tracking-wide mt-2"
        >
          {t('hero.tagline')}
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 mt-6"
        >
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold-gradient text-black font-bold tracking-wide shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center glow-gold-hover"
            data-cursor="pointer"
          >
            {t('hero.viewWork')}
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-gold text-gold font-bold tracking-wide hover:bg-gold hover:text-black transition-all duration-300 flex items-center justify-center"
            data-cursor="pointer"
          >
            {t('hero.getInTouch')}
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-brand-text-muted"
        >
          <span className="text-xs uppercase tracking-widest font-semibold">{t('nav.services')}</span>
          <ArrowDown size={14} className="text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;