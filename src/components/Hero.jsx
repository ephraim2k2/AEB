import React from 'react';
import { ArrowRight, Play, Flame, Zap, Globe, TrendingUp, Database, Users, Clock } from 'lucide-react';
import heroBg from '../assets/hero_landing_bg.jpg';

export default function Hero({ onNavigate }) {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('home', targetId);
    }
  };

  return (
    <section className="section--hero" id="hero">
      {/* Full-coverage background image fading on the left */}
      <div className="hero-bg-wrapper">
        <img
          src={heroBg}
          alt="African Renewable Energy Infrastructure"
          className="hero-bg-img"
        />
        <div className="hero-bg-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Content Column */}
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="line line--dark">Powering</span>
              <span className="line line--green">Africa's Future</span>
            </h1>
            <div className="hero-title-underline"></div>

            <p className="hero-subtitle">
              Established by APPO and Afreximbank with $5 Billion initial capital to finance Africa's oil, gas, and renewable energy transition.
            </p>

            <div className="hero-actions">
              <button onClick={() => onNavigate ? onNavigate('contact') : null} className="btn--pill-primary hero-btn-main">
                <span>Apply for Financing</span>
                <div className="btn-circle-icon">
                  <ArrowRight size={14} color="#ffffff" />
                </div>
              </button>

              <button onClick={() => onNavigate ? onNavigate('about') : null} className="btn--pill-secondary">
                <div className="btn-circle-icon-sec">
                  <Play size={12} color="#0f172a" style={{ marginLeft: '2px' }} />
                </div>
                <span>Learn More</span>
              </button>
            </div>
          </div>

          {/* Right Floating White Features Card */}
          <div className="hero-visual">
            <div className="hero-features-card">
              <div className="hero-feature">
                <div className="hf-icon">
                  <Flame size={20} color="#047857" />
                </div>
                <div className="hf-body">
                  <h4>Oil &amp; Gas Infrastructure</h4>
                  <p>Exploration, refining, pipelines &amp; midstream energy assets</p>
                </div>
                <a href="#pillars" onClick={(e) => handleNavClick(e, 'pillars')} className="hf-arrow" aria-label="Explore Oil &amp; Gas">
                  <ArrowRight size={14} color="#047857" />
                </a>
              </div>

              <div className="hero-feature">
                <div className="hf-icon">
                  <Zap size={20} color="#047857" />
                </div>
                <div className="hf-body">
                  <h4>Clean Energy Transition</h4>
                  <p>Solar, wind, hydro &amp; green hydrogen project capital</p>
                </div>
                <a href="#pillars" onClick={(e) => handleNavClick(e, 'pillars')} className="hf-arrow" aria-label="Explore Clean Energy">
                  <ArrowRight size={14} color="#047857" />
                </a>
              </div>

              <div className="hero-feature">
                <div className="hf-icon">
                  <Globe size={20} color="#047857" />
                </div>
                <div className="hf-body">
                  <h4>Intra-African Trade</h4>
                  <p>Financing regional energy commerce &amp; power interconnections</p>
                </div>
                <a href="#pillars" onClick={(e) => handleNavClick(e, 'pillars')} className="hf-arrow" aria-label="Explore Trade">
                  <ArrowRight size={14} color="#047857" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Dark Green Stats Card */}
        <div className="hero-stats-card">
          <div className="hero-stats-grid">
            <div className="hstat">
              <div className="hstat-badge">
                <TrendingUp size={22} color="#34d399" />
              </div>
              <div className="hstat-body">
                <span className="hstat-num">$5B</span>
                <span className="hstat-label">Initial Share Capital</span>
                <span className="hstat-sub">APPO &amp; Afreximbank backed</span>
              </div>
            </div>

            <div className="hstat">
              <div className="hstat-badge">
                <Database size={22} color="#34d399" />
              </div>
              <div className="hstat-body">
                <span className="hstat-num">125B</span>
                <span className="hstat-label">Barrels Oil Reserves</span>
                <span className="hstat-sub">&amp; 650 TCF Natural Gas</span>
              </div>
            </div>

            <div className="hstat">
              <div className="hstat-badge">
                <Users size={22} color="#34d399" />
              </div>
              <div className="hstat-body">
                <span className="hstat-num">620M</span>
                <span className="hstat-label">People Access Target</span>
                <span className="hstat-sub">Solving energy poverty</span>
              </div>
            </div>

            <div className="hstat">
              <div className="hstat-badge">
                <Clock size={22} color="#34d399" />
              </div>
              <div className="hstat-body">
                <span className="hstat-num">3×</span>
                <span className="hstat-label">Faster Execution</span>
                <span className="hstat-sub">Independent supranational DFI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
