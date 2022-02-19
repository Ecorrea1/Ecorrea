const name = 'EMMANUEL CORREA';
const profession = ['FULL-STACK DEVELOPER','WEB DEVELOPER', 'FLUTTER DEVELOPER', 'PODCASTER'];
const age = '27';
const address = 'Calle San Juan, San Juan, San Juan, Puerto Rico';
const city = 'Los Lagos';
const email = 'ebcorreac@gmail.com';
const phone = '+56933329406';
const website = 'ecorrea.cl';
const wtspApi = 'https://api.whatsapp.com/send?phone=56933329406&text=Hola,%20me%20gustaría%20más%20información%20sobre%20tu%20trabajo';

const titleName = document.getElementById('name');
const titleProfession = document.getElementById('profession');
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

changeProfession();