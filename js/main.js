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
    // Scroll-Reveal Animation
    // ==========================================
    const revealElements = [
        { selector: '.timeline-item',   cls: 'reveal',       delay: 80  },
        { selector: '.education-card',  cls: 'reveal-scale', delay: 100 },
        { selector: '.skills-category', cls: 'reveal',       delay: 100 },
        { selector: '.project-card',    cls: 'reveal-scale', delay: 80  },
        { selector: '.award-card',      cls: 'reveal-scale', delay: 80  },
        { selector: '.cert-card',       cls: 'reveal-scale', delay: 60  },
        { selector: '.community-card',  cls: 'reveal-right', delay: 80  },
        { selector: '.language-card',   cls: 'reveal-scale', delay: 80  },
        { selector: '.about-content',   cls: 'reveal',       delay: 0   },
        { selector: '.section-header',  cls: 'reveal',       delay: 0   },
    ];

    revealElements.forEach(({ selector, cls }) => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add(cls);
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                const el = entry.target;
                // stagger siblings by counting visible index
                const siblings = Array.from(el.parentElement.children);
                const idx = siblings.indexOf(el);
                setTimeout(() => {
                    el.classList.add('visible');
                }, idx * 70);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal, .reveal-right, .reveal-scale').forEach(el => {
        observer.observe(el);
    });

    // ==========================================
    // Lightbox for Zoomable Images
    // ==========================================
    const lightbox    = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
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

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });

    // ==========================================
    // Active Nav Link on Scroll
    // ==========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

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
