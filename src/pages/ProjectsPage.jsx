import React from 'react';
import { Sun, Flame, FlaskConical, Droplets, MapPin, DollarSign, Users, Zap, ArrowRight, TrendingUp, Globe } from 'lucide-react';

import projSolar from '../assets/gallery_solar.png';
import projHydro from '../assets/gallery_hydro.png';
import projWind from '../assets/gallery_wind.png';
import projRefinery from '../assets/gallery_refinery.png';
import dangoteRefinery from '../assets/dangote_refinery.png';
import heroImg from '../assets/gallery_community.png';

const allProjects = [
  {
    id: 'dangote',
    category: 'Oil & Gas',
    region: 'West Africa',
    title: 'Dangote Refinery — Lagos, Nigeria',
    subtitle: 'Africa\'s largest single-train petroleum refinery',
    desc: 'With a capacity of 650,000 barrels per day, the Dangote Refinery is the largest single-train petroleum refinery in the world. This transformative project reduces Africa\'s dependence on imported refined petroleum products, positions Nigeria as a net exporter, and creates over 100,000 direct and indirect jobs across the value chain.',
    investment: '$19B',
    capacity: '650,000 bpd',
    jobs: '100,000+',
    status: 'Operational',
    statusColor: '#047857',
    year: '2024',
    country: 'Nigeria',
    img: dangoteRefinery,
    icon: <Flame size={22} />,
  },
  {
    id: 'solar-corridor',
    category: 'Solar',
    region: 'West Africa',
    title: 'Northern Nigeria Solar Corridor — 500MW',
    subtitle: 'West Africa\'s largest solar energy deployment',
    desc: 'The largest solar energy project in West Africa, delivering clean electricity to 5 million households across six northern states. This $1.8B blended finance package combines concessional lending, equity co-investment, and green bond instruments through a sovereign-backed public-private partnership.',
    investment: '$1.8B',
    capacity: '500 MW',
    jobs: '2,400',
    status: 'Under Construction',
    statusColor: '#d97706',
    year: '2025',
    country: 'Nigeria',
    img: projSolar,
    icon: <Sun size={22} />,
  },
  {
    id: 'namibia-wind',
    category: 'Clean Energy',
    region: 'Southern Africa',
    title: 'Namibia Wind & Clean Energy Export Hub',
    subtitle: 'Green ammonia and utility-scale wind power',
    desc: 'A $2.1B facility for utility-scale wind power capacity, green ammonia production, and a dedicated export terminal — positioning Southern Africa as a global clean energy leader. The project will produce 350,000 tonnes of green ammonia annually for European and Asian export markets.',
    investment: '$2.1B',
    capacity: '350kt NH₃/yr',
    jobs: '4,500',
    status: 'Financial Close',
    statusColor: '#2563eb',
    year: '2025',
    country: 'Namibia',
    img: projWind,
    icon: <FlaskConical size={22} />,
  },
  {
    id: 'downstream-grid',
    category: 'Oil & Gas',
    region: 'Central Africa',
    title: 'Regional Oil Refinery & Downstream Grid',
    subtitle: 'Pan-African refining and petroleum commerce',
    desc: 'A $2.4B facility financing modern downstream oil refining, pipeline interconnections, and intra-African petroleum product commerce across APPO member states. This strategic initiative eliminates the refined product import bill across Central and West African nations.',
    investment: '$2.4B',
    capacity: '650,000 bpd',
    jobs: '6,200',
    status: 'Operational',
    statusColor: '#047857',
    year: '2024',
    country: 'West & Central Africa',
    img: projRefinery,
    icon: <Flame size={22} />,
  },
  {
    id: 'east-africa-hydro',
    category: 'Hydropower',
    region: 'East Africa',
    title: 'East Africa Hydroelectric Interconnection',
    subtitle: 'Cross-border power pool infrastructure',
    desc: 'A $900M transmission and hydroelectric infrastructure project enabling clean power distribution across 4 East African nations via the Eastern Africa Power Pool. The project connects existing hydro generation assets to underserved markets through high-voltage interconnectors.',
    investment: '$900M',
    capacity: '5,150 MW',
    jobs: '3,800',
    status: 'Under Construction',
    statusColor: '#d97706',
    year: '2026',
    country: 'Kenya, Uganda, Tanzania, Ethiopia',
    img: projHydro,
    icon: <Droplets size={22} />,
  },
  {
    id: 'senegal-gas',
    category: 'Oil & Gas',
    region: 'West Africa',
    title: 'Senegal Offshore Gas Processing Complex',
    subtitle: 'LNG export terminal and domestic gas-to-power',
    desc: 'A $1.5B integrated gas processing and LNG facility leveraging Senegal\'s Greater Tortue Ahmeyim offshore gas reserves. The project includes a floating LNG unit, onshore processing facility, and 250MW gas-to-power plant for domestic electrification.',
    investment: '$1.5B',
    capacity: '2.5 MTPA LNG',
    jobs: '2,100',
    status: 'Approved',
    statusColor: '#7c3aed',
    year: '2026',
    country: 'Senegal',
    img: projHydro,
    icon: <Flame size={22} />,
  },
  {
    id: 'south-africa-solar',
    category: 'Solar',
    region: 'Southern Africa',
    title: 'South Africa Solar & Storage Programme',
    subtitle: 'Utility-scale solar with battery energy storage',
    desc: 'A $1.2B programme deploying 800MW of solar PV alongside 400MWh of battery energy storage systems across South Africa\'s Northern Cape and Free State provinces. Designed to reduce load-shedding dependency and accelerate the country\'s just energy transition.',
    investment: '$1.2B',
    capacity: '800 MW + 400 MWh',
    jobs: '3,200',
    status: 'Financial Close',
    statusColor: '#2563eb',
    year: '2025',
    country: 'South Africa',
    img: projSolar,
    icon: <Sun size={22} />,
  },
  {
    id: 'egypt-hydrogen',
    category: 'Clean Energy',
    region: 'North Africa',
    title: 'Egypt Green Hydrogen Export Corridor',
    subtitle: 'Suez Canal Economic Zone hydrogen hub',
    desc: 'A $2.8B green hydrogen production and export facility in the Suez Canal Economic Zone. The project integrates 1.5GW of dedicated wind and solar generation with electrolyser capacity to produce 200,000 tonnes of green hydrogen annually for European export via dedicated pipeline.',
    investment: '$2.8B',
    capacity: '200kt H₂/yr',
    jobs: '5,500',
    status: 'Approved',
    statusColor: '#7c3aed',
    year: '2027',
    country: 'Egypt',
    img: projWind,
    icon: <Zap size={22} />,
  },
];

