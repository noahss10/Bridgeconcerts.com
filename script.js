document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.mast-link');

    navToggle.addEventListener('click', function () {
        const open = navMenu.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(open));
        navToggle.textContent = open ? 'Close' : 'Menu';
    });

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navMenu.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.textContent = 'Menu';
        });
    });

    window.addEventListener('scroll', function () {
        let current = '';
        document.querySelectorAll('section[id]').forEach(function (section) {
            if (window.scrollY >= section.offsetTop - 160) {
                current = section.id;
            }
        });

        navLinks.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });
    });

    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    if (!document.documentElement.classList.contains('js-motion')) return;
    window.__revealReady = true;

    const reveal = function (el, delay) {
        el.style.setProperty('--d', delay + 's');
        el.classList.add('is-in');
    };

    // Masthead settles first, then the page rises under it.
    const onLoad = document.querySelectorAll('.toc, .hero-title, .hero-body, .hero-actions, .hero .plate');
    requestAnimationFrame(function () {
        onLoad.forEach(function (el, i) { reveal(el, i * 0.12); });
    });

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                reveal(entry.target, entry.target.dataset.delay || 0);
                observer.unobserve(entry.target);
            });
        },
        { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
    );

    document.querySelectorAll(
        '.sec-head, .legend, .item, .mission-body, .mission-sig, .split-copy, .statement, .statement-note, .contact-line, .section .plate'
    ).forEach(function (el) {
        observer.observe(el);
    });

    document.querySelectorAll('.item').forEach(function (el, i) {
        el.dataset.delay = (i % 3) * 0.09;
    });

    document.querySelectorAll('.contact-line').forEach(function (el, i) {
        el.dataset.delay = i * 0.07;
    });
});
