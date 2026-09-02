import React from 'react';

export default function Partners() {
  const partnerNames = [
    'African Development Bank',
    'World Bank Group',
    'IFC',
    'African Union',
    'IRENA',
    'Green Climate Fund',
    'Afreximbank',
    'ECOWAS',
    'African Export-Import Bank',
    'EIB',
    'DBSA',
    'KfW',
    'USAID',
  ];

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
          <span className="section-label">Partners &amp; Co-financiers</span>
          <h2 className="section-title">
            Backed by the World's <span className="gradient-text">Leading Institutions</span>
          </h2>
          <p className="section-subtitle">
            AEB mobilises capital alongside the world's major development finance institutions, multilateral banks, and sovereign wealth funds.
          </p>
        </div>

        {/* Partners Marquee */}
        <div className="partners-marquee-wrap">
          <div className="partners-track">
            {partnerNames.map((name, i) => (
              <span className="partner-badge" key={`orig-${i}`}>
                {name}
              </span>
            ))}
            {/* Duplicated for infinite smooth CSS marquee */}
            {partnerNames.map((name, i) => (
              <span className="partner-badge" key={`dup-${i}`}>
                {name}
              </span>
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
