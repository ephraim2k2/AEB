import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ArrowRight } from 'lucide-react';

import gallerySolar from '../assets/gallery_solar.png';
import galleryWind from '../assets/gallery_wind.png';
import galleryLeadership from '../assets/gallery_leadership.png';
import galleryHydro from '../assets/gallery_hydro.png';
import galleryRefinery from '../assets/gallery_refinery.png';
import galleryCommunity from '../assets/gallery_community.png';

const fullGalleryItems = [
  {
    id: 1,
    src: gallerySolar,
    title: 'Utility-Scale Solar Energy Infrastructure',
    category: 'Renewable Energy',
    location: 'West Africa',
    description: 'Utility-scale photovoltaic array delivering clean solar power to regional distribution networks.',
  },
  {
    id: 2,
    src: galleryWind,
    title: 'Commercial Wind Energy Corridor',
    category: 'Clean Energy',
    location: 'Southern Africa',
    description: 'Wind turbine array on coastal hills generating clean electricity for regional industrial and domestic grids.',
  },
  {
    id: 3,
    src: galleryLeadership,
    title: 'Executive Partnership Signing Ceremony',
    category: 'Supranational Governance',
    location: 'Abuja, Nigeria',
    description: 'AEB leadership and sovereign delegates at the institutional charter and partnership ceremony.',
  },
  {
    id: 4,
    src: galleryHydro,
    title: 'Hydroelectric Dam Interconnection Grid',
    category: 'Hydroelectric Power',
    location: 'East Africa',
    description: 'Major hydroelectric generation asset providing baseload clean power for regional power pools.',
  },
  {
    id: 5,
    src: galleryRefinery,
    title: 'Modern Petroleum Refinery Infrastructure',
    category: 'Oil & Gas Infrastructure',
    location: 'West Africa',
    description: 'Downstream processing and refining facility supporting intra-African energy self-reliance and product trade.',
  },
  {
    id: 6,
    src: galleryCommunity,
    title: 'Rural Electrification Initiative',
    category: 'Community Impact',
    location: 'Sub-Saharan Africa',
    description: 'Solar mini-grid powered classrooms enabling evening study sessions for rural community students.',
  },
];

export default function GalleryPage({ onNavigate }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % fullGalleryItems.length);
    }
  };

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + fullGalleryItems.length) % fullGalleryItems.length);
    }
  };

  return (
    <div className="gallery-page">
      {/* SECTION 1: HERO LANDING (100vh with Background Photography) */}
      <section className="section--page-hero section--100vh" id="gallery-hero">
        <div className="page-hero-bg-wrapper">
          <img src={gallerySolar} alt="African Energy Bank Visual Archive" className="page-hero-bg-img" />
          <div className="page-hero-bg-overlay"></div>
        </div>

        <div className="container page-hero-container">
          <div className="page-hero-content page-hero-content--centered">
            <span className="section-label">Official Media Gallery</span>
            <h1 className="page-hero-title">
              Powering Africa <br />
              <span className="gradient-text">Through Visual Milestones</span>
            </h1>
            <p className="page-hero-subtitle">
              Explore high-definition photography of the African Energy Bank’s priority sectors across oil, gas, clean energy, and regional transmission across APPO member states.
            </p>

            <div className="hero-stats-row" style={{ marginTop: '16px', marginBottom: '32px' }}>
              <div className="hero-mini-stat">
                <span className="stat-value">18</span>
                <span className="stat-desc">APPO Member States</span>
              </div>
              <div className="hero-mini-stat">
                <span className="stat-value">$5B</span>
                <span className="stat-desc">Authorized Capital</span>
              </div>
              <div className="hero-mini-stat">
                <span className="stat-value">100%</span>
                <span className="stat-desc">High-Res Media</span>
              </div>
            </div>

            <div className="page-hero-actions">
              <a href="#gallery-grid-section" className="btn--pill-primary">
                <span>View All Media Assets</span>
                <div className="btn-circle-icon">
                  <ArrowRight size={14} color="#ffffff" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FULL MASONRY/GRID GALLERY (100vh) */}
      <section className="section--full-gallery section--100vh" id="gallery-grid-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '44px' }}>
            <span className="section-label">Media Archive</span>
            <h2 className="section-title">
              Project <span className="gradient-text">Photo Repository</span>
            </h2>
            <p className="section-subtitle">
              Click any photograph to view full screen in high resolution.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="gallery-grid">
            {fullGalleryItems.map((item, index) => (
              <div
                key={item.id}
                className="gallery-card"
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
              >
                <div className="gallery-card-img-wrap">
                  <img src={item.src} alt={item.title} className="gallery-card-img" loading="lazy" />
                  <div className="gallery-card-overlay">
                    <ZoomIn size={32} color="#ffffff" />
                  </div>
                </div>
                <div className="gallery-card-info">
                  <span className="gallery-card-cat">{item.category} • {item.location}</span>
                  <h4 className="gallery-card-title">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxIndex !== null && (
        <div className="gallery-lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">
              <X size={24} />
            </button>

            <button className="lightbox-nav lightbox-nav--prev" onClick={goPrev} aria-label="Previous">
              <ChevronLeft size={28} />
            </button>

            <div className="lightbox-img-wrap">
              <img
                src={fullGalleryItems[lightboxIndex].src}
                alt={fullGalleryItems[lightboxIndex].title}
                className="lightbox-img"
              />
            </div>

            <button className="lightbox-nav lightbox-nav--next" onClick={goNext} aria-label="Next">
              <ChevronRight size={28} />
            </button>

            <div className="lightbox-caption">
              <span className="lightbox-cat">{fullGalleryItems[lightboxIndex].category} • {fullGalleryItems[lightboxIndex].location}</span>
              <h3>{fullGalleryItems[lightboxIndex].title}</h3>
              <p>{fullGalleryItems[lightboxIndex].description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
