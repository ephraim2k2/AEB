import React, { useState } from 'react';
import { ShieldCheck, Globe, Building2, Award, ChevronDown, ChevronUp, ArrowRight, CheckCircle2, FileText, Zap, Flame, Users } from 'lucide-react';
import aboutHeroBg from '../assets/gallery_leadership.png';

export default function AboutPage({ onNavigate }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const memberStates = [
    { name: 'Algeria', flag: '🇩🇿' },
    { name: 'Angola', flag: '🇦🇴' },
    { name: 'Benin', flag: '🇧🇯' },
    { name: 'Cameroon', flag: '🇨🇲' },
    { name: 'Chad', flag: '🇹🇩' },
    { name: 'Congo', flag: '🇨🇬' },
    { name: 'DR Congo', flag: '🇨🇩' },
    { name: 'Egypt', flag: '🇪🇬' },
    { name: 'Equatorial Guinea', flag: '🇬🇶' },
    { name: 'Gabon', flag: '🇬🇦' },
    { name: 'Ghana', flag: '🇬🇭' },
    { name: 'Ivory Coast', flag: '🇨🇮' },
    { name: 'Libya', flag: '🇱🇾' },
    { name: 'Niger', flag: '🇳🇪' },
    { name: 'Nigeria', flag: '🇳🇬' },
    { name: 'Senegal', flag: '🇸🇳' },
    { name: 'South Africa', flag: '🇿🇦' },
  ];

  // Doubled array for seamless continuous marquee loop
  const marqueeList = [...memberStates, ...memberStates];

  return (
    <div className="about-page">
      {/* SECTION 1: HERO LANDING (100vh with Background Photography) */}
      <section className="section--page-hero section--100vh" id="about-hero">
        <div className="page-hero-bg-wrapper">
          <img src={aboutHeroBg} alt="Africa Energy Bank Executive Leadership" className="page-hero-bg-img" />
          <div className="page-hero-bg-overlay"></div>
        </div>

        <div className="container page-hero-container">
          <div className="page-hero-content page-hero-content--centered">
            <span className="section-label">Institutional Governance</span>
            <h1 className="page-hero-title">
              Unlocking Africa's <br />
              <span className="gradient-text">Energy Sovereignty</span>
            </h1>
            <p className="page-hero-subtitle">
              Established by the African Petroleum Producers’ Organization (APPO) and Afreximbank to provide supranational financing for Africa's oil, gas, and clean energy transition.
            </p>

            <div className="hero-stats-row" style={{ marginTop: '16px', marginBottom: '32px' }}>
              <div className="hero-mini-stat">
                <span className="stat-value">18+</span>
                <span className="stat-desc">APPO Member States</span>
              </div>
              <div className="hero-mini-stat">
                <span className="stat-value">$5B</span>
                <span className="stat-desc">Initial Capital Base</span>
              </div>
              <div className="hero-mini-stat">
                <span className="stat-value">100%</span>
                <span className="stat-desc">Pan-African Mandate</span>
              </div>
            </div>

            <div className="page-hero-actions">
              <a href="#who-we-are" className="btn--pill-primary">
                <span>Explore Our Mandate</span>
                <div className="btn-circle-icon">
                  <ArrowRight size={14} color="#ffffff" />
                </div>
              </a>
              <button onClick={() => onNavigate && onNavigate('contact')} className="btn--pill-secondary">
                <span>Contact Secretariat</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHO WE ARE & FOUNDING CHARTER (100vh) */}
      <section className="section--who-we-are section--100vh" id="who-we-are">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '40px' }}>
            <span className="section-label">Founding Charter &amp; Purpose</span>
            <h2 className="section-title">
              Why the Africa Energy Bank <span className="gradient-text">Was Created</span>
            </h2>
            <p className="section-subtitle">
              Traditional international financial institutions are reducing capital allocation to African energy assets. AEB ensures Africa maintains financial independence over its energy future.
            </p>
          </div>

          <div className="mandate-dual-grid">
            <div className="mandate-card">
              <div className="mandate-icon-wrap">
                <Flame size={28} color="#047857" />
              </div>
              <h3>Hydrocarbon Energy Security</h3>
              <p>
                Africa holds over 125 billion barrels of proven crude oil reserves and 650 trillion cubic feet of natural gas. AEB finances exploration, refining, and midstream infrastructure to end energy poverty.
              </p>
              <ul className="mandate-list">
                <li><CheckCircle2 size={16} color="#047857" /> Refineries &amp; Downstream Processing</li>
                <li><CheckCircle2 size={16} color="#047857" /> Cross-Border Gas &amp; Oil Pipelines</li>
                <li><CheckCircle2 size={16} color="#047857" /> Liquefied Natural Gas (LNG) Terminals</li>
              </ul>
            </div>

            <div className="mandate-card highlighted">
              <div className="mandate-icon-wrap">
                <Zap size={28} color="#047857" />
              </div>
              <h3>Just &amp; Equitable Energy Transition</h3>
              <p>
                AEB finances utility-scale solar arrays, wind corridors, hydroelectric interconnections, and green hydrogen projects, ensuring a balanced, sustainable transition tailored to Africa’s needs.
              </p>
              <ul className="mandate-list">
                <li><CheckCircle2 size={16} color="#047857" /> Regional Electricity Power Pools</li>
                <li><CheckCircle2 size={16} color="#047857" /> Commercial Solar &amp; Wind Infrastructure</li>
                <li><CheckCircle2 size={16} color="#047857" /> Off-Grid Rural Electrification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: APPO MEMBER STATES (100vh with Smooth Marquee Scroll) */}
      <section className="section--member-states section--100vh" id="member-states">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '48px' }}>
            <span className="section-label">Sovereign Shareholding</span>
            <h2 className="section-title">
              APPO Sovereign <span className="gradient-text">Member States</span>
            </h2>
            <p className="section-subtitle">
              Capitalized by member countries of the African Petroleum Producers’ Organization alongside Afreximbank and African sovereign wealth funds.
            </p>
          </div>

          {/* Continuous Scrolling Countries Marquee Track */}
          <div className="member-states-marquee-container">
            <div className="member-states-marquee-track">
              {marqueeList.map((state, idx) => (
                <div className="ms-chip-card" key={idx}>
                  <span className="ms-flag">{state.flag}</span>
                  <span className="ms-name">{state.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Headquarters Agreement Banner */}
          <div className="headquarters-banner" style={{ marginTop: '56px' }}>
            <div className="hq-text">
              <h3>Headquarters Agreement — Abuja, Nigeria</h3>
              <p>
                In 2024, the Federal Republic of Nigeria won the host country bid for the Africa Energy Bank Headquarters in Abuja, granting diplomatic immunity, tax exemptions, and supranational status.
              </p>
            </div>
            <button onClick={() => onNavigate && onNavigate('contact')} className="btn--pill-primary">
              <span>View Secretariat Details</span>
              <div className="btn-circle-icon">
                <ArrowRight size={14} color="#ffffff" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4: GOVERNANCE & FAQ (100vh) */}
      <section className="section--about-faq section--100vh" id="key-objectives">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Frequently Asked Questions</span>
            <h2 className="section-title">
              Understanding <span className="gradient-text">AEB Governance</span>
            </h2>
            <p className="section-subtitle">
              Key operational details regarding institutional setup, capital subscription, and project qualification criteria.
            </p>
          </div>

          <div className="faq-accordion-container">
            <div className={`faq-card-item ${activeFaq === 0 ? 'active' : ''}`}>
              <div className="faq-card-header" onClick={() => toggleFaq(0)}>
                <h3>How is the $5 Billion initial capital structured?</h3>
                {activeFaq === 0 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              {activeFaq === 0 && (
                <div className="faq-card-body">
                  <p>
                    Each of the 18 APPO member states subscribes $83 Million in equity, with Afreximbank matching subscriptions alongside African sovereign wealth funds and accredited development finance institutions.
                  </p>
                </div>
              )}
            </div>

            <div className={`faq-card-item ${activeFaq === 1 ? 'active' : ''}`}>
              <div className="faq-card-header" onClick={() => toggleFaq(1)}>
                <h3>Who can apply for AEB project financing?</h3>
                {activeFaq === 1 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              {activeFaq === 1 && (
                <div className="faq-card-body">
                  <p>
                    AEB provides debt, equity, and syndicated loan packages to state-owned oil companies (NOCs), private energy consortiums, joint ventures, and clean technology developers operating within APPO member states.
                  </p>
                </div>
              )}
            </div>

            <div className={`faq-card-item ${activeFaq === 2 ? 'active' : ''}`}>
              <div className="faq-card-header" onClick={() => toggleFaq(2)}>
                <h3>Does AEB support renewable energy assets?</h3>
                {activeFaq === 2 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              {activeFaq === 2 && (
                <div className="faq-card-body">
                  <p>
                    Yes. AEB operates under a dual-track strategy: financing oil and gas for immediate energy security while dedicating a significant portion of capital to solar, wind, hydro, and green hydrogen projects.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
