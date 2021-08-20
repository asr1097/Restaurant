import {makeHome} from './home.js';
import {makeContact} from './contact.js';
import {makeMenu} from './menu.js';
import "./style.css";

const content = document.getElementById('content');

const makeBase = () => {
    const navDiv = document.createElement('div');
    navDiv.classList.add('navDiv');
    const nav = document.createElement('nav');
    const home = document.createElement('a');
    home.classList.add('nav-item');
    home.textContent = 'Home';
    home.id = 'home';
    const menu = document.createElement('a');
    menu.classList.add('nav-item');
    menu.textContent = 'Menu';
    menu.id = 'menu';
    const contact = document.createElement('a');
    contact.classList.add('nav-item');
    contact.textContent = 'Contact';
    contact.id = 'contact';
    const mainDiv = document.createElement('div');
    mainDiv.id = 'mainDiv';
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);
    navDiv.appendChild(nav);
    content.appendChild(navDiv);
    content.appendChild(mainDiv);

    document.querySelectorAll('.nav-item').forEach(item => item.addEventListener('click', 
        changeTab));
}

const changeTab = (ev) => {
    let item = ev.target;
    if (item.textContent === 'Home') {makeHome()}
    else if (item.textContent === 'Menu') {makeMenu()}
    else if (item.textContent === 'Contact') {makeContact()};
}

if (!document.querySelector('.navDiv')) {
    makeBase();
    makeHome();
}



