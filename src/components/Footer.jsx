import React, { useState, useEffect } from 'react';
import logoFooter from '../assets/logo_footer.png';

export default function Footer({ onNavigate }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, pageId, sectionId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(pageId, sectionId);
    }
  };

  return (
    <>
      <div id="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <img src={logoFooter} alt="Africa Energy Bank" className="footer-logo-img" />
              <p>
                Africa's premier supranational development finance institution dedicated to powering sustainable energy infrastructure across 54 African nations.
              </p>
            </div>

            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#about" onClick={(e) => handleNavClick(e, 'about', null)}>
                    About AEB
                  </a>
                </li>
                <li>
                  <a href="#pillars" onClick={(e) => handleNavClick(e, 'home', 'pillars')}>
                    Strategic Pillars
                  </a>
                </li>
                <li>
                  <a href="#impact" onClick={(e) => handleNavClick(e, 'home', 'impact')}>
                    Development Impact
                  </a>
                </li>
                <li>
                  <a href="#projects" onClick={(e) => handleNavClick(e, 'home', 'projects')}>
                    Featured Projects
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Engagement</h4>
              <ul>
                <li>
                  <a href="#contact" onClick={(e) => handleNavClick(e, 'contact', null)}>
                    Clean Energy Credit
                  </a>
                </li>
                <li>
                  <a href="#careers" onClick={(e) => handleNavClick(e, 'careers', null)}>
                    Careers &amp; Talent Pool
                  </a>
                </li>
                <li>
                  <a href="#media" onClick={(e) => handleNavClick(e, 'media', null)}>
                    Press &amp; Media Kit
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={(e) => handleNavClick(e, 'contact', null)}>
                    Supranational Advisory
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Governance &amp; Hubs</h4>
              <ul>
                <li>
                  <a href="#contact" onClick={(e) => handleNavClick(e, 'contact', null)}>
                    Abuja Headquarters
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={(e) => handleNavClick(e, 'contact', null)}>
                    Yaoundé Directorate
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={(e) => handleNavClick(e, 'contact', null)}>
                    Cairo Trade Desk
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={(e) => handleNavClick(e, 'contact', null)}>
                    Nairobi Energy Hub
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="glass-card-bottom">
            <div className="giant-footer-title">AFRICA ENERGY BANK</div>
            <div className="glass-card-meta">
              <div className="footer-powered-by">
                <span>Backed By</span>
                <span className="pby-brand">APPO &amp; Afreximbank</span>
              </div>
              <div className="footer-legal">
                <a href="#hero">Privacy Policy</a>
                <a href="#hero">Terms of Use</a>
                <a href="#hero">Safeguards</a>
              </div>
            </div>
          </div>

          <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'rgba(255,255,255,.3)', marginTop: '24px' }}>
            © 2026 Africa Energy Bank. All rights reserved. Supranational Institution of APPO &amp; Member States.
          </p>
        </div>
      </footer>
    </>
  );
}
