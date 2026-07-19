import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check, Gem, Star, Clapperboard, Calendar, Video, ListChecks, Building2, ChevronDown, ChevronUp } from 'lucide-react';

const Pricing = () => {
  const { t } = useTranslation();
  const [termsOpen, setTermsOpen] = useState(false);

  const packages = [
    {
      id: '01',
      icon: Gem,
      key: 'premium',
      featured: true,
      price: '25,000',
      delivery: '3 Videos per week',
      total: '12 Videos per month',
      features: [
        'Professional Video Shooting',
        'High Quality Editing',
        'Color Grading',
        'Background Music',
        'Text & Graphics',
        '1 Revision per Video',
      ],
    },
    {
      id: '02',
      icon: Star,
      key: 'standard',
      featured: false,
      price: '16,700',
      delivery: '2 Videos per week',
      total: '8 Videos per month',
      features: [
        'Professional Video Shooting',
        'High Quality Editing',
        'Color Grading',
        'Background Music',
        'Text & Graphics',
        '1 Revision per Video',
      ],
    },
    {
      id: '03',
      icon: Clapperboard,
      key: 'single',
      featured: false,
      price: '5,000',
      delivery: '1 Professionally Edited Video',
      total: null,
      features: [
        'Professional Video Shooting',
        'High Quality Editing',
        'Color Grading',
        'Background Music',
        'Text & Graphics',
        '1 Revision',
      ],
    },
  ];

  const whyUs = [
    { icon: '🏆', title: 'High Quality Production', desc: 'Cinematic and professional results.' },
    { icon: '🎬', title: 'Creative Storytelling', desc: "Engaging content that connects with your audience." },
    { icon: '⏱️', title: 'On-Time Delivery', desc: 'We respect your time and deliver on schedule.' },
    { icon: '🤝', title: 'Client Focused Approach', desc: 'We work closely with you to bring your vision to life.' },
    { icon: '📈', title: 'Strong Brand Impact', desc: 'Videos that build trust and grow your brand.' },
  ];

  const terms = [
    'Payment should be made in advance.',
    'Revisions are limited as stated in each package.',
    'Additional revisions will be charged separately.',
    'Raw footage is not included.',
    'Prices are subject to change without prior notice.',
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 16, delay: i * 0.12 },
    }),
  };

  return (
    <section className="py-24 px-6 bg-brand-bg relative border-t border-brand-border" id="pricing">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-radial from-gold/6 to-transparent blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-gold tracking-widest uppercase"
          >
            {t('pricing.badge')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold tracking-tight font-serif mt-3 mb-4 text-brand-text"
          >
            {t('pricing.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-text-muted text-base md:text-lg max-w-xl mx-auto"
          >
            {t('pricing.subtitle')}
          </motion.p>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {packages.map((pkg, i) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={pkg.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className={`relative rounded-2xl p-8 flex flex-col gap-5 border transition-shadow duration-300 ${
                  pkg.featured
                    ? 'bg-gradient-to-b from-neutral-900 to-neutral-950 border-gold/60 shadow-xl shadow-gold/10 ring-1 ring-gold/30'
                    : 'glass-card border-brand-border hover:border-gold/30'
                }`}
              >
                {/* Featured Badge */}
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-gold-gradient text-black text-[10px] font-black tracking-widest uppercase rounded-full shadow-lg whitespace-nowrap">
                    ⭐ Most Popular
                  </div>
                )}

                {/* Package number + icon */}
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black text-gold/20 font-serif leading-none">{pkg.id}</span>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    pkg.featured ? 'bg-gold text-black' : 'bg-gold/10 text-gold'
                  }`}>
                    <Icon size={22} />
                  </div>
                </div>

                {/* Title */}
                <div>
                  <p className="text-xs font-bold text-brand-text-muted uppercase tracking-widest">
                    {t(`pricing.${pkg.key}.label`)}
                  </p>
                  <h3 className={`text-2xl font-bold font-serif mt-0.5 ${pkg.featured ? 'text-gold' : 'text-brand-text'}`}>
                    {t(`pricing.${pkg.key}.name`)}
                  </h3>
                </div>

                {/* Price */}
                <div className="flex items-end gap-1 border-t border-brand-border/40 pt-5">
                  <span className="text-4xl md:text-5xl font-black text-gold-gradient font-serif leading-none">
                    {pkg.price}
                  </span>
                  <span className="text-sm font-bold text-brand-text-muted mb-1 ml-1">ETB</span>
                </div>

                {/* Delivery & Total */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-start gap-2 text-sm text-brand-text-muted">
                    <Calendar size={14} className="text-gold mt-0.5 shrink-0" />
                    <span><span className="font-semibold text-brand-text">Delivery:</span> {pkg.delivery}</span>
                  </div>
                  {pkg.total && (
                    <div className="flex items-start gap-2 text-sm text-brand-text-muted">
                      <Video size={14} className="text-gold mt-0.5 shrink-0" />
                      <span><span className="font-semibold text-brand-text">Total:</span> {pkg.total}</span>
                    </div>
                  )}
                </div>

                {/* Feature List */}
                <div className="flex flex-col gap-2 border-t border-brand-border/40 pt-4">
                  <div className="flex items-center gap-1.5 mb-1">
                    <ListChecks size={13} className="text-gold" />
                    <span className="text-[10px] font-bold text-brand-text-muted uppercase tracking-wider">Includes</span>
                  </div>
                  {pkg.features.map((feat, fi) => (
                    <div key={fi} className="flex items-center gap-2.5 text-sm text-brand-text">
                      <div className="w-4 h-4 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                        <Check size={10} className="text-gold" strokeWidth={3} />
                      </div>
                      {feat}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`mt-auto w-full py-3.5 rounded-xl text-sm font-bold tracking-wide text-center transition-all duration-300 ${
                    pkg.featured
                      ? 'bg-gold-gradient text-black hover:scale-[1.02] shadow-lg shadow-gold/20'
                      : 'border border-gold/40 text-gold hover:bg-gold hover:text-black'
                  }`}
                  data-cursor="pointer"
                >
                  {t('pricing.cta')}
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Why Choose Omega */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl border border-brand-border p-8 mb-8"
        >
          <h3 className="text-center text-lg font-bold font-serif text-brand-text mb-6">
            Why Choose <span className="text-gold">Omega</span> Production?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {whyUs.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2">
                <span className="text-2xl">{item.icon}</span>
                <p className="text-xs font-bold text-brand-text uppercase tracking-wide leading-tight">{item.title}</p>
                <p className="text-[11px] text-brand-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Terms & Payment row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Terms & Conditions (collapsible) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl border border-brand-border p-6"
          >
            <button
              onClick={() => setTermsOpen(!termsOpen)}
              className="w-full flex items-center justify-between group"
              data-cursor="pointer"
            >
              <h4 className="text-sm font-bold text-brand-text uppercase tracking-widest group-hover:text-gold transition-colors">
                Terms & Conditions
              </h4>
              {termsOpen ? <ChevronUp size={16} className="text-gold" /> : <ChevronDown size={16} className="text-gold" />}
            </button>

            {termsOpen && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-4 flex flex-col gap-2"
              >
                {terms.map((term, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-brand-text-muted">
                    <Check size={12} className="text-gold mt-0.5 shrink-0" strokeWidth={3} />
                    {term}
                  </li>
                ))}
              </motion.ul>
            )}
          </motion.div>

          {/* Payment Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl border border-brand-border p-6 flex flex-col gap-4"
          >
            <div className="flex items-center gap-2">
              <Building2 size={16} className="text-gold" />
              <h4 className="text-sm font-bold text-brand-text uppercase tracking-widest">Payment Information</h4>
            </div>

            <div className="flex flex-col gap-2.5 text-sm">
              {[
                ['Bank Name', 'Commercial Bank of Ethiopia'],
                ['Account Name', 'Omega Media'],
                ['Account Number', '1000571619648'],
                ['Branch', 'Main Branch'],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between border-b border-brand-border/30 pb-2">
                  <span className="text-brand-text-muted text-xs font-semibold uppercase tracking-wide">{label}</span>
                  <span className="text-brand-text font-bold text-xs">{value}</span>
                </div>
              ))}
            </div>

            <div className="mt-1 px-4 py-2 bg-gold/10 border border-gold/25 rounded-xl text-center">
              <span className="text-xs font-bold text-gold tracking-wider">All payments are in ETB</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
