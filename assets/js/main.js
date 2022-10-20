/*
CONSEGNA

Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1: Trasformare la stringa foto in una immagine effettiva
BONUS 2: Organizzare i singoli membri in card/schede
*/

const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Waleter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    },
];

for (let i = 0; i < team.length; i++) {
    console.log('Member Team ', i + 1);
    console.log(team[i].name);
    console.log(team[i].role);
    console.log(team[i].image);
}

const containerEl = document.querySelector('.my_container');

for (let i = 0; i < team.length; i++) {

    const boxMarkup =  `<div class="box box_${i + 1}"></div>`;
    const memberNameMarkup = `<p>${team[i].name}</p>`;
    const memberRoleMarkup = `<p>${team[i].role}</p>`;
    
    containerEl.insertAdjacentHTML('beforeend', boxMarkup);
    const divEl = document.querySelector(`box_${i + 1}`);
    //divEl.insertAdjacentHTML('beforeend', memberNameMarkup);
    //divEl.insertAdjacentHTML('beforeend', memberRoleMarkup);
    console.log('DivEl: ', divEl);
}
