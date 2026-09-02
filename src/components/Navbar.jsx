import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, X, Menu } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Navbar({ currentPage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (currentPage !== 'home') return;
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, [currentPage]);

  const handleNavClick = (e, pageId, sectionId) => {
    e.preventDefault();
    setMenuOpen(false);
    setOpenDropdown(null);

    if (onNavigate) {
      onNavigate(pageId, sectionId);
    }
  };

  const handleDropdownEnter = (key) => {
    if (window.innerWidth > 1024) {
      clearTimeout(dropdownTimeout.current);
      setOpenDropdown(key);
    }
  };

  const handleDropdownLeave = () => {
    if (window.innerWidth > 1024) {
      dropdownTimeout.current = setTimeout(() => {
        setOpenDropdown(null);
      }, 150);
    }
  };

  const toggleMobileDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const navStructure = [
    { label: 'Home', pageId: 'home', sectionId: 'hero' },
    {
      label: 'About',
      key: 'about',
      children: [
        { label: 'Who We Are', pageId: 'about', sectionId: 'who-we-are' },
        { label: 'Key Objectives', pageId: 'about', sectionId: 'key-objectives' },
        { label: 'Impact', pageId: 'home', sectionId: 'impact' },
      ],
    },
    {
      label: 'Projects',
      key: 'projects',
      children: [
        { label: 'Our Projects', pageId: 'home', sectionId: 'projects' },
        { label: 'Gallery', pageId: 'gallery', sectionId: null },
      ],
    },
    {
      label: 'Engage',
      key: 'engage',
      children: [
        { label: 'Partners', pageId: 'home', sectionId: 'partners' },
        { label: 'Careers', pageId: 'careers', sectionId: null },
        { label: 'Media', pageId: 'media', sectionId: null },
      ],
    },
    { label: 'Contact', pageId: 'contact', sectionId: null },
  ];

  // Helper function to check if a specific child link is active
  const isChildActive = (child) => {
    if (child.pageId !== 'home') {
      return currentPage === child.pageId;
    }
    return currentPage === 'home' && activeSection === child.sectionId;
  };

  // Helper function to check if a standalone top-level item is active
  const isTopItemActive = (item) => {
    if (item.pageId !== 'home') {
      return currentPage === item.pageId;
    }
    return currentPage === 'home' && activeSection === (item.sectionId || 'hero');
  };

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav-capsule">
        <a href="#hero" onClick={(e) => handleNavClick(e, 'home', 'hero')} className="nav-logo">
          <img src={logo} alt="Africa Energy Bank" className="nav-logo-img" />
        </a>

        {/* Desktop & Mobile Navigation Links Container */}
        <div className={`nav-links ${menuOpen ? 'open' : ''}`} id="nav-menu">
          {navStructure.map((item) => {
            if (item.children) {
              const dropdownActive = item.children.some(isChildActive);
              const isExpanded = openDropdown === item.key;
              return (
                <div
                  key={item.key}
                  className={`nav-dropdown ${isExpanded ? 'is-open' : ''}`}
                  onMouseEnter={() => handleDropdownEnter(item.key)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    className={`nav-link nav-link--dropdown ${dropdownActive ? 'active' : ''}`}
                    aria-expanded={isExpanded}
                    onClick={() => toggleMobileDropdown(item.key)}
                  >
                    {item.label}
                    <ChevronDown size={14} className="nav-chevron" />
                  </button>

                  <div className="nav-dropdown-panel">
                    {item.children.map((child) => {
                      const childActive = isChildActive(child);
                      return (
                        <a
                          key={child.label}
                          href={`#${child.sectionId || child.pageId}`}
                          onClick={(e) => handleNavClick(e, child.pageId, child.sectionId)}
                          className={`nav-dropdown-link ${childActive ? 'active' : ''}`}
                        >
                          {child.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            } else {
              const itemActive = isTopItemActive(item);
              return (
                <a
                  key={item.label}
                  href={`#${item.sectionId || item.pageId}`}
                  onClick={(e) => handleNavClick(e, item.pageId, item.sectionId)}
                  className={`nav-link ${itemActive ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              );
            }
          })}

          <div className="mobile-menu-cta">
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact', null)} className="btn--pill-primary w-full">
              <span>Apply for Financing</span>
              <div className="btn-circle-icon">
                <ArrowRight size={14} color="#ffffff" />
              </div>
            </a>
          </div>
        </div>

        <div className="nav-right">
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact', null)} className="btn--pill-primary desktop-cta">
            <span>Apply for Financing</span>
            <div className="btn-circle-icon">
              <ArrowRight size={14} color="#ffffff" />
            </div>
          </a>

          {/* Interactive Hamburger Icon */}
          <button
            className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
