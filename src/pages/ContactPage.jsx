import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ShieldCheck, Building2, Globe, ArrowRight, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import contactHeroBg from '../assets/gallery_refinery.png';

const regionalHubs = [
  {
    id: 'abuja',
    city: 'Abuja, Nigeria',
    role: 'Secretariat Headquarters',
    address: 'Africa Energy Bank Tower, Central Business District, Abuja, Federal Capital Territory, Nigeria',
    email: 'headquarters@africaenergybank.org',
    phone: '+234 (0) 90 800 0000',
    hours: 'Mon – Fri: 08:30 – 17:00 WAT',
    tag: 'Primary Headquarters',
  },
  {
    id: 'yaounde',
    city: 'Yaoundé, Cameroon',
    role: 'APPO Executive Secretariat Desk',
    address: 'APPO Permanent Secretariat Building, Bastos District, Yaoundé, Republic of Cameroon',
    email: 'appo-desk@africaenergybank.org',
    phone: '+237 222 00 0000',
    hours: 'Mon – Fri: 08:00 – 16:30 WAT',
    tag: 'Central African Desk',
  },
  {
    id: 'cairo',
    city: 'Cairo, Egypt',
    role: 'North Africa Trade & Treasury Desk',
    address: 'Afreximbank Building, 72B El-Maher Street, Heliopolis, Cairo, Arab Republic of Egypt',
    email: 'northafrica@africaenergybank.org',
    phone: '+20 2 2456 7000',
    hours: 'Sun – Thu: 08:30 – 16:30 EET',
    tag: 'North African Desk',
  },
  {
    id: 'nairobi',
    city: 'Nairobi, Kenya',
    role: 'East Africa Clean Energy Hub',
    address: 'Upper Hill Financial District, Mara Road, Nairobi, Republic of Kenya',
    email: 'eastafrica@africaenergybank.org',
    phone: '+254 20 700 0000',
    hours: 'Mon – Fri: 08:30 – 17:00 EAT',
    tag: 'East African Hub',
  },
];

