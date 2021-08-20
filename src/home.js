import {clearMain} from "./helpers.js";


const makeHome = () => {
    clearMain();
    const mainDiv = document.getElementById('mainDiv');
    const welcome = document.createElement('p');
    welcome.textContent = 'Welcome to...';
    const titleSm = document.createElement('p');
    titleSm.textContent = 'Fast Food';
    titleSm.classList.add('smTitle');
    const titleBg = document.createElement('p');
    titleBg.textContent = 'Krusty Krab';
    titleBg.classList.add('font1');
    const br = document.createElement('hr');
    const end = document.createElement('p');
    end.textContent = 'Your favourite place for snack!';
    mainDiv.appendChild(welcome);
    mainDiv.appendChild(titleSm);
    mainDiv.appendChild(titleBg);
    mainDiv.appendChild(br);
    mainDiv.appendChild(end);
}

export {makeHome};