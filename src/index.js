
import pageLoad from './pageLoad.js';
import removeContent from './removeContent.js';
import  loadMenu from './menu.js';
import createRestaurantHomePage from './restaurant.js';
import loadContact from './contact.js';

//loads page

pageLoad();

const Menu = document.querySelector('.menu');
Menu.addEventListener('click',(e) => {
    removeContent();
    loadMenu();}
    )

const homeButton = document.querySelector('.home');
homeButton.addEventListener('click', (e)=> {
    removeContent();
    createRestaurantHomePage();
})

const contactButton = document.querySelector('.contact');
contactButton.addEventListener('click', (e)=>{
    removeContent();
    loadContact();
})