export default function ContactPage() {
  const [selectedHub, setSelectedHub] = useState('abuja');
  const [submitted, setSubmitted] = useState(false);

  const activeHubObj = regionalHubs.find((h) => h.id === selectedHub);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact-page">
      {/* SECTION 1: HERO LANDING (100vh with Background Photography) */}
      <section className="section--page-hero section--100vh" id="contact-hero">
        <div className="page-hero-bg-wrapper">
          <img src={contactHeroBg} alt="Africa Energy Bank Headquarters & Facilities" className="page-hero-bg-img" />
          <div className="page-hero-bg-overlay"></div>
        </div>

        <div className="container page-hero-container">
          <div className="page-hero-content page-hero-content--centered">
            <span className="section-label">Supranational Desk</span>
            <h1 className="page-hero-title">
              Connect With Our <br />
              <span className="gradient-text">Finance Secretariat</span>
            </h1>
            <p className="page-hero-subtitle">
              Initiate project credit applications, discuss co-financing syndications, or engage the Secretariat across our regional diplomatic desks in Abuja, Yaoundé, Cairo, and Nairobi.
            </p>

            <div className="hero-stats-row" style={{ marginTop: '16px', marginBottom: '32px' }}>
              <div className="hero-mini-stat">
                <span className="stat-value">Abuja</span>
                <span className="stat-desc">Headquarters HQ</span>
              </div>
              <div className="hero-mini-stat">
                <span className="stat-value">4 Hubs</span>
                <span className="stat-desc">Regional Offices</span>
              </div>
              <div className="hero-mini-stat">
                <span className="stat-value">256-Bit</span>
                <span className="stat-desc">Encrypted Desk</span>
              </div>
            </div>

            <div className="page-hero-actions">
              <a href="#inquiry-form" className="btn--pill-primary">
                <span>Submit Credit Inquiry</span>
                <div className="btn-circle-icon">
                  <ArrowRight size={14} color="#ffffff" />
                </div>
              </a>
              <a href="#regional-hubs" className="btn--pill-secondary">
                <span>View Regional Hubs</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INQUIRY FORM & DIRECT DESK (100vh) */}
      <section className="section--contact-form section--100vh" id="inquiry-form">
        <div className="container">
          <div className="contact-grid">
            {/* Left Contact Info Column */}
            <div className="contact-hero-text">
              <span className="section-label">Encrypted Submission</span>
              <h2 className="contact-title">
                Apply For Project <span className="gradient-text">Capital &amp; Credit</span>
              </h2>
              <p className="contact-desc">
                AEB accepts financing applications from state-owned energy companies, private consortiums, and accredited project developers operating in APPO member nations.
              </p>

              <ul className="contact-details">
                <li>
                  <div className="cd-icon"><MapPin size={20} /></div>
                  <div>
                    <strong>Headquarters Secretariat</strong>
                    <p>Africa Energy Bank Tower, Central Business District, Abuja, Nigeria</p>
                  </div>
                </li>
                <li>
                  <div className="cd-icon"><Mail size={20} /></div>
                  <div>
                    <strong>Direct Desk Email</strong>
                    <p>credit@africaenergybank.org</p>
                  </div>
                </li>
                <li>
                  <div className="cd-icon"><Phone size={20} /></div>
                  <div>
                    <strong>Secretariat Hotline</strong>
                    <p>+234 (0) 90 800 0000</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Contact Form Card */}
            <div className="contact-form-card">
              {submitted ? (
                <div className="form-success-message">
                  <CheckCircle2 size={54} color="#047857" />
                  <h3>Inquiry Submitted Successfully!</h3>
                  <p>Thank you for contacting the Africa Energy Bank. Your project summary has been routed to the Project Credit Committee. A representative will reach out within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form-element">
                  <div className="form-row">
                    <div className="form-group">
                      <label>First Name *</label>
                      <input type="text" required placeholder="e.g. Tariq" />
                    </div>
                    <div className="form-group">
                      <label>Last Name *</label>
                      <input type="text" required placeholder="e.g. Al-Mansoor" />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Organization / NOC Name *</label>
                      <input type="text" required placeholder="e.g. National Petroleum Corp" />
                    </div>
                    <div className="form-group">
                      <label>Official Email *</label>
                      <input type="email" required placeholder="t.almansoor@noc.org" />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Financing Category *</label>
                      <select required>
                        <option value="Oil & Gas Infrastructure">Oil &amp; Gas Infrastructure</option>
                        <option value="Renewable Energy Transition">Renewable Energy Transition</option>
                        <option value="Regional Trade & Power Grid">Regional Trade &amp; Power Grid</option>
                        <option value="Technical Assistance & Research">Technical Assistance &amp; Research</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Target Funding Amount ($USD) *</label>
                      <select required>
                        <option value="$10M - $50M">$10M – $50M</option>
                        <option value="$50M - $200M">$50M – $200M</option>
                        <option value="$200M - $500M">$200M – $500M</option>
                        <option value="$500M+">$500M+ (Syndicated)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Project Scope &amp; Summary *</label>
                    <textarea rows={4} required placeholder="Briefly outline your energy asset, location, capacity, and financing timeline..." />
                  </div>

                  <button type="submit" className="form-submit">
                    <Send size={16} /> Submit Project Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: REGIONAL DIPLOMATIC HUBS (100vh) */}
      <section className="section--regional-hubs section--100vh" id="regional-hubs">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Regional Presence</span>
            <h2 className="section-title">
              Our Diplomatic <span className="gradient-text">Desks &amp; Hubs</span>
            </h2>
            <p className="section-subtitle">
              Select a regional hub to view direct address, contact lines, and operational hours across African member states.
            </p>
          </div>

          <div className="hubs-selector-grid">
            <div className="hub-tabs-col">
              {regionalHubs.map((hub) => (
                <button
                  key={hub.id}
                  className={`office-select-tab ${selectedHub === hub.id ? 'active' : ''}`}
                  onClick={() => setSelectedHub(hub.id)}
                >
                  <MapPin size={18} />
                  <div>
                    <strong>{hub.city}</strong>
                    <span>{hub.role}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="hub-feature-col">
              {activeHubObj && (
                <div className="office-feature-card">
                  <span className="off-badge">{activeHubObj.tag}</span>
                  <h3>{activeHubObj.city}</h3>
                  <p className="off-role">{activeHubObj.role}</p>

                  <div className="off-detail-row">
                    <MapPin size={18} color="#047857" />
                    <span>{activeHubObj.address}</span>
                  </div>

                  <div className="off-detail-row">
                    <Mail size={18} color="#047857" />
                    <span>{activeHubObj.email}</span>
                  </div>

                  <div className="off-detail-row">
                    <Phone size={18} color="#047857" />
                    <span>{activeHubObj.phone}</span>
                  </div>

                  <div className="off-detail-row">
                    <Clock size={18} color="#047857" />
                    <span>{activeHubObj.hours}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
