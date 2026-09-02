import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useGsapReveal(currentPage) {
  useEffect(() => {
    // Timeout gives React time to complete DOM layout rendering for current page
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // 1. Page Hero titles & labels (All Pages)
        gsap.from('.page-hero-title, .section-label, .page-hero-subtitle', {
          y: 35,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
        });

        // 2. Landing Hero Title Lines & underline
        if (document.querySelector('.hero-title .line')) {
          gsap.from('.hero-title .line', {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out',
          });

          gsap.from('.hero-subtitle, .hero-actions', {
            y: 30,
            opacity: 0,
            duration: 0.9,
            delay: 0.2,
            stagger: 0.15,
            ease: 'power3.out',
          });

          gsap.from('.hero-features-card', {
            x: 40,
            opacity: 0,
            duration: 1,
            delay: 0.3,
            ease: 'power3.out',
          });

          gsap.from('.hero-stats-card', {
            y: 40,
            opacity: 0,
            duration: 1,
            delay: 0.4,
            ease: 'power3.out',
          });
        }

        // 3. Section Titles & Labels (ScrollTriggered for all sections)
        gsap.utils.toArray('.section-header').forEach((header) => {
          gsap.from(header, {
            scrollTrigger: {
              trigger: header,
              start: 'top 88%',
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
          });
        });

        // 4. About Section (Home & AboutPage)
        if (document.querySelector('#about-visual')) {
          gsap.from('#about-visual', {
            scrollTrigger: {
              trigger: '#about-visual',
              start: 'top 85%',
            },
            x: -40,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
          });

          gsap.from('#about-text', {
            scrollTrigger: {
              trigger: '#about-text',
              start: 'top 85%',
            },
            x: 40,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
          });
        }

        // 5. Mandate Dual Cards (AboutPage)
        if (document.querySelector('.mandate-card')) {
          gsap.from('.mandate-card', {
            scrollTrigger: {
              trigger: '.mandate-dual-grid',
              start: 'top 85%',
            },
            y: 40,
            opacity: 0,
            duration: 0.9,
            stagger: 0.2,
            ease: 'power3.out',
          });
        }

        // 6. Strategic Objectives (Pillars)
        if (document.querySelector('.pillar-card')) {
          gsap.from('.pillar-card', {
            scrollTrigger: {
              trigger: '#pillars-grid',
              start: 'top 85%',
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
          });
        }

        // 7. Impact Cards
        if (document.querySelector('.impact-card')) {
          gsap.from('.impact-card', {
            scrollTrigger: {
              trigger: '#impact-cards',
              start: 'top 85%',
            },
            scale: 0.92,
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'back.out(1.5)',
          });
        }

        // 8. Featured Projects Slider
        if (document.querySelector('#projects')) {
          gsap.from('#project-slider, .projects-grid', {
            scrollTrigger: {
              trigger: '#projects',
              start: 'top 82%',
            },
            y: 40,
            opacity: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: 'power3.out',
          });
        }

        // 9. Gallery Rows & Cards
        if (document.querySelector('.gallery-card-row, .gallery-card')) {
          gsap.from('.gallery-card-row, .gallery-card', {
            scrollTrigger: {
              trigger: '#gallery',
              start: 'top 85%',
            },
            y: 35,
            opacity: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
          });
        }

        // 10. Culture Cards (CareersPage)
        if (document.querySelector('.culture-card')) {
          gsap.from('.culture-card', {
            scrollTrigger: {
              trigger: '.culture-grid',
              start: 'top 85%',
            },
            y: 35,
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
          });
        }

        // 11. Press Releases & Resources (MediaPage)
        if (document.querySelector('.press-card, .resource-card')) {
          gsap.from('.press-card, .resource-card', {
            scrollTrigger: {
              trigger: '.press-grid',
              start: 'top 85%',
            },
            y: 35,
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
          });
        }

        // 12. Contact Form & Regional Hub Cards (ContactPage & Contact)
        if (document.querySelector('.contact-form-card, .office-feature-card, .office-select-tab')) {
          gsap.from('.contact-form-card, .contact-hero-text, .office-feature-card, .office-select-tab', {
            scrollTrigger: {
              trigger: '#contact-hero, #regional-hubs, #contact',
              start: 'top 85%',
            },
            y: 35,
            opacity: 0,
            duration: 0.85,
            stagger: 0.12,
            ease: 'power3.out',
          });
        }

        // 13. FAQ items (ContactPage)
        if (document.querySelector('.faq-card-item')) {
          gsap.from('.faq-card-item', {
            scrollTrigger: {
              trigger: '.faq-accordion-container',
              start: 'top 88%',
            },
            y: 25,
            opacity: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power2.out',
          });
        }

        // Refresh ScrollTrigger calculations
        ScrollTrigger.refresh();
      });

      return () => ctx.revert();
    }, 60);

    return () => clearTimeout(timer);
  }, [currentPage]);
}

export default gsap;
