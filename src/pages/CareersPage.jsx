import React, { useState } from 'react';
import { Briefcase, Building2, Globe, ShieldCheck, Users, ArrowRight, CheckCircle2, MapPin, Clock, X, Send, AlertCircle, Mail } from 'lucide-react';
import careersHeroBg from '../assets/gallery_community.png';

export default function CareersPage() {
  const [showTalentModal, setShowTalentModal] = useState(false);
  const [appliedSuccess, setAppliedSuccess] = useState(false);

  const handleTalentSubmit = (e) => {
    e.preventDefault();
    setAppliedSuccess(true);
    setTimeout(() => {
      setAppliedSuccess(false);
      setShowTalentModal(false);
    }, 3500);
  };

  return (
    <div className="careers-page">
      {/* SECTION 1: HERO LANDING (100vh with Background Photography) */}
      <section className="section--page-hero section--100vh" id="careers-hero">
        <div className="page-hero-bg-wrapper">
          <img src={careersHeroBg} alt="Careers at Africa Energy Bank" className="page-hero-bg-img" />
          <div className="page-hero-bg-overlay"></div>
        </div>

        <div className="container page-hero-container">
          <div className="page-hero-content page-hero-content--centered">
            <span className="section-label">Careers at AEB</span>
            <h1 className="page-hero-title">
              Power Africa's Future <br />
              <span className="gradient-text">With Supranational Impact</span>
            </h1>
            <p className="page-hero-subtitle">
              Join an elite pan-African development finance institution backing $5 Billion in oil, gas, and clean energy infrastructure across 54 sovereign nations.
            </p>

            <div className="hero-stats-row" style={{ marginTop: '16px', marginBottom: '32px' }}>
              <div className="hero-mini-stat">
                <span className="stat-value">$5B</span>
                <span className="stat-desc">Authorized Capital</span>
              </div>
              <div className="hero-mini-stat">
                <span className="stat-value">18+</span>
                <span className="stat-desc">APPO Member States</span>
              </div>
              <div className="hero-mini-stat">
                <span className="stat-value">100%</span>
                <span className="stat-desc">Pan-African Mobility</span>
              </div>
            </div>

            <div className="page-hero-actions">
              <a href="#no-openings" className="btn--pill-primary">
                <span>Check Status &amp; Talent Pool</span>
                <div className="btn-circle-icon">
                  <ArrowRight size={14} color="#ffffff" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY WORK WITH US & CULTURE (100vh) */}
      <section className="section--careers-culture section--100vh" id="why-us">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why AEB</span>
            <h2 className="section-title">
              An Exceptional Environment For <span className="gradient-text">Global Leaders</span>
            </h2>
            <p className="section-subtitle">
              We offer world-class supranational compensation, pan-African diplomatic status, and direct influence over continental energy sovereignty.
            </p>
          </div>

          <div className="culture-grid">
            <div className="culture-card">
              <div className="culture-icon">
                <ShieldCheck size={28} color="#047857" />
              </div>
              <h3>Supranational Diplomatic Status</h3>
              <p>
                Enjoy diplomatic privileges, tax-exempt compensation packages, and international diplomatic protection across member states.
              </p>
            </div>

            <div className="culture-card">
              <div className="culture-icon">
                <Globe size={28} color="#047857" />
              </div>
              <h3>Pan-African Mobility &amp; Reach</h3>
              <p>
                Work seamlessly across regional hubs in Abuja, Yaoundé, Cairo, and Nairobi, shaping major multi-nation infrastructure projects.
              </p>
            </div>

            <div className="culture-card">
              <div className="culture-icon">
                <Building2 size={28} color="#047857" />
              </div>
              <h3>Strategic Capital Stewardship</h3>
              <p>
                Direct capital allocation from APPO and Afreximbank to bridge the $100B annual African energy financing gap.
              </p>
            </div>

            <div className="culture-card">
              <div className="culture-icon">
                <Users size={28} color="#047857" />
              </div>
              <h3>Equal Opportunity Leadership</h3>
              <p>
                We are committed to gender equality and geographic diversity, targeting 45% female executive leadership across all bank divisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: NO CURRENT OPENINGS & TALENT POOL (100vh) */}
      <section className="section--careers-roles section--100vh" id="no-openings">
        <div className="container">
          <div className="no-openings-card">
            <div className="no-openings-icon-wrap">
              <AlertCircle size={44} color="#047857" />
            </div>

            <span className="section-label">Recruitment Notice</span>
            <h2 className="no-openings-title">No Active Openings Currently</h2>
            <p className="no-openings-subtitle">
              Thank you for your interest in joining the Africa Energy Bank. We currently do not have any open positions available. All inaugural Secretariat roles for this recruitment phase have been filled.
            </p>

            <div className="no-openings-box">
              <h3>Join Our Executive Talent Pool</h3>
              <p>
                We routinely review profiles for upcoming project credit, ESG, treasury, and supranational legal roles as we expand operational desks across APPO member states.
              </p>

              <div className="no-openings-actions">
                <button onClick={() => setShowTalentModal(true)} className="btn--pill-primary">
                  <span>Register CV for Future Openings</span>
                  <div className="btn-circle-icon">
                    <ArrowRight size={14} color="#ffffff" />
                  </div>
                </button>

                <a href="mailto:careers@africaenergybank.org" className="btn--pill-secondary">
                  <Mail size={14} />
                  <span>Contact HR Secretariat</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TALENT POOL MODAL */}
      {showTalentModal && (
        <div className="job-modal-backdrop" onClick={() => setShowTalentModal(false)}>
          <div className="job-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="job-modal-close" onClick={() => setShowTalentModal(false)}>
              <X size={20} />
            </button>

            {appliedSuccess ? (
              <div className="job-success-view">
                <CheckCircle2 size={56} color="#047857" />
                <h3>Profile Registered!</h3>
                <p>Thank you for submitting your profile to the AEB Talent Reserve. Our HR Directorate will notify you when new opportunities open in your domain.</p>
              </div>
            ) : (
              <form onSubmit={handleTalentSubmit} className="job-modal-form">
                <span className="section-label">Executive Talent Pool</span>
                <h3>Register Your Interest</h3>
                <p className="modal-job-loc">Submit your profile for future recruitment phases at Africa Energy Bank.</p>

                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" required placeholder="e.g. Dr. Amina Bello" />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" required placeholder="amina.bello@example.org" />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input type="tel" required placeholder="+234 800 000 0000" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Primary Domain / Expertise *</label>
                    <select required>
                      <option value="Project Finance">Project Finance &amp; Investment</option>
                      <option value="Risk & ESG">Risk, ESG &amp; Climate Sustainability</option>
                      <option value="Legal & Treaties">Legal, Supranational &amp; Treaties</option>
                      <option value="Trade Finance">Intra-African Trade Finance</option>
                      <option value="Treasury & Liquidity">Treasury &amp; Asset Management</option>
                      <option value="Energy Policy">Energy Policy &amp; Economics</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Nationality *</label>
                    <input type="text" required placeholder="e.g. Nigeria, Angola, Egypt" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Professional Bio &amp; Summary *</label>
                  <textarea rows={3} required placeholder="Briefly describe your energy banking or infrastructure experience..." />
                </div>

                <button type="submit" className="form-submit">
                  <Send size={16} /> Register Profile
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
