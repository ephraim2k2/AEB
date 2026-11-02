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
    { name: 'Côte d’Ivoire', flag: '🇨🇮' },
    { name: 'Egypt', flag: '🇪🇬' },
    { name: 'Equatorial Guinea', flag: '🇬🇶' },
    { name: 'Gabon', flag: '🇬🇦' },
    { name: 'Ghana', flag: '🇬🇭' },
    { name: 'Libya', flag: '🇱🇾' },
    { name: 'Namibia', flag: '🇳🇦' },
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
          <img src={aboutHeroBg} alt="African Energy Bank Executive Leadership" className="page-hero-bg-img" />
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
              {/* { <button onClick={() => onNavigate && onNavigate('contact')} className="btn--pill-secondary">
                <span>Contact Secretariat</span>
              </button> } */}
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
              Why the African Energy Bank <span className="gradient-text">Was Created</span>
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
              APPO <span className="gradient-text">Member States</span>
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
                In 2024, the Federal Republic of Nigeria was selected to host the African Energy Bank Headquarters in Abuja, formalized through a diplomatic host country agreement with APPO and Afreximbank.
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

      {/* SECTION 4: EXECUTIVE LEADERSHIP (PIONEER PRESIDENCY) */}
      <section className="section--leadership" id="leadership" style={{ padding: 'clamp(80px, 10vw, 120px) 0', background: '#ffffff' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '48px' }}>
            <span className="section-label">Executive Leadership</span>
            <h2 className="section-title">
              Pioneer Presidency &amp; <span className="gradient-text">Governance</span>
            </h2>
            <p className="section-subtitle">
              Appointed by sovereign member states and promoters at the inaugural General Assembly in Abuja, Nigeria, to lead the bank's operational take-off.
            </p>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #f8fafc 0%, #ecfdf5 100%)',
            border: '1px solid rgba(4, 120, 87, 0.2)',
            borderRadius: '24px',
            padding: 'clamp(32px, 5vw, 48px)',
            boxShadow: '0 12px 36px rgba(0, 0, 0, 0.04)',
            maxWidth: '1000px',
            margin: '0 auto',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '36px', alignItems: 'center' }}>
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(4, 120, 87, 0.1)',
                  color: '#047857',
                  padding: '6px 14px',
                  borderRadius: '100px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  marginBottom: '16px',
                }}>
                  <Award size={14} /> Pioneer President
                </div>
                <h3 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 8px 0', lineHeight: 1.2 }}>
                  Helmy Ghazi
                </h3>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: '#047857', marginBottom: '16px' }}>
                  Pioneer President &amp; Chief Executive Officer
                </div>
                <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.7, margin: '0 0 16px 0' }}>
                  Appointed at the inaugural General Assembly in Abuja on October 31, 2026, Helmy Ghazi brings over 28 years of distinguished institutional and investment banking experience across Africa and the MENA region.
                </p>
                <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.7, margin: '0 0 20px 0' }}>
                  Formerly Deputy CEO and Managing Director, Head of Global Banking at HSBC Bank Egypt, Mr. Ghazi spearheads the bank’s capital deployment to bridge Africa's estimated $200 billion energy financing deficit across hydrocarbons, power interconnections, and clean energy transition infrastructure.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: 600, background: '#ffffff', border: '1px solid #cbd5e1', color: '#334155', padding: '6px 12px', borderRadius: '6px' }}>
                    28+ Years Banking Leadership
                  </span>
                  <span style={{ fontSize: '0.78rem', fontWeight: 600, background: '#ffffff', border: '1px solid #cbd5e1', color: '#334155', padding: '6px 12px', borderRadius: '6px' }}>
                    Ex-HSBC Deputy CEO &amp; MD
                  </span>
                  <span style={{ fontSize: '0.78rem', fontWeight: 600, background: '#ffffff', border: '1px solid #cbd5e1', color: '#334155', padding: '6px 12px', borderRadius: '6px' }}>
                    $200B Deficit Mandate
                  </span>
                </div>
              </div>

              <div style={{
                background: '#ffffff',
                border: '1px solid rgba(4, 120, 87, 0.15)',
                borderRadius: '16px',
                padding: '28px',
                boxShadow: '0 8px 24px rgba(4, 120, 87, 0.06)',
              }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '0 0 16px 0' }}>
                  Inaugural General Assembly Mandate
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: '#475569', lineHeight: 1.5 }}>
                    <CheckCircle2 size={16} color="#047857" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span><strong>Abuja Assembly (Oct 31, 2026):</strong> Formal operational take-off ratified by APPO member states and Afreximbank.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: '#475569', lineHeight: 1.5 }}>
                    <CheckCircle2 size={16} color="#047857" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span><strong>$200B Deficit Target:</strong> Countering Western financing pullbacks by underwriting viable African energy assets.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: '#047857', lineHeight: 1.5 }}>
                    <CheckCircle2 size={16} color="#047857" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span><strong>Pan-African Underwriting:</strong> Structuring debt, equity, and syndicated credit across all 18 member states.</span>
                  </li>
                </ul>
                <button onClick={() => onNavigate && onNavigate('media')} className="btn--pill-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Read Assembly Announcement</span>
                  <div className="btn-circle-icon">
                    <ArrowRight size={14} color="#ffffff" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: GOVERNANCE & FAQ (100vh) */}
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
