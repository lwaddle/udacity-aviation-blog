// Detect toggler button click
const navbarToggler = document.getElementsByClassName('navbar__toggler')[0];
navbarToggler.addEventListener('click', navbarTogglerClicked);

// Detect large screen and set display
const mediaQuery = window.matchMedia('(min-width: 768px)');
mediaQuery.addEventListener('change', setLargeDisplay)

function setLargeDisplay() {
    const navbar = document.getElementsByClassName('navbar__list')[0];
    const navbarIcon = document.getElementsByClassName('navbar__icon')[0];

    if (!navbar.classList.contains('navbar__list--hide')) {
        navbar.classList.add('navbar__list--hide');
    }

    if (navbarIcon.classList.contains('fa-window-close')) {
        navbarIcon.classList.remove('fa-window-close');
        navbarIcon.classList.add('fa-bars');
    }
}

function navbarTogglerClicked() {
    const navbarIcon = document.getElementsByClassName('navbar__icon')[0];
    const navbar = document.getElementsByClassName('navbar__list')[0];
    
    // Display/Hide the expanded menu
    if (navbar.classList.contains('navbar__list--hide')) {
        navbar.classList.remove('navbar__list--hide');
        
        /**
         * Change status of hamburger to active because the nav menu is
         * visible now.
         */
        navbarIcon.classList.remove('fa-bars');
        navbarIcon.classList.add('fa-window-close');
    }
    else {
        navbar.classList.add('navbar__list--hide');

        /**
         * Change status of hamburger to active because the nav menu is
         * visible now.
         */
        navbarIcon.classList.remove('fa-window-close');
        navbarIcon.classList.add('fa-bars');
    }
}