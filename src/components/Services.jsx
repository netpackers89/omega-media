import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Film, Tv, Share2, Mic, Lightbulb, Scissors, TrendingUp, Code } from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Film,
      key: 'videoProduction',
    },
    {
      icon: Tv,
      key: 'commercials',
    },
    {
      icon: Share2,
      key: 'socialMedia',
    },
    {
      icon: Mic,
      key: 'soundRecording',
    },
    {
      icon: Lightbulb,
      key: 'lightingSetup',
    },
    {
      icon: Scissors,
      key: 'videoEditing',
    },
    {
      icon: TrendingUp,
      key: 'digitalMarketing',
    },
    {
      icon: Code,
      key: 'webDev',
    }
  ];

  // Framer Motion layout animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 16,
      },
    },
  };

  return (
    <section className="relative py-24 px-6 bg-brand-bg/50 border-t border-brand-border" id="services">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-radial from-gold/3 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold tracking-tight font-serif mb-4 text-brand-text"
          >
            {t('services.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-text-muted text-base md:text-lg max-w-2xl mx-auto"
          >
            {t('services.subtitle')}
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card p-8 rounded-2xl flex flex-col items-start gap-4 transition-shadow hover:shadow-xl hover:shadow-gold/5 group relative overflow-hidden"
                data-cursor="view"
              >
                {/* Hover border glow */}
                <div className="absolute inset-0 border border-transparent group-hover:border-gold/30 rounded-2xl pointer-events-none transition-colors duration-300" />
                
                {/* Glowing effect inside card */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-bold font-serif text-brand-text mt-2 group-hover:text-gold transition-colors">
                  {t(`services.${service.key}.title`)}
                </h3>
                
                <p className="text-brand-text-muted text-sm leading-relaxed">
                  {t(`services.${service.key}.desc`)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;