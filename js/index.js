const name = 'EMMANUEL CORREA';
const profession = ['FULL-STACK DEVELOPER','WEB DEVELOPER', 'FLUTTER DEVELOPER', 'PODCASTER'];
const lng = [{libs:'Javascripts', age: 2}, {libs:'TypeScript', age: 2}, {libs:'PHP', age: 2 }, {libs:'C#', age: 1 }, {libs:'Dart', age: 2}];
const tecnologies = [{libs:'React', age: 1}, {libs:'Flutter', age: 2}, {libs:'Codeigneiter', age: 2}, {libs:'Node', age: 1 }, {libs:'Express', age: 1}];
const portfolio = [{title:'INVAPP', description:'App de inventario para iglesia comisionado sin fronteras, santiago-Chile', type:'full' ,url:'iglesiacsf.cl/invapp/', img:''}, {title:'TRANSMITO.CL', description:'', url:'transmito.cl/', img:'', type: 'web'}, {title:'OPTICA - MONTECARLOS', description:'Ecommerce realizado con WordPress para optica de la ciudad de Los Lagos - Chile', url:'opticamontecarlos.cl/', img:'', type:'webs'}];
const titleLinksText = [`Mi nombre es ${name}` ,`y soy ${ profession[0] }.`];
const age = '27';
const address = 'Los Lagos, Valdivia, Chile';
const city = 'Los Lagos';
const email = 'ebcorreac@gmail.com';
const phone = '+56933329406';
const website = 'ecorrea.cl';
const wtspApi = 'https://api.whatsapp.com/send?phone=56933329406&text=Hola,%20me%20gustaría%20más%20información%20sobre%20tu%20trabajo';


const body = document.getElementById('body');
// const navBar = document.querySelector('.navbar');
const titleName = document.getElementById('name');
const titleProfession = document.getElementById('profession');
const titleLinks = document.querySelector('.links');
const btnMoveDown = document.getElementById('btn-move-down');
const hello = document.getElementById('hello');
const wspLink = document.getElementById('link_wsp');

wspLink.href = wtspApi;
titleName.innerHTML = name;
titleLinks.innerHTML = `<h2> ${titleLinksText[0].toUpperCase()} </h2> <h2> ${titleLinksText[1].toUpperCase()} </h2>`;

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


// window.addEventListener('scroll', () => {

//     if ( window.scrollY > 0 ) {
//         navBar.classList.add('fixed-top');
//         navBar.classList.remove('navbar-dark');
//         navBar.classList.remove('bg-dark');
//         navBar.classList.add('navbar-light');
//         navBar.classList.add('bg-light');
//         // navBar.style.backgroundColor = '#e3f2fd';
//     } 
//     else {
//         navBar.classList.remove('fixed-top');
//         navBar.classList.remove('navbar-light');
//         navBar.classList.remove('bg-light');
//         navBar.classList.add('navbar-dark');
//         // navBar.classList.add('bg-dark');
//         navBar.style.backgroundColor = 'transparent !important';
//     }
// })

btnMoveDown.addEventListener('click', () => {
    window.scrollTo({
        top: 10000,
        behavior: 'smooth'
    });
});

changeProfession();