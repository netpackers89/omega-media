import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Packages from './components/Packages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

// Import translation initializer
import './i18n';

function App() {
  return (
    <div className="relative min-h-screen bg-brand-bg text-brand-text overflow-hidden antialiased">
      {/* Interactive Cursor Follower */}
      <CustomCursor />

      {/* App Structure */}
      <Header />
      
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Packages />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;