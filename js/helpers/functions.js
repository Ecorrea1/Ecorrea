const navBar = document.querySelector('.navbar');
const URLcurrent = window.location;
let mode = URLcurrent.hostname == ('ecorrea.cl') ? 'production' : 'development';

const links = ['index.html','sobre-mi.html' ,'portafolio.html', 'contacto.html', 'politica-de-privacidad.html'];
const protocol = ['http://', 'https://'];
const linkMode = [`${URLcurrent.host}/`, 'ecorrea.cl/'];


const aLinkHome = document.getElementById('link-home');
const aLinkAbout = document.getElementById('link-about');
const aLinkProfile = document.getElementById('link-profile');
const aLinkContact = document.getElementById('link-contact');
// const aLinkPrivacy = document.getElementById('link-privacy');


if ( mode == 'production' ) {

    aLinkHome.href = protocol[1] + linkMode[1] + links[0];
    aLinkAbout.href = protocol[1] + linkMode[1] + links[1];
    aLinkProfile.href = protocol[1] + linkMode[1] + links[2];
    aLinkContact.href = protocol[1] + linkMode[1] + links[3];
    // aLinkPrivacy.href = protocol[1] + linkMode[1] + links[4];

} else {

    aLinkHome.href = protocol[0] + linkMode[0] + links[0];
    aLinkAbout.href = protocol[0] + linkMode[0] + links[1];
    aLinkProfile.href = protocol[0] + linkMode[0] + links[2];
    aLinkContact.href = protocol[0] + linkMode[0] + links[3];
    // aLinkPrivacy.href = protocol[0] + linkMode[0] + links[4];
    
}     

window.addEventListener('scroll', () => {

    if ( window.scrollY > 0 ) {

        navBar.classList.add('fixed-top');
        navBar.classList.remove('navbar-dark');
        navBar.classList.remove('bg-dark');
        navBar.classList.add('navbar-light');
        navBar.classList.add('bg-light');
        // navBar.style.backgroundColor = '#e3f2fd';
    } else {

        navBar.classList.remove('fixed-top');
        navBar.classList.remove('navbar-light');
        navBar.classList.remove('bg-light');
        navBar.classList.add('navbar-dark');
        // navBar.classList.add('bg-dark');
        navBar.style.backgroundColor = 'transparent !important';
    }
});