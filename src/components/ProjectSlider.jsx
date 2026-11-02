import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sun, Droplets, FlaskConical, Flame } from 'lucide-react';

import projSolar from '../assets/gallery_solar.png';
import projHydro from '../assets/gallery_hydro.png';
import projWind from '../assets/gallery_wind.png';
import projRefinery from '../assets/gallery_refinery.png';

export default function ProjectSlider() {
  const projects = [
    {
      id: 0,
      tag: 'Priority Sector · Downstream',
      title: 'Downstream Refining & Regional Processing',
      desc: 'Catalyzing investments in modern petroleum refining, rehabilitation of strategic assets, and intra-African petroleum product commerce across APPO member states to eliminate dependency on extra-continental imports.',
      chips: ['Downstream Processing', 'Supply Chain Security', 'Regional Commerce'],
      img: projRefinery,
      miniIcon: <Flame size={22} />,
      country: 'APPO Member States',
      shortDesc: 'Strategic capital for modern refining and regional petroleum distribution networks.',
      badge: 'Priority Focus Area',
    },
    {
      id: 1,
      tag: 'Priority Sector · Gas Infrastructure',
      title: 'Cross-Border Gas & Baseload Power',
      desc: 'Unlocking Africa\'s 650 TCF of natural gas reserves through cross-border pipeline networks, domestic gas-to-power facilities, and clean LPG distribution to substitute high-emission biomass fuels.',
      chips: ['Cross-Border Pipelines', 'Gas-to-Power', 'LPG Clean Cooking'],
      img: projHydro,
      miniIcon: <Droplets size={22} />,
      country: 'Pan-African Corridors',
      shortDesc: 'Financing cross-border gas pipelines and transition power generation.',
      badge: 'Priority Focus Area',
    },
    {
      id: 2,
      tag: 'Priority Sector · Clean Energy',
      title: 'Utility-Scale Solar & Wind Corridors',
      desc: 'Deploying blended finance facilities for utility-scale solar photovoltaic arrays, wind corridors, and commercial battery storage across sun-rich African regions to expand clean electricity access.',
      chips: ['Utility-Scale Solar', 'Wind Corridors', 'Battery Energy Storage'],
      img: projSolar,
      miniIcon: <Sun size={22} />,
      country: 'Sahel & Sub-Saharan Africa',
      shortDesc: 'Blended finance for utility solar, wind generation, and battery storage.',
      badge: 'Priority Focus Area',
    },
    {
      id: 3,
      tag: 'Priority Sector · Interconnection',
      title: 'Regional Grid Interconnection & Hydrogen',
      desc: 'Accelerating high-voltage transmission interconnectors linking regional power pools alongside next-generation green hydrogen and clean ammonia export infrastructure.',
      chips: ['Power Pool Interconnectors', 'Grid Integration', 'Green Hydrogen'],
      img: projWind,
      miniIcon: <FlaskConical size={22} />,
      country: 'Regional Power Pools',
      shortDesc: 'Transmission interconnectors and clean hydrogen/ammonia infrastructure.',
      badge: 'Priority Focus Area',
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
          <span className="section-label">Target Investment Pipeline</span>
          <h2 className="section-title">
            Priority Investment <span className="gradient-text">Focus Areas</span>
          </h2>
          <p className="section-subtitle">
            Directing strategic debt, equity, and syndicated financing across core energy verticals in APPO member states to ensure energy sovereignty and a just transition.
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
