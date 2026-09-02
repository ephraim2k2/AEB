import React, { useState, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ArrowRight, Image as ImageIcon } from 'lucide-react';

import gallerySolar from '../assets/gallery_solar.png';
import galleryWind from '../assets/gallery_wind.png';
import galleryLeadership from '../assets/gallery_leadership.png';
import galleryHydro from '../assets/gallery_hydro.png';
import galleryRefinery from '../assets/gallery_refinery.png';
import galleryCommunity from '../assets/gallery_community.png';

const galleryItems = [
  {
    src: gallerySolar,
    title: 'Solar Farm — East Africa',
    category: 'Renewable Energy',
    description: 'Large-scale photovoltaic installation powering 50,000 households across the savanna.',
  },
  {
    src: galleryWind,
    title: 'Wind Energy Complex',
    category: 'Clean Energy',
    description: 'Wind turbine array on African hills generating 240MW of clean electricity at golden hour.',
  },
  {
    src: galleryLeadership,
    title: 'Partnership Signing Ceremony',
    category: 'Leadership',
    description: 'AEB executives and engineering partners at the substation commissioning event.',
  },
  {
    src: galleryHydro,
    title: 'Hydroelectric Dam',
    category: 'Infrastructure',
    description: 'Major hydroelectric dam providing baseload power and water management for the region.',
  },
  {
    src: galleryRefinery,
    title: 'Modern Refinery Complex',
    category: 'Oil & Gas',
    description: 'State-of-the-art downstream processing facility boosting intra-African energy trade.',
  },
  {
    src: galleryCommunity,
    title: 'Community Impact — Rural Electrification',
    category: 'Impact',
    description: 'Solar-powered classrooms enabling evening study sessions for students in rural communities.',
  },
];

export default function Gallery({ onNavigate }) {
  const [lightbox, setLightbox] = useState(null);
  const scrollTrackRef = useRef(null);

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  const goNext = () => {
    if (lightbox !== null) {
      setLightbox((lightbox + 1) % galleryItems.length);
    }
  };

  const goPrev = () => {
    if (lightbox !== null) {
      setLightbox((lightbox - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  // Scroll horizontal track left/right
  const scrollLeft = () => {
    if (scrollTrackRef.current) {
      scrollTrackRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollTrackRef.current) {
      scrollTrackRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section className="section--gallery" id="gallery">
      <div className="container">
        <div className="section-header-flex">
          <div>
            <span className="section-label">Media Gallery</span>
            <h2 className="section-title">
              Our Work <span className="gradient-text">In Action</span>
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'left', margin: 0 }}>
              Explore the energy projects, partnerships, and communities that the Africa Energy Bank is helping power across the continent.
            </p>
          </div>

          <div className="gallery-header-actions">
            <div className="gallery-slider-arrows">
              <button className="gslider-arrow" onClick={scrollLeft} aria-label="Scroll left">
                <ChevronLeft size={20} />
              </button>
              <button className="gslider-arrow" onClick={scrollRight} aria-label="Scroll right">
                <ChevronRight size={20} />
              </button>
            </div>

            <button onClick={() => onNavigate && onNavigate('gallery')} className="btn--pill-primary">
              <span>See Full Gallery</span>
              <div className="btn-circle-icon">
                <ArrowRight size={14} color="#ffffff" />
              </div>
            </button>
          </div>
        </div>

        {/* Straight Single Line Horizontal Scroll Track */}
        <div className="gallery-horizontal-wrapper">
          <div className="gallery-horizontal-track" ref={scrollTrackRef}>
            {galleryItems.map((item, index) => (
              <div
                key={item.title}
                className="gallery-card-row"
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
              >
                <div className="gallery-card-img-wrap">
                  <img src={item.src} alt={item.title} className="gallery-card-img" loading="lazy" />
                  <div className="gallery-card-overlay">
                    <ZoomIn size={28} color="#ffffff" />
                  </div>
                </div>
                <div className="gallery-card-info">
                  <span className="gallery-card-cat">{item.category}</span>
                  <h4 className="gallery-card-title">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="gallery-lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">
              <X size={24} />
            </button>

            <button className="lightbox-nav lightbox-nav--prev" onClick={goPrev} aria-label="Previous image">
              <ChevronLeft size={28} />
            </button>

            <div className="lightbox-img-wrap">
              <img src={galleryItems[lightbox].src} alt={galleryItems[lightbox].title} className="lightbox-img" />
            </div>

            <button className="lightbox-nav lightbox-nav--next" onClick={goNext} aria-label="Next image">
              <ChevronRight size={28} />
            </button>

            <div className="lightbox-caption">
              <span className="lightbox-cat">{galleryItems[lightbox].category}</span>
              <h3>{galleryItems[lightbox].title}</h3>
              <p>{galleryItems[lightbox].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
