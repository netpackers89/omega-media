import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Sun, Moon, Menu, X, Globe } from 'lucide-react';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);

    // Initialize theme from HTML element class
    const isLight = document.documentElement.classList.contains('light');
    setTheme(isLight ? 'light' : 'dark');

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    
    if (nextTheme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
    
    // Update color-scheme meta tag for native browser components
    const metaColorScheme = document.querySelector('meta[name="color-scheme"]');
    if (metaColorScheme) {
      metaColorScheme.content = nextTheme;
    }
  };

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'am' : 'en';
    i18n.changeLanguage(nextLang);
    localStorage.setItem('lng', nextLang);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center no-transition ${
      scrolled 
        ? 'glass-header border-b border-brand-border py-3' 
        : 'bg-transparent'
    }`}>
      {/* Logo */}
      <a href="#home" className="flex items-center gap-3 group" data-cursor="pointer">
        <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center font-bold text-xl text-black bg-gold-gradient shadow-md transition-transform group-hover:scale-105 duration-300">
          Ω
        </div>
        <span className="text-xl font-bold tracking-wider text-brand-text font-serif">
          OMEGA <span className="text-gold">MEDIA</span>
        </span>
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {['home', 'services', 'portfolio', 'about', 'packages', 'contact'].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="text-sm font-medium tracking-wide text-brand-text hover:text-gold transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold hover:after:w-full after:transition-all after:duration-300"
            data-cursor="pointer"
          >
            {t(`nav.${item}`)}
          </a>
        ))}
      </nav>

      {/* Action Switches */}
      <div className="hidden md:flex items-center gap-4">
        {/* Language Switcher */}
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-brand-border hover:border-gold hover:text-gold transition-all duration-300 text-xs font-semibold text-brand-text bg-brand-card/30"
          title="Toggle Language"
          data-cursor="pointer"
        >
          <Globe size={13} className="text-gold" />
          <span>{i18n.language === 'en' ? 'አማርኛ' : 'English'}</span>
        </button>

        {/* Theme Switcher */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full border border-brand-border hover:border-gold hover:text-gold text-brand-text bg-brand-card/30 transition-all duration-300"
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          data-cursor="pointer"
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>

      {/* Mobile Menu Actions & Toggle Button */}
      <div className="flex md:hidden items-center gap-3">
        {/* Language toggle for mobile */}
        <button
          onClick={toggleLanguage}
          className="p-2 rounded-full border border-brand-border text-brand-text bg-brand-card/30"
          data-cursor="pointer"
        >
          <Globe size={16} className="text-gold" />
        </button>

        {/* Theme toggle for mobile */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full border border-brand-border text-brand-text bg-brand-card/30"
          data-cursor="pointer"
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        {/* Menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-full border border-brand-border text-brand-text bg-brand-card/30"
          data-cursor="pointer"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-brand-card border-b border-brand-border p-6 flex flex-col gap-4 shadow-2xl md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          {['home', 'services', 'portfolio', 'about', 'packages', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium py-2 text-brand-text hover:text-gold border-b border-brand-border/40 transition-colors"
            >
              {t(`nav.${item}`)}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;