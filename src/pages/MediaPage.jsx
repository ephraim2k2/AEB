import React, { useState } from 'react';
import { Newspaper, Download, Share2, Calendar, FileText, ArrowRight, ExternalLink, ShieldCheck, Globe, Building2, Play, X, Clock, Video, Eye, ChevronDown, Check } from 'lucide-react';

import mediaHeroBg from '../assets/gallery_hydro.png';
import imgLeadership from '../assets/gallery_leadership.png';
import imgRefinery from '../assets/gallery_refinery.png';
import imgDangote from '../assets/dangote_refinery.png';
import imgSolar from '../assets/gallery_solar.png';
import imgWind from '../assets/gallery_wind.png';
import imgHydro from '../assets/gallery_hydro.png';
import imgCommunity from '../assets/gallery_community.png';

const allPressReleases = [
  {
    id: 1,
    category: 'Press Release',
    title: 'Africa Energy Bank & Afreximbank Sign Landmark Headquarters Agreement in Abuja',
    date: 'August 28, 2026',
    readTime: '4 min read',
    summary: 'The Federal Republic of Nigeria officially grants diplomatic status, tax exemptions, and supranational charter guarantees for the AEB Secretariat Headquarters in Abuja.',
    fullContent: 'ABUJA, NIGERIA — In a historic ceremony attended by Ministers of Hydrocarbons and Finance from across APPO member states, the Africa Energy Bank (AEB) and Afreximbank officially signed the Host Country Headquarters Agreement with the Federal Government of Nigeria. The agreement establishes diplomatic immunity, tax-exempt institutional status, and full supranational capital movement guarantees for the bank\'s headquarters in the Central Business District of Abuja. The ceremony marks the final regulatory milestone prior to the bank\'s inaugural $5 billion capital call.',
    tag: 'Governance',
    img: imgLeadership,
    author: 'AEB Communications Directorate',
  },
  {
    id: 2,
    category: 'Treaty & Policy',
    title: 'APPO Council of Ministers Ratifies $5 Billion Initial Capital Subscription Framework',
    date: 'July 14, 2026',
    readTime: '6 min read',
    summary: '18 African Petroleum Producers’ Organization member countries finalize individual $83M equity contributions, paving the way for inaugural debt issuance.',
    fullContent: 'YAOUNDÉ, CAMEROON — The Extraordinary Session of the APPO Council of Ministers has formally ratified the equity subscription schedule for the Africa Energy Bank. Each of the 18 sovereign member states has committed $83 million toward the initial tranche, matched by Afreximbank\'s cornerstone institutional commitment. This capital structure provides the bank with an AAA-equivalent risk-weighted underwriting baseline for continental energy bond issuances scheduled for Q4 2026.',
    tag: 'Capitalization',
    img: imgRefinery,
    author: 'AEB Finance Secretariat',
  },
  {
    id: 3,
    category: 'Project Announcement',
    title: 'AEB Approves $600 Million Facility for East African Power Pool Interconnection',
    date: 'June 02, 2026',
    readTime: '5 min read',
    summary: 'Financing package accelerates high-voltage transmission lines connecting Ethiopia, Kenya, Djibouti, and Tanzania clean hydroelectric grids.',
    fullContent: 'ADDIS ABABA, ETHIOPIA — The Board of Directors of the Africa Energy Bank has greenlit a $600 million syndicated debt facility supporting Phase 2 of the Eastern Africa Power Pool Interconnection Project. The project finances 1,200 kilometers of 500kV HVDC transmission corridors linking hydro generation capacity from the Great Ethiopian Renaissance Dam with regional industrial hubs across East Africa.',
    tag: 'Project Finance',
    img: imgHydro,
    author: 'Infrastructure Investment Desk',
  },
  {
    id: 4,
    category: 'Downstream Focus',
    title: 'Dangote Refinery Co-Financing Agreement Reached to Expand Regional Product Supply',
    date: 'May 28, 2026',
    readTime: '5 min read',
    summary: 'AEB enters strategic liquidity partnership with Dangote Group to finance off-take distribution channels into 6 West African countries.',
    fullContent: 'LAGOS, NIGERIA — Africa Energy Bank has finalized a strategic working capital facility with Dangote Petroleum Refinery to finance maritime and pipeline distribution logistics for refined products reaching West and Central African APPO member nations. The partnership aims to lower freight premiums, reduce currency conversion costs, and replace expensive extra-continental imports with African-refined fuel.',
    tag: 'Downstream',
    img: imgDangote,
    author: 'Trade & Energy Desk',
  },
  {
    id: 5,
    category: 'Market Report',
    title: 'African Energy Outlook 2026: Bridging the $100 Billion Infrastructure Gap',
    date: 'May 19, 2026',
    readTime: '8 min read',
    summary: 'AEB Research Directorate releases flagship macro report examining cross-border gas pipelines, refinery self-reliance, and clean technology integration.',
    fullContent: 'GENEVA / ABUJA — The AEB Research Directorate has released its flagship 2026 Energy Outlook. The comprehensive 180-page report highlights critical investment vectors needed to eliminate energy poverty across Sub-Saharan Africa while maintaining sovereign energy independence. Key recommendations call for accelerated intra-African pipeline networks, local refining value creation, and blended finance structures for solar-wind microgrids.',
    tag: 'Research',
    img: imgWind,
    author: 'AEB Chief Economist Office',
  },
  {
    id: 6,
    category: 'Clean Transition',
    title: 'Northern Nigeria 500MW Solar Corridor Secures $1.8B Blended Finance Package',
    date: 'April 11, 2026',
    readTime: '4 min read',
    summary: 'Public-private partnership package co-arranged by AEB brings utility-scale solar generation and grid stabilization to 5 million households.',
    fullContent: 'KANO, NIGERIA — The Africa Energy Bank, alongside regional syndicate partners, has closed financial structuring on the 500MW Northern Nigeria Solar Corridor. Combining green bond tranches with sovereign risk guarantees, the project represents West Africa\'s largest utility-scale solar investment to date, providing low-cost electricity for regional agricultural processing and manufacturing zones.',
    tag: 'Renewables',
    img: imgSolar,
    author: 'Clean Energy Division',
  },
];

