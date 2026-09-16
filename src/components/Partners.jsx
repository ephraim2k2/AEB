import React from 'react';

const partnersData = [
  {
    id: 'afdb',
    name: 'African Development Bank',
    sub: 'AfDB Group',
    logo: (
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="15" fill="#047857" />
        <circle cx="16" cy="16" r="12" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2" />
        <path d="M15 8C12 9.5 9.5 12 9 16C8.5 20 10.5 23.5 14.5 25C15.5 22 17 19.5 19.5 18C22 16.5 24 16 25 15C24.5 12 22.5 9.5 19.5 8.5C18 9.5 16.5 10.5 15 8Z" fill="#ffffff" />
        <circle cx="20" cy="12" r="2" fill="#f59e0b" />
      </svg>
    ),
  },
  {
    id: 'afreximbank',
    name: 'Afreximbank',
    sub: 'African Export-Import Bank',
    logo: (
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="16" fill="#022c1e" />
        <path d="M16 4L20.5 11.5L29 16L20.5 20.5L16 28L11.5 20.5L3 16L11.5 11.5L16 4Z" fill="#059669" />
        <path d="M16 8L18.8 13.2L24 16L18.8 18.8L16 24L13.2 18.8L8 16L13.2 13.2L16 8Z" fill="#fbbf24" />
        <circle cx="16" cy="16" r="3" fill="#ffffff" />
      </svg>
    ),
  },
  {
    id: 'worldbank',
    name: 'World Bank Group',
    sub: 'IBRD • IDA • IFC',
    logo: (
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="15" fill="#0284c7" />
        <circle cx="16" cy="16" r="11" stroke="#ffffff" strokeWidth="1.5" />
        <ellipse cx="16" cy="16" rx="6" ry="11" stroke="#ffffff" strokeWidth="1.2" />
        <line x1="5" y1="16" x2="27" y2="16" stroke="#ffffff" strokeWidth="1.5" />
        <line x1="7" y1="11" x2="25" y2="11" stroke="#ffffff" strokeWidth="1" />
        <line x1="7" y1="21" x2="25" y2="21" stroke="#ffffff" strokeWidth="1" />
      </svg>
    ),
  },
  {
    id: 'ifc',
    name: 'International Finance Corp.',
    sub: 'IFC / World Bank',
    logo: (
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="16" fill="#1e3a8a" />
        <path d="M8 10H24V14H13V18H21V22H8V10Z" fill="#ffffff" />
        <path d="M21 18L26 23H20L17 18H21Z" fill="#38bdf8" />
      </svg>
    ),
  },
  {
    id: 'au',
    name: 'African Union',
    sub: 'AU Governance',
    logo: (
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="15" fill="#d97706" />
        <circle cx="16" cy="16" r="12.5" fill="#047857" />
        <path d="M15 9C13 10 11 12 10.5 15C10 18 11.5 21 14.5 23C16 21 17.5 19 19.5 17.5C21.5 16 23 15.5 24 14.5C23.5 12 21.5 10 19 9C17.5 10 16 10.5 15 9Z" fill="#ffffff" />
        <path d="M7 16C7 11 11 7 16 7" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M25 16C25 21 21 25 16 25" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'irena',
    name: 'IRENA',
    sub: 'Intl Renewable Energy',
    logo: (
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="16" fill="#0891b2" />
        <circle cx="16" cy="16" r="6" fill="#f59e0b" />
        <path d="M16 4V8M16 24V28M4 16H8M24 16H28M7.5 7.5L10.3 10.3M21.7 21.7L24.5 24.5M7.5 24.5L10.3 21.7M21.7 10.3L24.5 7.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'gcf',
    name: 'Green Climate Fund',
    sub: 'GCF Finance',
    logo: (
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="16" fill="#059669" />
        <path d="M16 6C10.5 6 6 10.5 6 16C6 21.5 10.5 26 16 26C21.5 26 26 21.5 26 16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 10C12.7 10 10 12.7 10 16C10 19.3 12.7 22 16 22C19.3 22 22 19.3 22 16C22 12.7 19.3 10 16 10Z" fill="#34d399" />
        <path d="M16 13V19M13 16H19" stroke="#022c1e" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'eib',
    name: 'European Investment Bank',
    sub: 'EIB Group',
    logo: (
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="16" fill="#1d4ed8" />
        <path d="M9 23V11H13V23H9ZM14 23V11H18V23H14ZM19 23V11H23V23H19Z" fill="#ffffff" />
        <path d="M7 9H25V11H7V9Z" fill="#eab308" />
        <circle cx="16" cy="6" r="1.5" fill="#eab308" />
      </svg>
    ),
  },
  {
    id: 'dbsa',
    name: 'DBSA',
    sub: 'Dev Bank of Southern Africa',
    logo: (
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="16" fill="#0f766e" />
        <path d="M16 6L25 12V24L16 28L7 24V12L16 6Z" fill="#0d9488" stroke="#ffffff" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="4" fill="#f59e0b" />
      </svg>
    ),
  },
  {
    id: 'kfw',
    name: 'KfW Entwicklungsbank',
    sub: 'KfW Germany',
    logo: (
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="16" fill="#b91c1c" />
        <path d="M8 8H14V24H8V8Z" fill="#ffffff" />
        <path d="M14 16L22 8H25L17 16L25 24H22L14 16Z" fill="#ffffff" />
      </svg>
    ),
  },
  {
    id: 'usaid',
    name: 'USAID Power Africa',
    sub: 'Power Africa Initiative',
    logo: (
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="16" fill="#1e3a8a" />
        <path d="M16 5L24 10V22L16 27L8 22V10L16 5Z" fill="#b91c1c" />
        <path d="M16 8L22 12V20L16 24L10 20V12L16 8Z" fill="#ffffff" />
        <path d="M16 11L17.5 14H20.5L18 16L19 19L16 17.2L13 19L14 16L11.5 14H14.5L16 11Z" fill="#1e3a8a" />
      </svg>
    ),
  },
  {
    id: 'ebid',
    name: 'ECOWAS Bank (EBID)',
    sub: 'West Africa Dev Bank',
    logo: (
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="16" fill="#047857" />
        <circle cx="16" cy="16" r="10" stroke="#f59e0b" strokeWidth="2" />
        <polygon points="16,8 18.5,13 24,13.8 20,17.7 21,23 16,20.3 11,23 12,17.7 8,13.8 13.5,13" fill="#ffffff" />
      </svg>
    ),
  },
];

export default function Partners() {
  const testimonials = [
    {
      quote:
        'The African Energy Bank gave us a financing structure no commercial bank would touch. Within 18 months, we went from concept to construction on a 200MW solar plant serving 2.4 million Nigerians.',
      name: 'Adaeze Okonkwo',
      title: 'CEO, SolarNorth Energy · Nigeria',
    },
    {
      quote:
        'AEB understand the dual imperative of energy security and transition in Africa. Their cross-border energy facility accelerated the East Africa Grid Interconnection by 3 years.',
      name: 'Dr. Jean-Paul Kamanzi',
      title: 'Director of Energy Infrastructure · East African Community',
    },
    {
      quote:
        'As a sovereign co-financier, working alongside AEB gives global investors maximum security and local execution speed that was simply impossible before 2024.',
      name: 'Amine El-Mansouri',
      title: 'Head of Infrastructure Investments · Sovereign Fund of Egypt',
    },
  ];

  return (
    <section className="section section--partners" id="partners">
      <div className="container">
        <div className="section-header" id="partners-header">
          <span className="section-label">Partners</span>
          <h2 className="section-title">
            Backed by the World's <span className="gradient-text">Leading Institutions</span>
          </h2>
          <p className="section-subtitle">
            AEB mobilises capital alongside the world's major development finance institutions, multilateral banks, and sovereign wealth funds.
          </p>
        </div>

        {/* Partners Logo Marquee */}
        <div className="partners-marquee-wrap">
          <div className="partners-track">
            {partnersData.map((partner, i) => (
              <div className="partner-logo-card" key={`orig-${partner.id}-${i}`}>
                <div className="partner-logo-icon">{partner.logo}</div>
                <div className="partner-logo-info">
                  <span className="partner-logo-name">{partner.name}</span>
                  <span className="partner-logo-sub">{partner.sub}</span>
                </div>
              </div>
            ))}
            {/* Duplicated for smooth infinite CSS marquee loop */}
            {partnersData.map((partner, i) => (
              <div className="partner-logo-card" key={`dup-${partner.id}-${i}`}>
                <div className="partner-logo-icon">{partner.logo}</div>
                <div className="partner-logo-info">
                  <span className="partner-logo-name">{partner.name}</span>
                  <span className="partner-logo-sub">{partner.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid" id="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="quote-mark" aria-hidden="true">
                "
              </div>
              <p>{t.quote}</p>
              <footer>
                <strong>{t.name}</strong>
                <span>{t.title}</span>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
