document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', function () {
        const isOpen = navMenu.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navMenu.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    window.addEventListener('scroll', function () {
        navbar.classList.toggle('scrolled', window.scrollY > 20);

        let current = '';
        document.querySelectorAll('section[id]').forEach(function (section) {
            if (window.scrollY >= section.offsetTop - 200) {
                current = section.id;
            }
        });

        navLinks.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });
    });

    const clientsToggle = document.getElementById('clientsToggle');
    const clientsGrid = document.getElementById('clientsGrid');

    if (clientsToggle && clientsGrid) {
        clientsToggle.addEventListener('click', function () {
            const expanded = clientsGrid.classList.toggle('show-all');
            clientsToggle.textContent = expanded ? 'Show less' : 'Show all';
            clientsToggle.setAttribute('aria-expanded', String(expanded));
        });
    }

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    document.querySelectorAll('.service-card').forEach(function (card, i) {
        card.style.transitionDelay = (i % 3) * 0.08 + 's';
        observer.observe(card);
    });

    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});
