import React from 'react';
import { Sun, Flame, FlaskConical, Droplets, MapPin, DollarSign, Users, Zap, ArrowRight, TrendingUp, Globe, ShieldCheck } from 'lucide-react';

import projSolar from '../assets/gallery_solar.png';
import projHydro from '../assets/gallery_hydro.png';
import projWind from '../assets/gallery_wind.png';
import projRefinery from '../assets/gallery_refinery.png';
import heroImg from '../assets/gallery_community.png';

const prioritySectors = [
  {
    id: 'downstream-refining',
    category: 'Downstream',
    region: 'West & Central Africa',
    title: 'Downstream Refining & Petroleum Product Commerce',
    subtitle: 'Strengthening regional fuel self-sufficiency and intra-African trade',
    desc: 'Catalyzing investments in modern downstream refining, strategic storage infrastructure, and cross-border petroleum distribution to eliminate expensive extra-continental refined product imports across APPO member states.',
    investment: 'Strategic Priority',
    capacity: 'Regional Focus',
    jobs: 'In-Country Value',
    status: 'Priority Pipeline',
    statusColor: '#047857',
    year: 'Target Area',
    country: 'APPO Member States',
    img: projRefinery,
    icon: <Flame size={22} />,
  },
  {
    id: 'gas-to-power',
    category: 'Gas Infrastructure',
    region: 'Pan-African Corridors',
    title: 'Cross-Border Natural Gas & Gas-to-Power',
    subtitle: 'Unlocking 650 TCF of natural gas for industrial baseload power',
    desc: 'Financing cross-border natural gas pipeline networks, LNG receiving terminals, and gas-to-power generation to provide reliable, low-emission baseload power for manufacturing and residential grids.',
    investment: 'Strategic Priority',
    capacity: 'Baseload Power',
    jobs: 'Industrial Growth',
    status: 'Priority Pipeline',
    statusColor: '#047857',
    year: 'Target Area',
    country: 'Pan-African Corridors',
    img: projHydro,
    icon: <Flame size={22} />,
  },
  {
    id: 'solar-wind-corridors',
    category: 'Solar & Wind',
    region: 'Sahel & Sub-Saharan Africa',
    title: 'Utility-Scale Solar & Wind Energy Corridors',
    subtitle: 'Blended finance structures for large-scale renewable generation',
    desc: 'Deploying concessional debt, equity co-investments, and green finance instruments to build utility-scale solar PV arrays and commercial wind farms integrated with battery energy storage systems.',
    investment: 'Strategic Priority',
    capacity: 'Clean Megawatts',
    jobs: 'Local Engineering',
    status: 'Priority Pipeline',
    statusColor: '#d97706',
    year: 'Target Area',
    country: 'Sub-Saharan Africa',
    img: projSolar,
    icon: <Sun size={22} />,
  },
  {
    id: 'power-pool-interconnection',
    category: 'Grid Integration',
    region: 'Regional Power Pools',
    title: 'Regional Power Pool Transmission Interconnectors',
    subtitle: 'High-voltage cross-border transmission networks',
    desc: 'Financing high-voltage transmission interconnectors linking regional power pools (WAPP, EAPP, SAPP) to balance peak demand, facilitate power trading, and integrate remote renewable generation assets.',
    investment: 'Strategic Priority',
    capacity: 'Regional Grids',
    jobs: 'Regional Commerce',
    status: 'Priority Pipeline',
    statusColor: '#2563eb',
    year: 'Target Area',
    country: 'Regional Power Pools',
    img: projHydro,
    icon: <Droplets size={22} />,
  },
  {
    id: 'clean-hydrogen-ammonia',
    category: 'Clean Tech',
    region: 'North & Southern Africa',
    title: 'Clean Hydrogen & Industrial Decarbonization',
    subtitle: 'Next-generation clean fuels and green ammonia',
    desc: 'Supporting pilot and commercial-scale green hydrogen and clean ammonia facilities leveraging Africa\'s world-class solar and wind resources for domestic industrial use and global export.',
    investment: 'Strategic Priority',
    capacity: 'Export Logistics',
    jobs: 'Tech Innovation',
    status: 'Priority Pipeline',
    statusColor: '#7c3aed',
    year: 'Target Area',
    country: 'North & Southern Africa',
    img: projWind,
    icon: <FlaskConical size={22} />,
  },
  {
    id: 'clean-cooking-lpg',
    category: 'Energy Access',
    region: 'Sub-Saharan Africa',
    title: 'Clean Cooking LPG & Domestic Distribution Infrastructure',
    subtitle: 'Expanding clean energy access and protecting natural ecosystems',
    desc: 'Financing liquefied petroleum gas (LPG) bottling, micro-distribution infrastructure, and domestic clean cooking networks to replace traditional biomass and charcoal fuels, curbing deforestation and indoor air pollution.',
    investment: 'Strategic Priority',
    capacity: 'Universal Access',
    jobs: 'Community Health',
    status: 'Priority Pipeline',
    statusColor: '#047857',
    year: 'Target Area',
    country: 'APPO Member States',
    img: heroImg,
    icon: <Zap size={22} />,
  },
];

