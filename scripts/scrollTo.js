'use strict'

const servises = document.querySelector('.servises__contanier');
const ourObjects = document.querySelector('.objects__contanier');
const contactUs = document.querySelector('.contact__contanier');
const aboutContanier = document.querySelector('.about__contanier');
const headerHeight = 120

document.querySelector('.servises-button').addEventListener('click', () => {
    servises.scrollIntoView();
});

// document.querySelector('.objects-button').addEventListener('click', () => {
//     ourObjects.scrollIntoView();
// });

document.querySelector('.contact-button').addEventListener('click', () => {
    contactUs.scrollIntoView();
});

document.querySelector('.about-button').addEventListener('click', () => {
    aboutContanier.scrollIntoView();
});
