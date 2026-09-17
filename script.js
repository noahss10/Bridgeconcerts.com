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
});
