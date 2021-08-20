import {clearMain} from './helpers.js'
import burgerImg from './images/burger.png'
import pizzaImg from './images/pizza.jpg'
import hotdogImg from './images/hotdog.jpg'
import sandwichImg from './images/sandwich.png'


const renderMenu = () => {
    const content = document.getElementById('content');

    let menuItems = [
        {itemName: 'Burger',
        itemImg: burgerImg,
        price: '$4'},

        {itemName: 'Pizza',
        itemImg: pizzaImg,
        price: '$2'},

        {itemName: 'Hotdog',
        itemImg: hotdogImg,
        price: '$2'},

        {itemName: 'Sandwich',
        itemImg: sandwichImg,
        price: '$2'}
    ];

    let mainDiv = document.getElementById('mainDiv');

    let menuDiv = document.createElement('div');
    menuDiv.style.cssText = `
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;`;

    menuDiv.id = 'menuDiv';

    for (let i = 0; i < 4; i++) {
        let element = document.createElement('div');
        element.style.display = 'flex';
        element.classList.add('menuElement');
        let image = document.createElement('img');
        image.src = menuItems[i]["itemImg"];
        let itName = document.createElement('p');
        itName.textContent = menuItems[i]["itemName"];
        itName.classList.add('menuText', 'itName');
        let itPrice = document.createElement('p');
        itPrice.textContent = menuItems[i]["price"];
        itPrice.classList.add('menuText');
        element.appendChild(image);
        element.appendChild(itName);
        element.appendChild(itPrice);
        menuDiv.appendChild(element);
    };

    mainDiv.appendChild(menuDiv);
    content.appendChild(mainDiv);
}

const makeMenu = () => {
    clearMain();
    renderMenu();
}

export {makeMenu};