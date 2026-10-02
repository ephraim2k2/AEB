import React from 'react';
import { ArrowRight } from 'lucide-react';

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

// Doubled for seamless continuous marquee loop
const marqueeList = [...memberStates, ...memberStates];

export default function MemberStates({ onNavigate }) {
  return (
    <section className="section--member-states" id="member-states">
      <div className="container">
        <div className="section-header" style={{ marginBottom: '48px' }}>
          <span className="section-label">Sovereign Shareholding</span>
          <h2 className="section-title">
            APPO<span className="gradient-text">Member States</span>
          </h2>
          <p className="section-subtitle">
            Capitalized by member countries of the African Petroleum Producers' Organization alongside Afreximbank and African sovereign wealth funds.
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
          <button onClick={() => onNavigate && onNavigate('about')} className="btn--pill-primary">
            <span>Learn More</span>
            <div className="btn-circle-icon">
              <ArrowRight size={14} color="#ffffff" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
