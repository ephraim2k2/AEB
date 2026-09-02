import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Pillars from './components/Pillars';
import Impact from './components/Impact';
import ProjectSlider from './components/ProjectSlider';
import Gallery from './components/Gallery';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Individual Dedicated Pages
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import MediaPage from './pages/MediaPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';

// GSAP Animations
import { useGsapReveal } from './utils/useGsapReveal';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Trigger GSAP ScrollTrigger Animations across all sections and pages
  useGsapReveal(currentPage);

  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  const handleNavigate = (pageId, sectionId) => {
    setCurrentPage(pageId);

    if (pageId === 'home' && sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const yOffset = -90;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 50);
    }
  };

  return (
    <div className="app-root">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main>
        {currentPage === 'home' && (
          <>
            <Hero onNavigate={handleNavigate} />
            <About onNavigate={handleNavigate} />
            <Pillars />
            <Impact />
            <ProjectSlider />
            <Gallery onNavigate={handleNavigate} />
            <Partners />
            <Contact />
          </>
        )}

        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'gallery' && <GalleryPage onNavigate={handleNavigate} />}
        {currentPage === 'careers' && <CareersPage />}
        {currentPage === 'media' && <MediaPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
