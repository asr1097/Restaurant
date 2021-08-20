import {clearMain} from "./helpers.js";
import phoneImg from "./images/phone.png";
import addressImg from "./images/address.png";
import emailImg from "./images/email.png";


const renderContact = () => {
    const content = document.getElementById('content');
    const mainDiv = document.getElementById('mainDiv');

    let addressDiv = document.createElement('div');
    addressDiv.classList.add('contactDiv');
    let address = document.createElement('p');
    address.textContent = 'Sherman, 42 Wallaby Way, Sydney';
    address.classList.add('c');
    let addressSpan = document.createElement('span');
    addressSpan.classList.add("adrSpan");
    let addrImg = document.createElement('img');
    addrImg.classList.add('spanImg', 'addressImg');
    addrImg.src = addressImg;
    addressSpan.appendChild(addrImg);
    address.appendChild(addressSpan);
    addressDiv.appendChild(address);

    let phoneDiv = document.createElement('div');
    phoneDiv.classList.add('contactDiv');
    let phone = document.createElement('p');
    let phoneSpan = document.createElement('span');
    let phImg = document.createElement('img');
    phImg.classList.add('spanImg', 'phoneImg');
    phImg.src = phoneImg;
    phoneSpan.appendChild(phImg);
    phone.textContent = '202-555-0133';
    phone.classList.add('c');
    phone.appendChild(phoneSpan);
    phoneDiv.appendChild(phone);

    let emailDiv = document.createElement('div');
    emailDiv.classList.add('contactDiv');
    let email = document.createElement('p');
    email.textContent = 'krustykrab@email.com';
    email.classList.add('c');
    let emailSpan = document.createElement('span');
    let emImg = document.createElement('img');
    emImg.classList.add('spanImg', 'emailImg')
    emImg.src = emailImg;
    emailSpan.appendChild(emImg);
    email.appendChild(emailSpan);
    emailDiv.appendChild(email);

    let map = document.createElement('div');
    map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.215708959365!2d150.60022731496906!3d-33.75509132059714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12883f97111b4b%3A0x72042424009f2705!2s42%20Rock%20Wallaby%20Way%2C%20Blaxland%20NSW%202774%2C%20Australia!5e0!3m2!1sen!2srs!4v1629319719304!5m2!1sen!2srs" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';

    mainDiv.appendChild(addressDiv);
    mainDiv.appendChild(phoneDiv);
    mainDiv.appendChild(emailDiv);
    mainDiv.appendChild(map);
    content.appendChild(mainDiv);
}

const makeContact = () => {
    clearMain();
    renderContact();
}

export {makeContact};