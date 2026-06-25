/* ============================================
   Portfolio JavaScript - Mohammad Tanvir Islam
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

    // ==========================================
    // Navbar Scroll Effect
    // ==========================================
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // ==========================================
    // Smooth Scroll for Anchor Links
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ==========================================
    // Mobile Menu Close on Link Click
    // ==========================================
    const navbarCollapse = document.querySelector('.navbar-collapse');
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        });
    });

    // ==========================================
    // tsParticles — Hero Background
    // ==========================================
    if (typeof tsParticles !== 'undefined') {
        tsParticles.load("tsparticles", {
            fpsLimit: 60,
            particles: {
                number: { value: 55, density: { enable: true, area: 900 } },
                color: { value: ["#4a90e2", "#64c464", "#a78bfa"] },
                shape: { type: "circle" },
                opacity: { value: 0.45, random: { enable: true, minimumValue: 0.1 } },
                size:    { value: { min: 1, max: 3 }, random: true },
                links: {
                    enable:   true,
                    distance: 145,
                    color:    "#4a90e2",
                    opacity:  0.18,
                    width:    1
                },
                move: {
                    enable:    true,
                    speed:     1.2,
                    direction: "none",
                    random:    true,
                    straight:  false,
                    outModes:  { default: "out" }
                }
            },
            interactivity: {
                events: {
                    onHover: { enable: true,  mode: "grab"  },
                    onClick: { enable: true,  mode: "push"  }
                },
                modes: {
                    grab: { distance: 160, links: { opacity: 0.45 } },
                    push: { quantity: 3 }
                }
            },
            background: { color: "transparent" },
            detectRetina: true
        });
    }

    // ==========================================
    // GSAP + ScrollTrigger Animations
    // ==========================================
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // — Hero entrance —
        const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        heroTl
            .from('.hero h1',        { duration: 1,   y: 70, opacity: 0, delay: 0.2 })
            .from('.hero .lead',     { duration: 0.9, y: 50, opacity: 0 }, '-=0.6')
            .from('.hero p:not(.lead)', { duration: 0.9, y: 40, opacity: 0 }, '-=0.6')
            .from('.hero .mt-4',     { duration: 0.8, y: 30, opacity: 0 }, '-=0.5')
            .from('.profile-img',    { duration: 1.2, scale: 0.75, opacity: 0, ease: 'back.out(1.7)' }, '-=1');

        // — Section headers —
        gsap.utils.toArray('.section-header').forEach(el => {
            gsap.from(el, {
                scrollTrigger: { trigger: el, start: 'top 88%', once: true },
                y: 45, opacity: 0, duration: 0.8, ease: 'power3.out'
            });
        });

        // — About content —
        gsap.utils.toArray('.about-content').forEach(el => {
            gsap.from(el, {
                scrollTrigger: { trigger: el, start: 'top 85%', once: true },
                y: 40, opacity: 0, duration: 0.9, ease: 'power3.out'
            });
        });

        // — Timeline items (slide from left) —
        gsap.utils.toArray('.timeline-item').forEach((el, i) => {
            gsap.from(el, {
                scrollTrigger: { trigger: el, start: 'top 88%', once: true },
                x: -60, opacity: 0, duration: 0.75, delay: i * 0.08, ease: 'power3.out'
            });
        });

        // — Project cards —
        gsap.utils.toArray('.project-card').forEach((el, i) => {
            gsap.from(el, {
                scrollTrigger: { trigger: el, start: 'top 90%', once: true },
                y: 70, opacity: 0, scale: 0.9, duration: 0.8,
                delay: (i % 3) * 0.12, ease: 'back.out(1.4)'
            });
        });

        // — Education cards —
        gsap.utils.toArray('.education-card').forEach((el, i) => {
            gsap.from(el, {
                scrollTrigger: { trigger: el, start: 'top 88%', once: true },
                y: 55, opacity: 0, scale: 0.88, duration: 0.8,
                delay: i * 0.15, ease: 'back.out(1.7)'
            });
        });

        // — Skills categories —
        gsap.utils.toArray('.skills-category').forEach((el, i) => {
            gsap.from(el, {
                scrollTrigger: { trigger: el, start: 'top 88%', once: true },
                y: 40, opacity: 0, duration: 0.65, delay: (i % 3) * 0.1, ease: 'power2.out'
            });
        });

        // — Award cards —
        gsap.utils.toArray('.award-card').forEach((el, i) => {
            gsap.from(el, {
                scrollTrigger: { trigger: el, start: 'top 90%', once: true },
                y: 50, opacity: 0, scale: 0.9, duration: 0.7,
                delay: (i % 4) * 0.1, ease: 'back.out(1.4)'
            });
        });

        // — Cert cards —
        gsap.utils.toArray('.cert-card').forEach((el, i) => {
            gsap.from(el, {
                scrollTrigger: { trigger: el, start: 'top 90%', once: true },
                y: 40, opacity: 0, duration: 0.6, delay: (i % 4) * 0.08, ease: 'power2.out'
            });
        });

        // — Community cards (slide from right) —
        gsap.utils.toArray('.community-card').forEach((el, i) => {
            gsap.from(el, {
                scrollTrigger: { trigger: el, start: 'top 88%', once: true },
                x: 60, opacity: 0, duration: 0.75, delay: i * 0.12, ease: 'power3.out'
            });
        });

        // — Language cards —
        gsap.utils.toArray('.language-card').forEach((el, i) => {
            gsap.from(el, {
                scrollTrigger: { trigger: el, start: 'top 90%', once: true },
                y: 35, opacity: 0, scale: 0.9, duration: 0.6,
                delay: i * 0.1, ease: 'back.out(1.4)'
            });
        });

    } else {
        // Fallback: simple IntersectionObserver if GSAP not loaded
        const revealElements = [
            { selector: '.timeline-item',   cls: 'reveal'       },
            { selector: '.education-card',  cls: 'reveal-scale' },
            { selector: '.skills-category', cls: 'reveal'       },
            { selector: '.project-card',    cls: 'reveal-scale' },
            { selector: '.award-card',      cls: 'reveal-scale' },
            { selector: '.cert-card',       cls: 'reveal-scale' },
            { selector: '.community-card',  cls: 'reveal-right' },
            { selector: '.language-card',   cls: 'reveal-scale' },
            { selector: '.about-content',   cls: 'reveal'       },
            { selector: '.section-header',  cls: 'reveal'       },
        ];
        revealElements.forEach(({ selector, cls }) => {
            document.querySelectorAll(selector).forEach(el => el.classList.add(cls));
        });
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const siblings = Array.from(entry.target.parentElement.children);
                    const idx = siblings.indexOf(entry.target);
                    setTimeout(() => entry.target.classList.add('visible'), idx * 70);
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
        document.querySelectorAll('.reveal, .reveal-right, .reveal-scale').forEach(el => obs.observe(el));
    }

    // ==========================================
    // Vanilla-Tilt — 3D Card Hover
    // ==========================================
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(
            document.querySelectorAll('.project-card, .education-card, .award-card, .cert-card, .community-card, .language-card'),
            {
                max:         8,
                speed:       400,
                glare:       true,
                'max-glare': 0.12,
                scale:       1.025,
                perspective: 900
            }
        );
    }

    // ==========================================
    // Lightbox for Zoomable Images
    // ==========================================
    const lightbox      = document.getElementById('lightbox');
    const lightboxImg   = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');

    document.querySelectorAll('.img-zoomable').forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    lightbox.addEventListener('click', closeLightbox);
    lightboxClose.addEventListener('click', (e) => { e.stopPropagation(); closeLightbox(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

    // ==========================================
    // Active Nav Link on Scroll
    // ==========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks  = document.querySelectorAll('.nav-link[href^="#"]');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    }, { threshold: 0.35 });

    sections.forEach(sec => sectionObserver.observe(sec));
});
