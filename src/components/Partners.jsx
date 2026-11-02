import React from 'react';

const foundingPartners = [
  {
    id: 'appo',
    name: "African Petroleum Producers' Organization",
    acronym: 'APPO',
    sub: 'Intergovernmental Body · 18 Sovereign Member States',
    role: 'Promoting Sovereign Shareholder & Policy Architect',
    description: "Fostering strategic cooperation, policy alignment, and technical development across Africa's hydrocarbon-producing nations representing 125B barrels of crude reserves and 650 TCF of natural gas.",
    logo: (
      <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="16" fill="#022c1e" />
        <circle cx="16" cy="16" r="10" stroke="#059669" strokeWidth="2" />
        <path d="M16 8L20 16L16 24L12 16L16 8Z" fill="#fbbf24" />
        <circle cx="16" cy="16" r="2.5" fill="#ffffff" />
      </svg>
    ),
  },
  {
    id: 'afreximbank',
    name: 'African Export-Import Bank',
    acronym: 'Afreximbank',
    sub: 'Multilateral Development Finance Institution',
    role: 'Founding Institutional Shareholder & Underwriting Co-Promoter',
    description: "Africa's premier supranational trade finance bank, providing institutional structuring, underwriting expertise, and cornerstone equity subscription to operationalise the bank's $5B capital base.",
    logo: (
      <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="16" fill="#022c1e" />
        <path d="M16 4L20.5 11.5L29 16L20.5 20.5L16 28L11.5 20.5L3 16L11.5 11.5L16 4Z" fill="#059669" />
        <path d="M16 8L18.8 13.2L24 16L18.8 18.8L16 24L13.2 18.8L8 16L13.2 13.2L16 8Z" fill="#fbbf24" />
        <circle cx="16" cy="16" r="3" fill="#ffffff" />
      </svg>
    ),
  },
];

export default function Partners() {
  return (
    <section className="section section--partners" id="partners">
      <div className="container">
        <div className="section-header" id="partners-header">
          <span className="section-label">Founding &amp; Promoting Institutions</span>
          <h2 className="section-title">
            Established by <span className="gradient-text">APPO &amp; Afreximbank</span>
          </h2>
          <p className="section-subtitle">
            The African Energy Bank was constituted through a landmark treaty between the African Petroleum Producers' Organization and the African Export-Import Bank.
          </p>
        </div>

        {/* Founding Partners Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '48px',
        }}>
          {foundingPartners.map((partner) => (
            <div
              key={partner.id}
              style={{
                background: '#ffffff',
                border: '1px solid rgba(4, 120, 87, 0.15)',
                borderRadius: '16px',
                padding: '36px 32px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  background: 'rgba(4, 120, 87, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {partner.logo}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', margin: 0, lineHeight: 1.25 }}>
                    {partner.name}
                  </h3>
                  <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#047857', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {partner.sub}
                  </span>
                </div>
              </div>

              <div style={{
                fontSize: '0.82rem',
                fontWeight: 600,
                color: '#d97706',
                background: 'rgba(217, 119, 6, 0.08)',
                padding: '6px 14px',
                borderRadius: '8px',
                width: 'fit-content',
              }}>
                {partner.role}
              </div>

              <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.65, margin: 0 }}>
                {partner.description}
              </p>
            </div>
          ))}
        </div>

        {/* Founding Charter Callout */}
        <div style={{
          background: 'linear-gradient(135deg, #022c1e 0%, #064e3b 100%)',
          borderRadius: '16px',
          padding: '36px 40px',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(2, 44, 30, 0.2)',
        }}>
          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            <span style={{
              display: 'inline-block',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#34d399',
              marginBottom: '12px',
            }}>
              Founding Charter Declaration
            </span>
            <p style={{
              fontSize: '1.15rem',
              lineHeight: 1.7,
              color: '#e2e8f0',
              fontStyle: 'italic',
              margin: '0 0 16px 0',
            }}>
              "The African Energy Bank is established to address the critical financing gap in Africa's energy sector, balancing hydrocarbon energy security with a just and equitable clean energy transition under sovereign African leadership."
            </p>
            <div style={{ fontSize: '0.85rem', color: '#a7f3d0', fontWeight: 600 }}>
              Charter of the African Energy Bank · Abuja, Nigeria
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