export default function ProjectsPage({ onNavigate }) {
  return (
    <div className="projects-page">
      {/* SECTION 1: HERO */}
      <section className="section--page-hero section--100vh" id="projects-hero">
        <div className="page-hero-bg-wrapper">
          <img src={heroImg} alt="African Energy Bank Priority Investment Pipeline" className="page-hero-bg-img" />
          <div className="page-hero-bg-overlay"></div>
        </div>

        <div className="container page-hero-container">
          <div className="page-hero-content page-hero-content--centered">
            <span className="section-label">Target Investment Sectors</span>
            <h1 className="page-hero-title">
              Priority Investment <br />
              <span className="gradient-text">Pipeline &amp; Mandate</span>
            </h1>
            <p className="page-hero-subtitle">
              Strategic capital allocation architecture across APPO member states designed to finance critical hydrocarbons, power interconnections, and the clean energy transition.
            </p>

            <div className="hero-stats-row" style={{ marginTop: '16px', marginBottom: '32px' }}>
              <div className="hero-mini-stat">
                <span className="stat-value">$10B</span>
                <span className="stat-desc">Inaugural Drive</span>
              </div>
              <div className="hero-mini-stat">
                <span className="stat-value">18</span>
                <span className="stat-desc">APPO Member States</span>
              </div>
              <div className="hero-mini-stat">
                <span className="stat-value">70 / 30</span>
                <span className="stat-desc">Dual-Track Mandate</span>
              </div>
            </div>

            <div className="page-hero-actions">
              <a href="#projects-portfolio" className="btn--pill-primary">
                <span>Explore Priority Sectors</span>
                <div className="btn-circle-icon">
                  <ArrowRight size={14} color="#ffffff" />
                </div>
              </a>
              <button onClick={() => onNavigate && onNavigate('contact')} className="btn--pill-secondary">
                <span>Apply for Financing</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PORTFOLIO OVERVIEW STATS */}
      <section className="section section--projects-overview" id="projects-portfolio" style={{ padding: 'clamp(80px, 10vw, 120px) 0', background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Pipeline Overview</span>
            <h2 className="section-title">
              Financing Africa's <span className="gradient-text">Energy Future</span>
            </h2>
            <p className="section-subtitle">
              AEB's underwriting framework targets oil and gas infrastructure, regional power grids, and clean energy transition assets across APPO member states.
            </p>
          </div>

          {/* Portfolio stat cards */}
          <div className="culture-grid" style={{ marginBottom: '56px' }}>
            <div className="culture-card">
              <div className="culture-icon">
                <DollarSign size={28} color="#047857" />
              </div>
              <h3>$5B Capital Base</h3>
              <p>Cornerstone sovereign equity from APPO member states alongside Afreximbank underwriting capacity.</p>
            </div>
            <div className="culture-card">
              <div className="culture-icon">
                <Globe size={28} color="#047857" />
              </div>
              <h3>18 APPO Nations</h3>
              <p>Targeting capital across member states representing 125B barrels of oil and 650 TCF of natural gas reserves.</p>
            </div>
            <div className="culture-card">
              <div className="culture-icon">
                <Users size={28} color="#047857" />
              </div>
              <h3>80% Local Content Target</h3>
              <p>Commitment to maximize domestic procurement, engineering skills transfer, and local value creation.</p>
            </div>
            <div className="culture-card">
              <div className="culture-icon">
                <TrendingUp size={28} color="#047857" />
              </div>
              <h3>Dual-Track Strategy</h3>
              <p>Balanced investment across hydrocarbon security and renewable energy assets for a sovereign, just transition.</p>
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="projects-portfolio-grid">
            {prioritySectors.map((project) => (
              <div className="project-portfolio-card" key={project.id}>
                <div className="ppc-img-wrap">
                  <img src={project.img} alt={project.title} className="ppc-img" />
                  <div className="ppc-img-overlay">
                    <span className="ppc-category-badge">{project.category}</span>
                    <span className="ppc-status-badge" style={{ background: project.statusColor }}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="ppc-body">
                  <div className="ppc-header">
                    <div className="ppc-icon">{project.icon}</div>
                    <div>
                      <h3 className="ppc-title">{project.title}</h3>
                      <p className="ppc-subtitle">{project.subtitle}</p>
                    </div>
                  </div>
                  <p className="ppc-desc">{project.desc}</p>
                  <div className="ppc-stats-row">
                    <div className="ppc-stat">
                      <ShieldCheck size={14} color="#047857" />
                      <span>{project.investment}</span>
                    </div>
                    <div className="ppc-stat">
                      <Zap size={14} color="#047857" />
                      <span>{project.capacity}</span>
                    </div>
                    <div className="ppc-stat">
                      <Users size={14} color="#047857" />
                      <span>{project.jobs}</span>
                    </div>
                  </div>
                  <div className="ppc-footer">
                    <span className="ppc-country">
                      <MapPin size={14} /> {project.country}
                    </span>
                    <span className="ppc-year">{project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CTA BANNER */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: 'var(--color-bg)' }}>
        <div className="container">
          <div className="headquarters-banner">
            <div className="hq-text">
              <h3>Have a Project Proposal?</h3>
              <p>
                AEB accepts financing and advisory applications from state-owned energy companies, private consortiums, and accredited project developers operating in APPO member nations.
              </p>
            </div>
            <button onClick={() => onNavigate && onNavigate('contact')} className="btn--pill-primary">
              <span>Apply for Financing</span>
              <div className="btn-circle-icon">
                <ArrowRight size={14} color="#ffffff" />
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
