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

    const rosterToggle = document.getElementById('rosterToggle');
    const rosterList = document.getElementById('rosterList');
    const rosterCount = document.getElementById('rosterCount');

    if (rosterToggle && rosterList && rosterCount) {
        const total = rosterList.querySelectorAll('li').length;
        const shown = total - rosterList.querySelectorAll('li.extra').length;

        rosterCount.textContent = shown + ' of ' + total + ' shown';

        rosterToggle.addEventListener('click', function () {
            const expanded = rosterList.classList.toggle('show-all');
            rosterToggle.textContent = expanded ? '− Show fewer' : '+ Show full roster';
            rosterToggle.setAttribute('aria-expanded', String(expanded));
            rosterCount.textContent = expanded
                ? total + ' of ' + total + ' shown'
                : shown + ' of ' + total + ' shown';
        });
    }

    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});
