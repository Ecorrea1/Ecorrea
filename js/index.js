const name = 'EMMANUEL CORREA';
const profession = ['FULL-STACK DEVELOPER','WEB DEVELOPER', 'FLUTTER DEVELOPER', 'PODCASTER'];
const age = '27';
const address = 'Calle San Juan, San Juan, San Juan, Puerto Rico';
const city = 'Los Lagos';
const email = 'ebcorreac@gmail.com';
const phone = '+56933329406';
const website = 'ecorrea.cl';
const wtspApi = 'https://api.whatsapp.com/send?phone=56933329406&text=Hola,%20me%20gustaría%20más%20información%20sobre%20tu%20trabajo';

const navBar = document.querySelector('.navbar');
const titleName = document.getElementById('name');
const titleProfession = document.getElementById('profession');
const btnMoveDown = document.getElementById('btn-move-down');
const hello = document.getElementById('hello');
const wspLink = document.getElementById('link_wsp');

wspLink.href = wtspApi;
titleName.innerHTML = name;

function changeProfession() {

    let prof = 0;
    titleProfession.innerHTML = profession[prof];
    setInterval(() => {
        if (prof < profession.length) {
            titleProfession.innerHTML = profession[prof];
            prof++;
        } else {
            prof = 0;
        }
    }, 1500);

}


window.addEventListener('scroll', () => {
    if ( window.scrollY > 0 ) {

        navBar.classList.add('fixed-top');
        navBar.classList.remove('navbar-dark');
        navBar.classList.remove('bg-dark');
        navBar.classList.add('navbar-light');
        navBar.classList.add('bg-light');
        // navBar.style.backgroundColor = '#e3f2fd';
        
    } 
    else {
        navBar.classList.remove('fixed-top');
        navBar.classList.remove('navbar-light');
        navBar.classList.remove('bg-light');
        navBar.classList.add('navbar-dark');
        // navBar.classList.add('bg-dark');
        navBar.style.backgroundColor = 'transparent !important';
    }
})

btnMoveDown.addEventListener('click', () => {
    window.scrollTo({
        top: 10000,
        behavior: 'smooth'
    });
});

changeProfession();