import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Gem, Star, Video, Award, Clapperboard, Clock, Users, TrendingUp, CheckCircle, Building2 } from 'lucide-react';

const Packages = () => {
  const { t } = useTranslation();

  const packages = [
    {
      id: '01',
      nameKey: 'premium',
      price: '25,000 ETB',
      icon: Gem,
      highlight: true
    },
    {
      id: '02',
      nameKey: 'standard',
      price: '16,700 ETB',
      icon: Star,
      highlight: false
    },
    {
      id: '03',
      nameKey: 'single',
      price: '5,000 ETB',
      icon: Video,
      highlight: false
    }
  ];

  const reasons = [
    { icon: Award, key: 'highQuality' },
    { icon: Clapperboard, key: 'creative' },
    { icon: Clock, key: 'onTime' },
    { icon: Users, key: 'client' },
    { icon: TrendingUp, key: 'impact' }
  ];

  // Framer Motion layout animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 16 } }
  };

  return (
    <section className="relative py-24 px-6 bg-brand-bg border-t border-brand-border" id="packages">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-brand-border/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="inline-block"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-serif mb-4 text-brand-text">
              {t('packages.title1')} <span className="text-gold-gradient">{t('packages.title2')}</span>
            </h2>
            <div className="h-1 w-24 bg-gold-gradient mx-auto mb-6 rounded-full" />
            <p className="text-lg md:text-2xl text-brand-text font-serif italic">
              {t('packages.subtitle')}
            </p>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            
            // Get features array dynamically based on language
            const features = t(`packages.${pkg.nameKey}.features`, { returnObjects: true }) || [];

            return (
              <motion.div
                key={pkg.id}
                variants={itemVariants}
                className={`glass-card rounded-3xl overflow-hidden relative group transition-all duration-300 ${pkg.highlight ? 'border-gold/50 shadow-[0_0_30px_rgba(212,175,55,0.15)] md:-translate-y-4' : 'hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5'}`}
                data-cursor="view"
              >
                {/* Top Number */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-brand-bg border border-brand-border px-6 py-2 rounded-b-xl">
                  <span className="text-2xl font-bold font-serif text-brand-text">{pkg.id}</span>
                </div>

                <div className="p-8 pt-16 flex flex-col h-full">
                  <div className="text-center mb-8">
                    <h3 className="text-sm font-bold tracking-wider text-brand-text-muted mb-6 h-10 line-clamp-2">
                      {t(`packages.${pkg.nameKey}.name`)}
                    </h3>
                    
                    <div className="w-20 h-20 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={40} className="text-gold" />
                    </div>

                    <div className="text-3xl md:text-4xl font-bold font-serif text-brand-text mb-6">
                      {pkg.price}
                    </div>

                    <div className="space-y-3 bg-brand-card/50 py-4 px-6 rounded-xl border border-brand-border/50 text-left">
                      <div className="flex items-center gap-3">
                        <Clock size={18} className="text-gold flex-shrink-0" />
                        <div>
                          <span className="text-xs text-brand-text-muted block">{t('packages.delivery')}</span>
                          <span className="text-sm font-medium text-brand-text">{t(`packages.${pkg.nameKey}.delivery`)}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Video size={18} className="text-gold flex-shrink-0" />
                        <div>
                          <span className="text-xs text-brand-text-muted block">{t('packages.total')}</span>
                          <span className="text-sm font-medium text-brand-text">{t(`packages.${pkg.nameKey}.total`)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <h4 className="text-sm font-bold text-brand-text mb-4 flex items-center gap-2">
                      <span className="w-4 h-[1px] bg-gold"></span> {t('packages.includes')}
                    </h4>
                    <ul className="space-y-3">
                      {Array.isArray(features) && features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-brand-text-muted">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Why Choose Us */}
        <motion.div 
          className="mb-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-brand-card border border-brand-border px-8 py-3 rounded-full mb-12">
            <h3 className="text-lg font-bold font-serif text-brand-text">
              {t('packages.reasonsTitlePart1')}
              <span className="text-gold">{t('packages.reasonsTitleHighlight')}</span>
              {t('packages.reasonsTitlePart2')}
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 rounded-full bg-brand-card border border-brand-border flex items-center justify-center mb-4 text-gold">
                    <Icon size={28} />
                  </div>
                  <h4 className="text-sm font-bold text-brand-text mb-2">{t(`packages.reasons.${reason.key}.title`)}</h4>
                  <p className="text-xs text-brand-text-muted">{t(`packages.reasons.${reason.key}.desc`)}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Information */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Terms & Conditions */}
          <div className="lg:col-span-1 glass-card p-8 rounded-2xl">
            <h3 className="text-lg font-bold font-serif text-brand-text mb-6">{t('packages.termsTitle')}</h3>
            <ul className="space-y-4">
              {t('packages.terms', { returnObjects: true }).map((term, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-brand-text-muted">
                  <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
                  <span>{term}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Info & Branding */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 glass-card p-8 rounded-2xl">
            <div>
              <h3 className="text-lg font-bold font-serif text-brand-text mb-6">{t('packages.paymentTitle')}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-bg border border-brand-border flex items-center justify-center text-gold">
                    <Building2 size={20} />
                  </div>
                  <div className="space-y-1 text-sm">
                    <p><span className="text-brand-text-muted">{t('packages.bankName')}</span> <span className="font-medium">xxxx</span></p>
                    <p><span className="text-brand-text-muted">{t('packages.accountName')}</span> <span className="font-medium">xxxx</span></p>
                    <p><span className="text-brand-text-muted">{t('packages.accountNumber')}</span> <span className="font-medium">1000571619648</span></p>
                    <p><span className="text-brand-text-muted">{t('packages.branch')}</span> <span className="font-medium">xxxx</span></p>
                  </div>
                </div>
                <div className="inline-block bg-gold/10 border border-gold/20 text-gold px-4 py-2 rounded-lg text-sm font-medium mt-4">
                  {t('packages.currencyNote')}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center md:items-end text-center md:text-right border-t md:border-t-0 md:border-l border-brand-border pt-8 md:pt-0 md:pl-8">
              <div className="text-4xl font-serif text-brand-text font-bold flex items-center gap-2 mb-4">
                <span className="text-gold text-5xl">Ω</span>
                OMEGA
              </div>
              <div className="text-gold tracking-widest text-sm mb-6">PRODUCTION</div>
              <p className="font-serif italic text-xl text-brand-text-muted">
                {t('packages.slogan')}
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Packages;
