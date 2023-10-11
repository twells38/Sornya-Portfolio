/*let text = document.getElementById('text'); // parallax
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 3 + 'px';
});
*/

/**Menu icon navigation */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navigation');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
/**End menu icon navigation */

/** scroll section */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

//sticky navar
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
   })


    /**sticky navbar */
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
    /** remove menu icon navigation bar when clisk navbar link(scroll) */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    /**End code remove navbar */
     
    
}
/********** */




/**start mode */
let darkModeIcon = document.querySelector('#darkMode-icon');
darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}
/**End dark mode */

/**Scroll reveal */
ScrollReveal({
    reset: true ,
    distance: '80px',
    duration: 2000,
    delay: 400,

});
ScrollReveal().reveal('.about-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.project-box,.contact-item,#text,.section-heading', { origin: 'bottom' });
ScrollReveal().reveal('.about-content h1,.project-box img', { origin: 'left' });
ScrollReveal().reveal('.about-right', { origin: 'right' });
ScrollReveal().reveal('.about-left', { origin: 'left' });
ScrollReveal().reveal('', { origin: 'bottom' });
ScrollReveal().reveal('.my-skills', { origin: 'left' });
ScrollReveal().reveal('.project-layer h4', { origin: 'right' });
