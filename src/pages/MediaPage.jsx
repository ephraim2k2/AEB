import React, { useState } from 'react';
import { Newspaper, Download, Share2, Calendar, FileText, ArrowRight, ExternalLink, Filter, Search, ShieldCheck, Globe, Building2 } from 'lucide-react';
import mediaHeroBg from '../assets/gallery_hydro.png';

const pressReleases = [
  {
    id: 1,
    category: 'Press Release',
    title: 'Africa Energy Bank & Afreximbank Sign Landmark Headquarters Agreement in Abuja',
    date: 'August 28, 2026',
    readTime: '4 min read',
    summary: 'The Federal Republic of Nigeria officially grants diplomatic status, tax exemptions, and supranational charter guarantees for the AEB Secretariat Headquarters in Abuja.',
    tag: 'Governance',
  },
  {
    id: 2,
    category: 'Treaty & Policy',
    title: 'APPO Council of Ministers Ratifies $5 Billion Initial Capital Subscription Framework',
    date: 'July 14, 2026',
    readTime: '6 min read',
    summary: '18 African Petroleum Producers’ Organization member countries finalize individual $83M equity contributions, paving the way for inaugural debt issuance.',
    tag: 'Capitalization',
  },
  {
    id: 3,
    category: 'Project Announcement',
    title: 'AEB Approves $600 Million Facility for East African Power Pool Interconnection',
    date: 'June 02, 2026',
    readTime: '5 min read',
    summary: 'Financing package accelerates high-voltage transmission lines connecting Ethiopia, Kenya, Djibouti, and Tanzania clean hydroelectric grids.',
    tag: 'Project Finance',
  },
  {
    id: 4,
    category: 'Market Report',
    title: 'African Energy Outlook 2026: Bridging the $100 Billion Infrastructure Gap',
    date: 'May 19, 2026',
    readTime: '8 min read',
    summary: 'AEB Research Directorate releases flagship macro report examining cross-border gas pipelines, refinery self-reliance, and clean technology integration.',
    tag: 'Research',
  },
];

const mediaResources = [
  {
    title: 'AEB Official Brand & Logo Kit 2026',
    type: 'Vector SVG, PNG, Brand Guidelines',
    size: '18.4 MB',
  },
  {
    title: 'Headquarters Treaty Agreement Document',
    type: 'Official Diplomatic PDF',
    size: '4.2 MB',
  },
  {
    title: 'African Energy Outlook 2026 Full Report',
    type: 'Executive PDF Report',
    size: '12.8 MB',
  },
  {
    title: 'Executive Leadership High-Res Photos',
    type: 'Press Photo Pack (ZIP)',
    size: '45.0 MB',
  },
];

export default function MediaPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  const filteredPress = pressReleases.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === 'All' || item.tag === selectedTag;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="media-page">
      {/* SECTION 1: HERO LANDING (100vh with Background Photography) */}
      <section className="section--page-hero section--100vh" id="media-hero">
        <div className="page-hero-bg-wrapper">
          <img src={mediaHeroBg} alt="Africa Energy Bank Press & Media Center" className="page-hero-bg-img" />
          <div className="page-hero-bg-overlay"></div>
        </div>

        <div className="container page-hero-container">
          <div className="page-hero-content page-hero-content--centered">
            <span className="section-label">Media &amp; Press Center</span>
            <h1 className="page-hero-title">
              Official News &amp; <br />
              <span className="gradient-text">Supranational Insights</span>
            </h1>
            <p className="page-hero-subtitle">
              Access official press releases, diplomatic announcements, project financing updates, and research publications directly from the Africa Energy Bank.
            </p>

            <div className="hero-stats-row" style={{ marginTop: '16px', marginBottom: '32px' }}>
              <div className="hero-mini-stat">
                <span className="stat-value">2026</span>
                <span className="stat-desc">Energy Outlook</span>
              </div>
              <div className="hero-mini-stat">
                <span className="stat-value">18+</span>
                <span className="stat-desc">Member States</span>
              </div>
              <div className="hero-mini-stat">
                <span className="stat-value">100%</span>
                <span className="stat-desc">Verified Statements</span>
              </div>
            </div>

            <div className="page-hero-actions">
              <a href="#press-releases" className="btn--pill-primary">
                <span>Browse Latest Press</span>
                <div className="btn-circle-icon">
                  <ArrowRight size={14} color="#ffffff" />
                </div>
              </a>
              <a href="#media-kit" className="btn--pill-secondary">
                <Download size={14} />
                <span>Download Media Kit</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PRESS RELEASES GRID (100vh) */}
      <section className="section--press-releases section--100vh" id="press-releases">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Official Announcements</span>
            <h2 className="section-title">
              Latest News &amp; <span className="gradient-text">Press Releases</span>
            </h2>
            <p className="section-subtitle">
              Filter announcements by domain or search for specific treaty ratifications and project financing milestones.
            </p>
          </div>

          <div className="press-grid">
            {filteredPress.map((press) => (
              <div className="press-card" key={press.id}>
                <div className="press-card-top">
                  <span className="press-cat-badge">{press.category}</span>
                  <span className="press-date">{press.date}</span>
                </div>
                <h3 className="press-card-title">{press.title}</h3>
                <p className="press-card-summary">{press.summary}</p>
                <div className="press-card-footer">
                  <span className="press-read-time">{press.readTime}</span>
                  <button className="press-read-btn">
                    <span>Read Full Statement</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: MEDIA KIT & DOWNLOADS (100vh) */}
      <section className="section--media-kit section--100vh" id="media-kit">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Press &amp; Journalist Assets</span>
            <h2 className="section-title">
              Official Media <span className="gradient-text">Resources &amp; Downloads</span>
            </h2>
            <p className="section-subtitle">
              Approved brand assets, treaty executive summaries, and high-resolution photography for journalists and accreditation agencies.
            </p>
          </div>

          <div className="media-resources-grid">
            {mediaResources.map((res, idx) => (
              <div className="resource-card" key={idx}>
                <div className="resource-icon">
                  <FileText size={26} color="#047857" />
                </div>
                <div className="resource-info">
                  <h4>{res.title}</h4>
                  <p>{res.type} • {res.size}</p>
                </div>
                <button className="resource-dl-btn">
                  <Download size={16} />
                  <span>Download</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