export default function ProjectsPage({ onNavigate }) {
  const totalInvestment = allProjects.reduce((sum, p) => {
    const num = parseFloat(p.investment.replace(/[^0-9.]/g, ''));
    return sum + num;
  }, 0);

  return (
    <div className="projects-page">
      {/* SECTION 1: HERO */}
      <section className="section--page-hero section--100vh" id="projects-hero">
        <div className="page-hero-bg-wrapper">
          <img src={heroImg} alt="Africa Energy Bank Projects Portfolio" className="page-hero-bg-img" />
          <div className="page-hero-bg-overlay"></div>
        </div>

        <div className="container page-hero-container">
          <div className="page-hero-content page-hero-content--centered">
            <span className="section-label">Investment Portfolio</span>
            <h1 className="page-hero-title">
              Our Energy <br />
              <span className="gradient-text">Projects Portfolio</span>
            </h1>
            <p className="page-hero-subtitle">
              Transformative energy infrastructure projects across Africa — from oil refining and LNG terminals to utility-scale solar, wind, and green hydrogen production.
            </p>

            <div className="hero-stats-row" style={{ marginTop: '16px', marginBottom: '32px' }}>
              <div className="hero-mini-stat">
                <span className="stat-value">${totalInvestment.toFixed(1)}B</span>
                <span className="stat-desc">Total Investment</span>
              </div>
              <div className="hero-mini-stat">
                <span className="stat-value">{allProjects.length}</span>
                <span className="stat-desc">Active Projects</span>
              </div>
              <div className="hero-mini-stat">
                <span className="stat-value">12+</span>
                <span className="stat-desc">Countries Impacted</span>
              </div>
            </div>

            <div className="page-hero-actions">
              <a href="#projects-portfolio" className="btn--pill-primary">
                <span>View All Projects</span>
                <div className="btn-circle-icon">
                  <ArrowRight size={14} color="#ffffff" />
                </div>
              </a>
              <button onClick={() => onNavigate && onNavigate('contact')} className="btn--pill-secondary">
                <span>Partner With Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PORTFOLIO OVERVIEW STATS */}
      <section className="section section--projects-overview" id="projects-portfolio" style={{ padding: 'clamp(80px, 10vw, 120px) 0', background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Portfolio Overview</span>
            <h2 className="section-title">
              Financing Africa's <span className="gradient-text">Energy Future</span>
            </h2>
            <p className="section-subtitle">
              AEB's diversified portfolio spans oil & gas infrastructure, renewable energy systems, and cross-border power interconnections across all African sub-regions.
            </p>
          </div>

          {/* Portfolio stat cards */}
          <div className="culture-grid" style={{ marginBottom: '56px' }}>
            <div className="culture-card">
              <div className="culture-icon">
                <DollarSign size={28} color="#047857" />
              </div>
              <h3>${totalInvestment.toFixed(1)}B+ Committed</h3>
              <p>Total capital deployed across energy projects in APPO member states and strategic African markets.</p>
            </div>
            <div className="culture-card">
              <div className="culture-icon">
                <Globe size={28} color="#047857" />
              </div>
              <h3>12+ Nations</h3>
              <p>Projects spanning West, East, Central, North, and Southern Africa — creating continent-wide energy interconnections.</p>
            </div>
            <div className="culture-card">
              <div className="culture-icon">
                <Users size={28} color="#047857" />
              </div>
              <h3>120,000+ Jobs</h3>
              <p>Direct and indirect employment created through construction, operations, and supporting value chain industries.</p>
            </div>
            <div className="culture-card">
              <div className="culture-icon">
                <TrendingUp size={28} color="#047857" />
              </div>
              <h3>Dual-Track Strategy</h3>
              <p>Balanced investment across traditional hydrocarbon assets and clean energy transition projects for a just transition.</p>
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="projects-portfolio-grid">
            {allProjects.map((project) => (
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
                      <DollarSign size={14} color="#047857" />
                      <span>{project.investment}</span>
                    </div>
                    <div className="ppc-stat">
                      <Zap size={14} color="#047857" />
                      <span>{project.capacity}</span>
                    </div>
                    <div className="ppc-stat">
                      <Users size={14} color="#047857" />
                      <span>{project.jobs} Jobs</span>
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
                AEB accepts financing applications from state-owned energy companies, private consortiums, and accredited project developers operating in APPO member nations.
              </p>
            </div>
            <button onClick={() => onNavigate && onNavigate('contact')} className="btn--pill-primary">
              <span>Contact Us</span>
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
