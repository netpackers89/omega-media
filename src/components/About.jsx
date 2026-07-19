import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const About = () => {
  const { t } = useTranslation();

  const stats = [
    { number: '50+', labelKey: 'stats.projects' },
    { number: '49+', labelKey: 'stats.clients' },
    { number: '1+', labelKey: 'stats.experience' }
  ];

  return (
    <section className="py-24 px-6 bg-brand-bg/40 relative border-t border-brand-border" id="about">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-radial from-gold/3 to-transparent blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-bold text-gold tracking-widest uppercase"
            >
              {t('nav.about')}
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold tracking-tight font-serif text-brand-text leading-tight"
            >
              {t('about.title')}
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-4 text-brand-text-muted text-sm md:text-base leading-relaxed"
            >
              <p>{t('about.desc1')}</p>
              <p>{t('about.desc2')}</p>
            </motion.div>
          </div>

          {/* Stats Cards Display */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', delay: index * 0.15, stiffness: 100 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="glass-card p-6 rounded-2xl border border-brand-border flex items-center justify-between shadow-md"
              >
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-bold text-brand-text-muted uppercase tracking-wider">
                    {t(`about.${stat.labelKey}`)}
                  </span>
                </div>
                <div className="text-4xl md:text-5xl font-extrabold text-gold-gradient font-serif tracking-tight">
                  {stat.number}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
