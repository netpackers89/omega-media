import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-brand-card/90 py-8 px-6 text-center border-t border-brand-border/40 relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-brand-text-muted">
        <p>
          &copy; {currentYear} <span className="text-gold font-bold">Omega Media</span>. {t('footer.rights')}
        </p>
        <p className="italic tracking-wider text-gold/80">
          {t('hero.tagline')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;