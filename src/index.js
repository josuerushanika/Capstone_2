import './style.css';
import logo from './assets/logo.png';
import displayDOM from './modules/displayDOM.js';

const logoImg = document.getElementById('logo');
logoImg.src = logo;

const newFunc = async () => {
  await displayDOM();
};
newFunc();
