// ==== Script for Navigation Color Transitions ==== //
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


// ==== Script for Portfolio Category Display ==== //
const amazonKdpCategory = document.querySelector('.amazon--kdp--button');
const cryptoTradingCategory = document.querySelector('.crypto--trading--button');
const writingCategory = document.querySelector('.writing--button');


let activeAmazonKdp = () => {
    amazonKdpCategory.classList.remove('hidden');
    cryptoTradingCategory.classList.add('hidden');
    writingCategory.classList.add('hidden');
}
let activeCryptoTrading = () => {
    amazonKdpCategory.classList.add('hidden');
    cryptoTradingCategory.classList.remove('hidden');
    writingCategory.classList.add('hidden');
}
let activeWriting = () => {
    amazonKdpCategory.classList.add('hidden');
    cryptoTradingCategory.classList.add('hidden');
    writingCategory.classList.remove('hidden');
}