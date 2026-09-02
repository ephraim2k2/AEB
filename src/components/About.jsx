import React from 'react';
import { Calendar, ShieldCheck, Flame, Globe, ArrowRight, Play } from 'lucide-react';
import aboutImg from '../assets/gallery_wind.png';

export default function About({ onNavigate }) {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('home', targetId);
    }
  };

  return (
    <section className="section section--about" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Image */}
          <div className="about-img-wrap" id="about-visual">
            <img src={aboutImg} alt="African Energy Bank wind and renewable infrastructure" className="about-img" />
            <div className="about-img-badge">
              <Calendar size={14} color="#047857" />
              Est. 2024 · Abuja, Nigeria
            </div>
            <div className="about-img-stat">
              <span className="astat-num">$3T</span>
              <span className="astat-label">Africa's Energy Gap</span>
            </div>
          </div>

          {/* Text */}
          <div className="about-text" id="about-text">
            <span className="section-label">Our Mandate</span>
            <h2 className="section-title">
              Africa's Premier <span className="gradient-text">Energy Finance Partner</span>
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'left', marginBottom: '20px' }}>
              Formed by APPO and Afreximbank, the AEB mobilizes capital for oil, gas, and clean energy projects across Africa.
            </p>

            <div className="about-points">
              <div className="about-point">
                <span className="point-icon">
                  <ShieldCheck size={18} />
                </span>
                <div>
                  <strong>APPO &amp; Afreximbank Backed:</strong> Independent supranational financial institution with $5B initial share capital.
                </div>
              </div>

              <div className="about-point">
                <span className="point-icon">
                  <Flame size={18} />
                </span>
                <div>
                  <strong>Dual-Energy Mandate:</strong> Balancing hydrocarbon development with a smooth transition to clean energy.
                </div>
              </div>

              <div className="about-point">
                <span className="point-icon">
                  <Globe size={18} />
                </span>
                <div>
                  <strong>Intra-African Trade:</strong> Financing regional energy commerce, pipelines, and power grid interconnections.
                </div>
              </div>
            </div>

            <div className="hero-actions" style={{ marginTop: '20px' }}>
              <button onClick={() => onNavigate && onNavigate('about')} className="btn--pill-primary">
                <span>View More About Us</span>
                <div className="btn-circle-icon">
                  <ArrowRight size={14} color="#ffffff" />
                </div>
              </button>

              <button onClick={() => onNavigate && onNavigate('contact')} className="btn--pill-secondary">
                <div className="btn-circle-icon-sec">
                  <Play size={12} color="#0f172a" style={{ marginLeft: '2px' }} />
                </div>
                <span>Apply for Financing</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
