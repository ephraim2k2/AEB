import React from 'react';
import { Flame, Zap, Globe, FileSearch, Database, Leaf, Network, Award } from 'lucide-react';

import oilGasBg from '../assets/gallery_refinery.png';
import energyTransitionBg from '../assets/gallery_wind.png';
import tradeGridBg from '../assets/gallery_solar.png';
import researchAdvisoryBg from '../assets/gallery_leadership.png';

export default function Pillars() {
  const pillars = [
    {
      icon: <Flame size={22} />,
      title: 'Oil & Gas Projects',
      body: 'Financing exploration, production, refining, and midstream energy infrastructure.',
      statIcon: <Database size={13} />,
      stat: '125B Barrels & 650 TCF Gas',
      bgImg: oilGasBg,
    },
    {
      icon: <Zap size={22} />,
      title: 'Energy Transition',
      body: 'Supporting member states in transitioning to clean energy sources while maintaining energy security.',
      statIcon: <Leaf size={13} />,
      stat: 'Renewables & Clean Tech',
      bgImg: energyTransitionBg,
    },
    {
      icon: <Globe size={22} />,
      title: 'Intra-African Trade',
      body: 'Promoting and financing crude oil, natural gas, and power commerce across African nations.',
      statIcon: <Network size={13} />,
      stat: 'Regional Energy Commerce',
      bgImg: tradeGridBg,
    },
    {
      icon: <FileSearch size={22} />,
      title: 'Research & Advisory',
      body: 'Delivering technical assistance, market research, and project feasibility studies for energy assets.',
      statIcon: <Award size={13} />,
      stat: 'Technical & Feasibility Services',
      bgImg: researchAdvisoryBg,
    },
  ];

  return (
    <section className="section section--pillars" id="pillars">
      <div className="container">
        <div className="section-header" id="pillars-header">
          <span className="section-label">Strategic Objectives</span>
          <h2 className="section-title">
            Objectives of <span className="gradient-text">AEB's Mandate</span>
          </h2>
          <p className="section-subtitle">
            Aligned with APPO member states to unlock Africa's energy potential and drive sustainable economic development.
          </p>
        </div>

        <div className="pillars-grid" id="pillars-grid">
          {pillars.map((p, i) => (
            <div className="pillar-card" key={i}>
              <div className="pillar-card-bg" style={{ backgroundImage: `url('${p.bgImg}')` }}></div>
              <div className="pillar-card-content">
                <div className="pillar-icon-wrap">{p.icon}</div>
                <h3 className="pillar-title">{p.title}</h3>
                <p className="pillar-body">{p.body}</p>
                <div className="pillar-stat">
                  {p.statIcon}
                  {p.stat}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
