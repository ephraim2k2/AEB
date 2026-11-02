import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    org: '',
    email: '',
    type: '',
    message: '',
    consent: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.type || !formData.consent) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setFormData({ name: '', org: '', email: '', type: '', message: '', consent: false });
      setTimeout(() => {
        setSuccess(false);
      }, 6000);
    }, 1200);
  };

  return (
    <section className="section section--contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* Contact Details */}
          <div className="contact-info" id="contact-info">
            <span className="section-label">Get in Touch</span>
            <h2 className="contact-title">
              Partner with the <span className="gradient-text">African Energy Bank</span>
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'left' }}>
              Whether seeking debt financing, equity co-investment, or technical project advisory — our investment committee is ready to evaluate your proposal.
            </p>

            <ul className="contact-details">
              <li>
                <div className="cd-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <strong>Headquarters</strong>
                  <span>Central Business District, Abuja, Federal Capital Territory, Nigeria</span>
                </div>
              </li>
              <li>
                <div className="cd-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <strong>Investment Enquiries</strong>
                  <span>invest@africanenergybank.org</span>
                </div>
              </li>
              <li>
                <div className="cd-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <strong>Telephone</strong>
                  <span>+234 (0) 9 461 8000</span>
                </div>
              </li>
              <li>
                <div className="cd-icon">
                  <Clock size={20} />
                </div>
                <div>
                  <strong>Mandate Review</strong>
                  <span>Preliminary mandate eligibility evaluation upon submission</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
            <div>
              <h3 className="form-title">Apply for Financing</h3>
              <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '2px' }}>
                Institutional project financing &amp; advisory enquiries
              </p>
            </div>

            {success && (
              <div className="form-success-banner" id="form-success">
                ✓ Thank you! Your financing enquiry has been submitted. Our deal team will respond within 48 hours.
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="f-name">Full Name *</label>
                <input
                  type="text"
                  id="f-name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="f-org">Organisation *</label>
                <input
                  type="text"
                  id="f-org"
                  name="org"
                  placeholder="Company / Government"
                  value={formData.org}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="f-email">Email Address *</label>
              <input
                type="email"
                id="f-email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="f-type">Project / Enquiry Type *</label>
              <select id="f-type" name="type" value={formData.type} onChange={handleChange} required>
                <option value="" disabled>
                  Select a type
                </option>
                <option>Oil &amp; Gas Midstream</option>
                <option>Solar / Wind Energy</option>
                <option>Hydropower / Storage</option>
                <option>Green Hydrogen</option>
                <option>Grid Infrastructure</option>
                <option>Off-grid / Mini-grid</option>
                
                <option>Technical Assistance</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="f-msg">Project Summary</label>
              <textarea
                id="f-msg"
                name="message"
                rows="4"
                placeholder="Capacity (MW / bpd), location, requested facility size ($M), and project stage..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginTop: '12px', marginBottom: '16px' }}>
              <input
                type="checkbox"
                id="f-consent"
                name="consent"
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                required
                style={{ marginTop: '3px', cursor: 'pointer', accentColor: '#047857' }}
              />
              <label htmlFor="f-consent" style={{ fontSize: '0.78rem', color: '#64748b', lineHeight: 1.45, cursor: 'pointer' }}>
                I consent to the collection and processing of my submitted details in accordance with the Nigeria Data Protection Act (NDPA) and African Energy Bank privacy protocols for the purpose of evaluating this financing enquiry.
              </label>
            </div>

            <button type="submit" className="form-submit" id="form-submit" disabled={submitting}>
              {submitting ? 'Sending…' : 'Send Enquiry →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
