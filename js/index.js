const name = 'EMMANUEL CORREA';
const age = '27';
const address = 'Los Lagos, Valdivia, Chile';
const city = 'Los Lagos';
const email = 'ebcorreac@gmail.com';
const phone = '+56933329406';
const website = 'ecorrea.cl/';

const profession = ['FULL-STACK DEVELOPER','WEB DEVELOPER', 'FLUTTER DEVELOPER', 'PODCASTER'];
const titleLinksText = [`Mi nombre es ${name}` ,`y soy ${ profession[0] }.`];


const lng = [{libs:'Javascripts', age: 2}, {libs:'TypeScript', age: 2}, {libs:'PHP', age: 2 }, {libs:'C#', age: 1 }, {libs:'Dart', age: 2}];
const tecnologies = [{libs:'React', age: 1}, {libs:'Flutter', age: 2}, {libs:'Codeigneiter', age: 2}, {libs:'Node', age: 1 }, {libs:'Express', age: 1}];
const dbase = [{libs:'MongoDB', age: 1}, {libs:'MySQL', age: 1}, {libs:'SQLServer', age: 2 }, {libs:'Firebase', age: 1 }, {libs:'Firestore', age: 1}];
const tools = [{libs:'Git', age: 1}, {libs:'GitHub', age: 1}, {libs:'GitLab', age: 1 }, {libs:'GitKraken', age: 1 }, {libs:'GitFlow', age: 1}];
const editors = [{libs:'VS Code', age: 1}, {libs:'Sublime Text', age: 1}, {libs:'Atom', age: 1 }, {libs:'PhpStorm', age: 1 }, {libs:'WebStorm', age: 1}];


const numberFinishedProjects = 8;
const numberStartingProjects = 2;
const numberHrsSold = '1200 HRS';

const finishProjects = document.getElementById('finish-projects');
const startingProjects = document.getElementById('starting-projects');
const hrsSold = document.getElementById('hrs-sold');

const portfolio = [{title:'INVAPP', description:'App de inventario para iglesia comisionado sin fronteras, santiago-Chile', type:'full' ,url:'iglesiacsf.cl/invapp/', img:''}, {title:'TRANSMITO.CL', description:'', url:'transmito.cl/', img:'', type: 'web'}, {title:'OPTICA - MONTECARLOS', description:'Ecommerce realizado con WordPress para optica de la ciudad de Los Lagos - Chile', url:'opticamontecarlos.cl/', img:'', type:'webs'}];
const wtspApi = 'https://api.whatsapp.com/send?phone=56933329406&text=Hola,%20me%20gustaría%20más%20información%20sobre%20tu%20trabajo';


const body = document.getElementById('body');
const titleName = document.getElementById('name');
const titleProfession = document.getElementById('profession');
const titleLinks = document.querySelector('.links');
const btnMoveDown = document.getElementById('btn-move-down');
const hello = document.getElementById('hello');


const pLanguage = document.getElementById('p-lng');
const pframeworks = document.getElementById('p-frameworks');
const pDataBase = document.getElementById('p-database');
const pTools = document.getElementById('p-tools');
const pEditors = document.getElementById('p-editors');
    
pLanguage.innerHTML = lng.map(item => `${item.libs}`).join(', ');
pframeworks.innerHTML = tecnologies.map(item => `${item.libs}`).join(', ');
pDataBase.innerHTML = dbase.map(item => `${item.libs}`).join(', ');
pTools.innerHTML = tools.map(item => `${item.libs}`).join(', ');
pEditors.innerHTML = editors.map(item => `${item.libs}`).join(', ');

const wspLink = document.getElementById('link_wsp');

wspLink.href = wtspApi;
titleName.innerHTML = name;
titleLinks.innerHTML = `<h2> ${titleLinksText[0].toUpperCase()} ${titleLinksText[1].toUpperCase()} </h2>`;

finishProjects.innerHTML = numberFinishedProjects;
startingProjects.innerHTML = numberStartingProjects;
hrsSold.innerHTML = numberHrsSold;

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

btnMoveDown.addEventListener('click', () => {
    window.scrollTo({
        top: 10000,
        behavior: 'smooth'
    });
});

changeProfession();