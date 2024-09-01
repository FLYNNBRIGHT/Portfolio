const homeButton = document.querySelector('.home--butt');
const aboutButton = document.querySelector('.about--butt');
const servicesButton = document.querySelector('.services--butt');
const portfolioButton = document.querySelector('.portfolio--butt');
const contactButton = document.querySelector('.contact--butt');


let activeHome = () => {
    homeButton.classList.add('active');
    aboutButton.classList.remove('active');
    servicesButton.classList.remove('active');
    portfolioButton.classList.remove('active');
    contactButton.classList.remove('active');
}
let activeAbout = () => {
    homeButton.classList.remove('active');
    aboutButton.classList.add('active');
    servicesButton.classList.remove('active');
    portfolioButton.classList.remove('active');
    contactButton.classList.remove('active');
}
let activeServices = () => {
    homeButton.classList.remove('active');
    aboutButton.classList.remove('active');
    servicesButton.classList.add('active');
    portfolioButton.classList.remove('active');
    contactButton.classList.remove('active');
}
let activePortfolio = () => {
    homeButton.classList.remove('active');
    aboutButton.classList.remove('active');
    servicesButton.classList.remove('active');
    portfolioButton.classList.add('active');
    contactButton.classList.remove('active');
}
let activeContact = () => {
    homeButton.classList.remove('active');
    aboutButton.classList.remove('active');
    servicesButton.classList.remove('active');
    portfolioButton.classList.remove('active');
    contactButton.classList.add('active');
}
