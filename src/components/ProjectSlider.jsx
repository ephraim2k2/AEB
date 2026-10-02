import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sun, Droplets, FlaskConical, Flame } from 'lucide-react';

import projSolar from '../assets/gallery_solar.png';
import projHydro from '../assets/gallery_hydro.png';
import projWind from '../assets/gallery_wind.png';
import projRefinery from '../assets/gallery_refinery.png';
import dangoteRefinery from '../assets/dangote_refinery.png';

export default function ProjectSlider() {
  const projects = [
    {
      id: 0,
      tag: 'Refinery · West Africa',
      title: 'Regional Oil Refinery & Downstream Grid',
      desc: '$2.4B facility financing modern downstream oil refining, pipeline interconnections, and intra-African petroleum product commerce across APPO member states.',
      chips: ['$2.4B Facility', '650k bpd Processing', '6,200 Jobs Created'],
      img: projRefinery,
      miniIcon: <Flame size={22} />,
      country: 'West & Central Africa',
      shortDesc: '$2.4B facility financing modern downstream refining and regional petroleum commerce.',
      badge: 'Operational 2024',
    },
    {
      id: 1,
      tag: 'Solar · Nigeria',
      title: 'Northern Nigeria Solar Corridor — 500MW',
      desc: 'The largest solar energy project in West Africa, delivering clean electricity to 5 million households across six northern states through a $1.8B blended finance package.',
      chips: ['$1.8B Financing', '5M Households', '2,400 Jobs Created'],
      img: projSolar,
      miniIcon: <Sun size={22} />,
      country: 'Nigeria · West Africa',
      shortDesc: '$1.8B solar corridor delivering clean electricity to 5 million households across northern Nigeria.',
      badge: '500MW Solar',
    },
    {
      id: 2,
      tag: 'Refinery · Nigeria',
      title: 'Dangote Refinery — Lagos, Nigeria',
      desc: 'Africa\'s largest single-train petroleum refinery with 650,000 barrels per day capacity, reducing the continent\'s dependence on imported refined petroleum products and creating thousands of jobs.',
      chips: ['$19B Investment', '650k bpd Capacity', '100,000+ Jobs'],
      img: dangoteRefinery,
      miniIcon: <Flame size={22} />,
      country: 'Nigeria · West Africa',
      shortDesc: 'Africa\'s largest 650,000 bpd refinery transforming Nigeria into a net exporter of refined petroleum products.',
      badge: 'Operational 2024',
    },
    {
      id: 3,
      tag: 'Clean Energy · Namibia',
      title: 'Namibia Wind & Clean Energy Export Hub',
      desc: '$2.1B facility for utility-scale wind power capacity, green ammonia production, and dedicated export terminal — positioning Southern Africa as a global clean energy leader.',
      chips: ['$2.1B Facility', '350kt Green Ammonia/yr', '4,500 Jobs Created'],
      img: projWind,
      miniIcon: <FlaskConical size={22} />,
      country: 'Namibia · Southern Africa',
      shortDesc: '$2.1B facility for wind power capacity, green ammonia production, and export terminal.',
      badge: 'Financial Close 2025',
    },
  ];

  const totalSlides = projects.length;
  // Track array with clone at start (last item) and clone at end (first item)
  const trackItems = [projects[totalSlides - 1], ...projects, projects[0]];

  const [trackIndex, setTrackIndex] = useState(1);
  const [animate, setAnimate] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef(null);
  const autoplayTimerRef = useRef(null);

  // Compute real index (0 to totalSlides - 1)
  const realIndex =
    trackIndex === 0
      ? totalSlides - 1
      : trackIndex === totalSlides + 1
      ? 0
      : trackIndex - 1;

  const goToTrackIndex = (targetIndex, shouldAnimate = true) => {
    if (isTransitioning && shouldAnimate) return;
    if (shouldAnimate) {
      setIsTransitioning(true);
      setAnimate(true);
    } else {
      setAnimate(false);
    }
    setTrackIndex(targetIndex);
  };

  const handleTransitionEnd = () => {
    if (trackIndex === 0) {
      setAnimate(false);
      setTrackIndex(totalSlides);
    } else if (trackIndex === totalSlides + 1) {
      setAnimate(false);
      setTrackIndex(1);
    }
    setIsTransitioning(false);
  };

  // Autoplay handler
  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimerRef.current = setInterval(() => {
      goToTrackIndex(trackIndex + 1, true);
    }, 5000);
  };

  const stopAutoplay = () => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [trackIndex]);

  // Touch Swipe
  const touchStartX = useRef(0);
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    stopAutoplay();
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - endX;
    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        goToTrackIndex(trackIndex + 1, true);
      } else {
        goToTrackIndex(trackIndex - 1, true);
      }
    }
    startAutoplay();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!sliderRef.current) return;
      const rect = sliderRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === 'ArrowLeft') {
        goToTrackIndex(trackIndex - 1, true);
      } else if (e.key === 'ArrowRight') {
        goToTrackIndex(trackIndex + 1, true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [trackIndex]);

  return (
    <section className="section section--projects" id="projects">
      <div className="container">
        <div className="section-header" id="projects-header">
          <span className="section-label">Featured Projects</span>
          <h2 className="section-title">
            Real Projects, <span className="gradient-text">Real Impact</span>
          </h2>
          <p className="section-subtitle">
            From the Sahara to the Sahel, from the Atlantic coast to the Horn of Africa — we finance energy that transforms lives.
          </p>
        </div>

        {/* Interactive Infinite Project Slider */}
        <div
          className="project-slider-wrapper"
          id="project-slider"
          ref={sliderRef}
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          <div
            className="project-slider-track"
            id="project-slider-track"
            style={{
              transform: `translateX(-${trackIndex * 100}%)`,
              transition: animate ? 'transform 0.65s cubic-bezier(0.25, 1, 0.5, 1)' : 'none',
            }}
            onTransitionEnd={handleTransitionEnd}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {trackItems.map((proj, idx) => (
              <div
                className={`project-card-hero slide ${proj.id === realIndex ? 'active' : ''}`}
                key={idx}
              >
                <img src={proj.img} alt={proj.title} className="project-hero-img" />
                <div className="project-hero-overlay">
                  <span className="project-tag">{proj.tag}</span>
                  <h3>{proj.title}</h3>
                  <p>{proj.desc}</p>
                  <div className="project-meta-row">
                    {proj.chips.map((chip, cIdx) => (
                      <span className="pmeta-chip" key={cIdx}>
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <button
            className="slider-nav-btn slider-nav-btn--prev"
            id="project-prev"
            aria-label="Previous Slide"
            onClick={() => goToTrackIndex(trackIndex - 1, true)}
          >
            <ChevronLeft size={22} />
          </button>
          <button
            className="slider-nav-btn slider-nav-btn--next"
            id="project-next"
            aria-label="Next Slide"
            onClick={() => goToTrackIndex(trackIndex + 1, true)}
          >
            <ChevronRight size={22} />
          </button>

          {/* Pagination Dots */}
          <div className="slider-dots" id="project-dots">
            {projects.map((p) => (
              <span
                key={p.id}
                className={`slider-dot ${realIndex === p.id ? 'active' : ''}`}
                onClick={() => goToTrackIndex(p.id + 1, true)}
              />
            ))}
          </div>
        </div>

        {/* Mini project cards grid */}
        <div className="projects-grid" id="projects-grid" onMouseEnter={stopAutoplay} onMouseLeave={startAutoplay}>
          {projects.map((p) => (
            <div
              key={p.id}
              className={`project-mini-card ${realIndex === p.id ? 'active' : ''}`}
              onClick={() => goToTrackIndex(p.id + 1, true)}
            >
              <div className="pmini-icon">{p.miniIcon}</div>
              <span className="pmini-country">{p.country}</span>
              <div className="pmini-name">{p.title}</div>
              <p className="pmini-body">{p.shortDesc}</p>
              <span className="pmini-badge">{p.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
