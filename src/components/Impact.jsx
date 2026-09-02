import React from 'react';
import { Zap, ShieldCheck, Users } from 'lucide-react';

export default function Impact() {
  const impactCards = [
    {
      icon: <Zap size={13} />,
      tag: 'Clean Energy Mandate',
      amberTag: false,
      num: '74%',
      title: 'Clean Energy Portfolio',
      body: '74% of capital targets solar, wind, hydro, and grid storage projects aligned with Paris Agreement goals.',
      progress: '74%',
      amberFill: false,
    },
    {
      icon: <ShieldCheck size={13} />,
      tag: 'Execution Speed',
      amberTag: true,
      num: '85%',
      title: 'Projects On Schedule',
      body: '85% reach financial close within agreed timelines — 3× faster than traditional multilateral banks.',
      progress: '85%',
      amberFill: true,
    },
    {
      icon: <Users size={13} />,
      tag: 'In-Country Value',
      amberTag: false,
      num: '80%',
      title: 'Local Value Creation',
      body: '80% of procurement goes directly to African contractors, suppliers, and engineering partners.',
      progress: '80%',
      amberFill: false,
    },
  ];

  const milestones = [
    {
      year: '2024 — Established by African Union',
      desc: 'AEB formally constituted with mandate across 54 AU member states',
      future: false,
    },
    {
      year: '2025 — First Financing Package',
      desc: '$2.4B blended finance facility for West African solar and storage corridor',
      future: false,
    },
    {
      year: '2026 — Green Hydrogen Programme',
      desc: 'Launching $8B facility for green hydrogen production and export infrastructure',
      future: true,
    },
    {
      year: '2030 — SDG 7 Target',
      desc: 'Universal electricity access across Africa — 620M people connected to clean power',
      future: true,
    },
  ];

  return (
    <section className="section section--impact" id="impact">
      <div className="container">
        <div className="section-header" id="impact-header">
          <span className="section-label">Development Impact</span>
          <h2 className="section-title">
            Measuring What <span className="gradient-text">Matters Most</span>
          </h2>
          <p className="section-subtitle">
            Every loan is measured against tangible development outcomes — from megawatts generated to lives transformed across Africa.
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