const videoBroadcasts = [
  {
    id: 'v1',
    title: 'Official Ceremony: Signing of the AEB Headquarters Agreement in Abuja',
    category: 'Keynote & Ceremony',
    date: 'August 2026',
    duration: '14:25',
    thumbnail: imgLeadership,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    summary: 'Full video coverage of the historic signing ceremony between the Federal Republic of Nigeria, APPO Ministers, and Afreximbank Executives establishing the Africa Energy Bank Headquarters in Abuja.',
  },
  {
    id: 'v2',
    title: 'Dangote Refinery Tour & Downstream Energy Security Panel',
    category: 'Documentary',
    date: 'July 2026',
    duration: '08:40',
    thumbnail: imgDangote,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    summary: 'Exclusive broadcast featuring an in-depth tour of the 650,000 bpd refinery facility in Lekki, Lagos, followed by an executive panel on African downstream self-sufficiency.',
  },
  {
    id: 'v3',
    title: 'Presidential Address: Financing Africa\'s Just Energy Transition',
    category: 'Special Address',
    date: 'June 2026',
    duration: '11:15',
    thumbnail: imgCommunity,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    summary: 'Keynote address delivered at the APPO Energy Summit outlining the strategic imperative of local capital mobilization for African oil, gas, and renewable infrastructure.',
  },
  {
    id: 'v4',
    title: 'East African Power Pool & Hydropower Infrastructure Briefing',
    category: 'Project Showcase',
    date: 'May 2026',
    duration: '06:50',
    thumbnail: imgHydro,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    summary: 'Technical overview and documentary highlight reel showcasing the $600M HVDC transmission grid interconnecting Ethiopia, Kenya, and neighboring East African nations.',
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
  // Interactive "See More" visibility limits
  const [pressVisibleCount, setPressVisibleCount] = useState(4);
  const [videoVisibleCount, setVideoVisibleCount] = useState(2);

  // Modals state
  const [activeArticle, setActiveArticle] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);
  const [copied, setCopied] = useState(false);

  const visiblePress = allPressReleases.slice(0, pressVisibleCount);
  const visibleVideos = videoBroadcasts.slice(0, videoVisibleCount);

  const handleShare = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="media-page">
      {/* SECTION 1: HERO LANDING */}
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
              Access official press releases, diplomatic announcements, project financing updates, high-definition video broadcasts, and research publications directly from the Africa Energy Bank.
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
              <a href="#video-library" className="btn--pill-secondary">
                <Video size={14} />
                <span>Watch Video Broadcasts</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PRESS RELEASES GRID WITH IMAGES */}
      <section className="section section--press-releases" id="press-releases" style={{ padding: 'clamp(80px, 10vw, 120px) 0', background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Official Announcements</span>
            <h2 className="section-title">
              Latest News &amp; <span className="gradient-text">Press Releases</span>
            </h2>
            <p className="section-subtitle">
              Explore official treaty ratifications, project financing milestones, and policy updates directly from the Africa Energy Bank.
            </p>
          </div>

          {/* Press Grid with Images */}
          <div className="press-grid">
            {visiblePress.map((press) => (
              <div className="press-card-enhanced" key={press.id}>
                <div className="press-card-img-wrap">
                  <img src={press.img} alt={press.title} className="press-card-img" />
                  <span className="press-cat-badge-overlay">{press.category}</span>
                </div>
                <div className="press-card-body">
                  <div className="press-card-top">
                    <span className="press-tag">{press.tag}</span>
                    <span className="press-date">
                      <Calendar size={13} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-1px' }} />
                      {press.date}
                    </span>
                  </div>
                  <h3 className="press-card-title">{press.title}</h3>
                  <p className="press-card-summary">{press.summary}</p>
                  <div className="press-card-footer">
                    <span className="press-read-time">
                      <Clock size={13} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-1px' }} />
                      {press.readTime}
                    </span>
                    <button className="press-read-btn" onClick={() => setActiveArticle(press)}>
                      <span>Read Full Statement</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* See More Press Button */}
          {pressVisibleCount < allPressReleases.length && (
            <div className="see-more-wrap">
              <button className="btn--see-more" onClick={() => setPressVisibleCount((prev) => prev + 4)}>
                <span>See More Press Releases</span>
                <ChevronDown size={16} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 3: VIDEO BROADCASTS & MULTIMEDIA */}
      <section className="section section--videos" id="video-library" style={{ padding: 'clamp(80px, 10vw, 120px) 0', background: 'var(--color-bg)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Multimedia Broadcasts</span>
            <h2 className="section-title">
              Video Library &amp; <span className="gradient-text">Press Coverage</span>
            </h2>
            <p className="section-subtitle">
              Watch official treaty signings, presidential keynote addresses, executive interviews, and documentary field reports.
            </p>
          </div>

          <div className="video-grid">
            {visibleVideos.map((video) => (
              <div className="video-card" key={video.id} onClick={() => setActiveVideo(video)}>
                <div className="video-thumb-wrap">
                  <img src={video.thumbnail} alt={video.title} className="video-thumb-img" />
                  <div className="video-thumb-overlay"></div>
                  <div className="video-play-btn">
                    <Play size={24} fill="#ffffff" color="#ffffff" style={{ marginLeft: '3px' }} />
                  </div>
                  <span className="video-duration-badge">{video.duration}</span>
                  <span className="video-cat-badge">{video.category}</span>
                </div>
                <div className="video-card-body">
                  <div className="video-card-meta">
                    <span>{video.date}</span>
                  </div>
                  <h3 className="video-card-title">{video.title}</h3>
                  <p className="video-card-summary">{video.summary}</p>
                  <div className="video-card-action">
                    <span className="video-watch-link">
                      <Play size={14} fill="#047857" color="#047857" />
                      <span>Watch Broadcast</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* See More Videos Button */}
          {videoVisibleCount < videoBroadcasts.length && (
            <div className="see-more-wrap">
              <button className="btn--see-more" onClick={() => setVideoVisibleCount((prev) => prev + 2)}>
                <span>See More Videos</span>
                <ChevronDown size={16} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 4: MEDIA KIT & DOWNLOADS */}
      {/* <section className="section section--media-kit" id="media-kit" style={{ padding: 'clamp(80px, 10vw, 120px) 0', background: '#ffffff' }}>
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
                <button className="resource-dl-btn" onClick={() => alert(`Downloading ${res.title}...`)}>
                  <Download size={16} />
                  <span>Download</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* MODAL 1: READ FULL PRESS ARTICLE */}
      {activeArticle && (
        <div className="media-modal-overlay" onClick={() => setActiveArticle(null)}>
          <div className="media-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="media-modal-close" onClick={() => setActiveArticle(null)}>
              <X size={20} />
            </button>
            <div className="media-modal-header">
              <img src={activeArticle.img} alt={activeArticle.title} className="media-modal-hero-img" />
              <div className="media-modal-header-text">
                <span className="press-cat-badge">{activeArticle.category} • {activeArticle.tag}</span>
                <h2>{activeArticle.title}</h2>
                <div className="media-modal-meta">
                  <span><Calendar size={14} /> {activeArticle.date}</span>
                  <span><Clock size={14} /> {activeArticle.readTime}</span>
                  <span><Globe size={14} /> {activeArticle.author}</span>
                </div>
              </div>
            </div>
            <div className="media-modal-body">
              <p className="media-modal-lead">{activeArticle.summary}</p>
              <hr style={{ border: 0, borderTop: '1px solid var(--color-border)', margin: '20px 0' }} />
              <p className="media-modal-paragraph">{activeArticle.fullContent}</p>
              <p className="media-modal-paragraph">
                The Africa Energy Bank continues to work closely with national power utilities, sovereign wealth funds, and international co-financiers to catalyze sustainable infrastructure investment across all 54 African nations.
              </p>
              
              <div className="media-modal-footer">
                <button className="btn--pill-primary" onClick={handleShare}>
                  {copied ? <Check size={14} color="#fff" /> : <Share2 size={14} color="#fff" />}
                  <span>{copied ? 'Link Copied to Clipboard!' : 'Share Official Statement'}</span>
                </button>
                <button className="btn--pill-secondary" onClick={() => setActiveArticle(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: VIDEO BROADCAST PLAYER */}
      {activeVideo && (
        <div className="media-modal-overlay" onClick={() => setActiveVideo(null)}>
          <div className="media-modal-card video-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="media-modal-close" onClick={() => setActiveVideo(null)}>
              <X size={20} />
            </button>
            <div className="video-player-container">
              <video controls autoPlay className="video-player-element" poster={activeVideo.thumbnail}>
                <source src={activeVideo.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="video-modal-info">
              <span className="video-cat-badge" style={{ position: 'static', display: 'inline-block', marginBottom: '8px' }}>
                {activeVideo.category}
              </span>
              <h3>{activeVideo.title}</h3>
              <p className="video-modal-date">{activeVideo.date} • Duration: {activeVideo.duration}</p>
              <p className="video-modal-desc">{activeVideo.summary}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
