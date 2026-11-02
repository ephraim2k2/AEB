import React from 'react';
import { Users, Flame, TrendingUp } from 'lucide-react';

export default function Impact() {
  const impactCards = [
    {
      icon: <Flame size={13} />,
      tag: 'Strategic Mandate',
      amberTag: false,
      num: '70 / 30',
      title: 'Dual-Track Capital Allocation',
      body: 'Balancing critical hydrocarbon and gas infrastructure (70%) with accelerated renewables and clean transition investments (30%).',
      progress: '70%',
      amberFill: false,
    },
    {
      icon: <Users size={13} />,
      tag: 'Local Content Target',
      amberTag: true,
      num: '80%',
      title: 'Target Local Value Creation',
      body: 'Aiming to direct up to 80% of project procurement to African contractors, engineering service providers, and domestic suppliers.',
      progress: '80%',
      amberFill: true,
    },
    {
      icon: <TrendingUp size={13} />,
      tag: 'Pipeline Drive',
      amberTag: false,
      num: '$10B',
      title: 'Inaugural Financing Drive',
      body: 'Initial financing pipeline rolling out across priority member states including Nigeria, Angola, and Libya to catalyze regional development.',
      progress: '100%',
      amberFill: false,
    },
  ];

  const milestones = [
    {
      year: '2024 — Host Country Selection',
      desc: 'Federal Republic of Nigeria selected by APPO member states to host the African Energy Bank Headquarters in Abuja.',
      future: false,
    },
    {
      year: '2025 — Treaty & Charter Ratification',
      desc: 'Finalization of the diplomatic Headquarters Agreement, supranational governance charter, and sovereign equity subscriptions.',
      future: false,
    },
    {
      year: 'February 2026 — Headquarters Handover',
      desc: 'Official handover of the completed AEB Headquarters complex in the Central Business District of Abuja.',
      future: false,
    },
    {
      year: 'October 2026 — Inaugural General Assembly & Take-Off',
      desc: 'Bank officially takes off in Abuja; veteran banker Helmy Ghazi appointed pioneer President to lead the drive in bridging the $200B energy deficit.',
      future: false,
    },
    {
      year: '2027 & Beyond — Full Lending & Underwriting Deployment',
      desc: 'Scaling syndicated debt, equity co-investments, and transition facilities across APPO member states.',
      future: true,
    },
  ];

  return (
    <section className="section section--impact" id="impact">
      <div className="container">
        <div className="section-header" id="impact-header">
          <span className="section-label">Development Targets</span>
          <h2 className="section-title">
            Our Strategic <span className="gradient-text">Targets &amp; Milestones</span>
          </h2>
          <p className="section-subtitle">
            Capital deployment and operational benchmarks designed to overcome energy poverty and build industrial resilience across APPO member states.
          </p>
        </div>

        <div className="impact-cards">
          {impactCards.map((c, i) => (
            <div className="impact-card" key={i}>
              <div className="impact-card-top">
                <span className={`impact-tag ${c.amberTag ? 'impact-tag--amber' : ''}`}>
                  {c.icon}
                  {c.tag}
                </span>
                <div className="impact-num">{c.num}</div>
              </div>
              <div className="impact-card-body">
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
              <div className="impact-progress-bar">
                <div
                  className={`impact-progress-fill ${c.amberFill ? 'impact-progress-fill--amber' : ''}`}
                  style={{ width: c.progress }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="impact-timeline" id="impact-timeline">
          <h3 className="timeline-title">AEB Milestones</h3>
          <div className="timeline-track">
            <div className="timeline-line"></div>
            {milestones.map((m, i) => (
              <div className="timeline-item" key={i}>
                <div className={`t-dot ${m.future ? 't-dot--future' : ''}`}></div>
                <div className="t-content">
                  <strong>{m.year}</strong>
                  <span>{m.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
