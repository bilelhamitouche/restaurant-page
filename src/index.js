import './style.css'
import { renderHome } from './home.js';
import { renderContact } from './contact.js';
import { renderMenu } from './menu.js';

// on load show home page
window.onload = () => {renderHome(content)};
  
// function for clearing the current page
const removeAllChildNodes = parent => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// grabbing all the necessary DOM elements
const content = document.querySelector('#content');
const homeBtn = document.querySelector('.home-btn');
const menuBtn = document.querySelector('.menu-btn');
const contactBtn = document.querySelector('.contact-btn');

homeBtn.addEventListener('click', () => {
  removeAllChildNodes(content);
  renderHome(content);
});

menuBtn.addEventListener('click', () => {
  removeAllChildNodes(content);
  renderMenu(content);
});

contactBtn.addEventListener('click', () => {
  removeAllChildNodes(content);
  renderContact(content);
});
