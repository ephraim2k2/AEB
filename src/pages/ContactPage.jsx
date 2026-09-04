import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ArrowRight } from 'lucide-react';
import contactHeroBg from '../assets/gallery_refinery.png';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact-page">
      {/* SECTION 1: HERO LANDING */}
      <section className="section--page-hero section--100vh" id="contact-hero">
        <div className="page-hero-bg-wrapper">
          <img src={contactHeroBg} alt="Africa Energy Bank Headquarters & Facilities" className="page-hero-bg-img" />
          <div className="page-hero-bg-overlay"></div>
        </div>

        <div className="container page-hero-container">
          <div className="page-hero-content page-hero-content--centered">
            <span className="section-label">Get in Touch</span>
            <h1 className="page-hero-title">
              Contact the <br />
              <span className="gradient-text">Africa Energy Bank</span>
            </h1>
            <p className="page-hero-subtitle">
              Have a question, partnership inquiry, or need more information about our initiatives? Reach out to our team and we'll get back to you promptly.
            </p>

            <div className="hero-stats-row" style={{ marginTop: '16px', marginBottom: '32px' }}>
              <div className="hero-mini-stat">
                <span className="stat-value">Abuja</span>
                <span className="stat-desc">Headquarters HQ</span>
              </div>
              <div className="hero-mini-stat">
                <span className="stat-value">24hrs</span>
                <span className="stat-desc">Response Time</span>
              </div>
              <div className="hero-mini-stat">
                <span className="stat-value">4 Hubs</span>
                <span className="stat-desc">Regional Offices</span>
              </div>
            </div>

            <div className="page-hero-actions">
              <a href="#contact-form" className="btn--pill-primary">
                <span>Send a Message</span>
                <div className="btn-circle-icon">
                  <ArrowRight size={14} color="#ffffff" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CONTACT FORM */}
      <section className="section section--contact" id="contact-form">
        <div className="container">
          <div className="contact-grid">
            {/* Left Contact Info Column */}
            <div className="contact-info" id="contact-info">
              <span className="section-label">Get in Touch</span>
              <h2 className="contact-title">
                We'd Love to <span className="gradient-text">Hear From You</span>
              </h2>
              <p className="section-subtitle" style={{ textAlign: 'left' }}>
                Whether you have a question about our programs, partnerships, or anything else — our team is ready to answer all your inquiries.
              </p>

              <ul className="contact-details">
                <li>
                  <div className="cd-icon"><MapPin size={20} /></div>
                  <div>
                    <strong>Headquarters</strong>
                    <span>Africa Energy Bank Tower, Central Business District, Abuja, Nigeria</span>
                  </div>
                </li>
                <li>
                  <div className="cd-icon"><Mail size={20} /></div>
                  <div>
                    <strong>Email</strong>
                    <span>info@africaenergybank.org</span>
                  </div>
                </li>
                <li>
                  <div className="cd-icon"><Phone size={20} /></div>
                  <div>
                    <strong>Telephone</strong>
                    <span>+234 (0) 90 800 0000</span>
                  </div>
                </li>
                <li>
                  <div className="cd-icon"><Clock size={20} /></div>
                  <div>
                    <strong>Office Hours</strong>
                    <span>Mon – Fri: 08:30 – 17:00 WAT</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Contact Form Card */}
            <form onSubmit={handleSubmit} className="contact-form" id="contact-page-form">
              <div>
                <h3 className="form-title">Send Us a Message</h3>
                <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '2px' }}>
                  We'll respond within 24 business hours
                </p>
              </div>

              {submitted && (
                <div className="form-success-banner">
                  <CheckCircle2 size={24} color="#047857" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />
                  Message sent successfully! Our team will get back to you within 24 hours.
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="cp-first-name">First Name *</label>
                  <input id="cp-first-name" type="text" required placeholder="Your first name" />
                </div>
                <div className="form-group">
                  <label htmlFor="cp-last-name">Last Name *</label>
                  <input id="cp-last-name" type="text" required placeholder="Your last name" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="cp-email">Email Address *</label>
                  <input id="cp-email" type="email" required placeholder="you@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="cp-phone">Phone Number</label>
                  <input id="cp-phone" type="tel" placeholder="+234 000 000 0000" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="cp-subject">Subject *</label>
                <select id="cp-subject" required defaultValue="">
                  <option value="" disabled>Select a topic</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Partnership & Collaboration">Partnership &amp; Collaboration</option>
                  <option value="Media & Press">Media &amp; Press</option>
                  <option value="Investment Inquiry">Investment Inquiry</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="cp-message">Message *</label>
                <textarea id="cp-message" rows={4} required placeholder="How can we help you?" />
              </div>

              <button type="submit" className="form-submit">
                <Send size={16} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
