import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

const InstagramIcon = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);


const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock send form
    if (formData.name && formData.email && formData.message) {
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // QR Code value: Email link with default subject
  const qrCodeValue = "mailto:omegamedia.et@gmail.com?subject=Project%20Inquiry%20-%20Omega%20Media";

  return (
    <section className="py-24 px-6 bg-brand-bg relative border-t border-brand-border" id="contact">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-radial from-gold/5 to-transparent blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold tracking-tight font-serif mb-4 text-brand-text"
          >
            {t('contact.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-text-muted text-base md:text-lg max-w-2xl mx-auto"
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details & QR Code */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone card */}
              <motion.div 
                whileHover={{ y: -3 }}
                className="glass-card p-6 rounded-2xl border border-brand-border flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold text-brand-text-muted">{t('contact.phone')}</span>
                  <a href="tel:0905073573" className="text-sm font-bold text-brand-text hover:text-gold transition-colors">0905073573</a>
                </div>
              </motion.div>

              {/* Email card */}
              <motion.div 
                whileHover={{ y: -3 }}
                className="glass-card p-6 rounded-2xl border border-brand-border flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col gap-0.5 overflow-hidden">
                  <span className="text-xs font-semibold text-brand-text-muted">{t('contact.email')}</span>
                  <a href="mailto:omegamedia.et@gmail.com" className="text-sm font-bold text-brand-text hover:text-gold transition-colors truncate">omegamedia.et@gmail.com</a>
                </div>
              </motion.div>

              {/* Location card */}
              <motion.div 
                whileHover={{ y: -3 }}
                className="glass-card p-6 rounded-2xl border border-brand-border flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold text-brand-text-muted">{t('contact.location')}</span>
                  <span className="text-sm font-bold text-brand-text">Ethiopia</span>
                </div>
              </motion.div>

              {/* Social card */}
              <motion.div 
                whileHover={{ y: -3 }}
                className="glass-card p-6 rounded-2xl border border-brand-border flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center shrink-0">
                  <InstagramIcon size={18} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold text-brand-text-muted">{t('contact.social')}</span>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-brand-text hover:text-gold transition-colors">@omega_media.et</a>
                </div>
              </motion.div>
            </div>

            {/* Premium QR Code Display Area */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-2xl border border-brand-border flex flex-col sm:flex-row items-center gap-6 shadow-lg relative overflow-hidden"
            >
              <div className="p-3 bg-white rounded-xl shadow-md flex items-center justify-center select-none">
                <QRCodeSVG
                  value={qrCodeValue}
                  size={120}
                  level="M"
                  bgColor="#ffffff"
                  fgColor="#000000"
                  includeMargin={false}
                />
              </div>
              <div className="flex flex-col text-center sm:text-left gap-1">
                <h4 className="text-base font-bold font-serif text-brand-text">
                  {t('contact.qrTitle')}
                </h4>
                <p className="text-xs text-brand-text-muted leading-relaxed">
                  {t('contact.qrDesc')}
                </p>
                <span className="text-xs font-bold text-gold mt-2">
                  omegamedia.et@gmail.com
                </span>
              </div>
            </motion.div>
          </div>

          {/* Contact Input Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-8 rounded-2xl border border-brand-border"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-brand-text-muted" htmlFor="name">
                    {t('contact.formName')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-brand-bg/50 border border-brand-border focus:border-gold rounded-xl px-4 py-3 text-sm text-brand-text outline-none transition-colors"
                    data-cursor="pointer"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-brand-text-muted" htmlFor="email">
                    {t('contact.formEmail')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-brand-bg/50 border border-brand-border focus:border-gold rounded-xl px-4 py-3 text-sm text-brand-text outline-none transition-colors"
                    data-cursor="pointer"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-text-muted" htmlFor="message">
                  {t('contact.formMessage')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-brand-bg/50 border border-brand-border focus:border-gold rounded-xl px-4 py-3 text-sm text-brand-text outline-none transition-colors resize-none"
                  data-cursor="pointer"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full sm:w-auto self-start px-8 py-3.5 rounded-xl bg-gold-gradient text-black font-bold tracking-wider hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center gap-2 shadow-lg shadow-gold/10"
                data-cursor="pointer"
              >
                <span>{t('contact.formSubmit')}</span>
                <Send size={15} />
              </button>

              {/* Success Notification */}
              {isSent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl text-center text-sm font-semibold"
                >
                  {t('contact.successMsg')}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;