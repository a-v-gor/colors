import { colors } from './colors.js';

let wrapper;
let colorsForChange = [];
let colorsArr = JSON.parse(localStorage.getItem('colors')) || [].concat(colors);

function addColors(){
  for (let i = 0; i < colorsArr.length; i +=1) {
    const div = document.getElementById(i);
    const data = colorsArr[i];
    div.innerText = data.name.toUpperCase();
    div.style.backgroundColor = '#' + data.color;
  };
};

function insertDivs() {
  let count = 0;
  for (let i = 0; i < 12; i += 1) {
    for (let j = 0; j < 22; j += 1) {
      const newDiv = document.createElement('div');
      newDiv.id = count++;
      newDiv.className = 'color-block';
      wrapper.append(newDiv);
    }    
  }
  addColors();
}
function startProgram() {
  wrapper = document.querySelector('.wrapper');
  wrapper.addEventListener('click', changeColors);
  insertDivs();
}

function changeColors(event) {
  if (event.target.className === 'color-block') {
    const infoBlock = document.querySelector('.info');
    if (!colorsForChange.length) {
      colorsForChange.push(event.target);
      console.log(event.target.textContent);
      infoBlock.innerText = event.target.textContent;
    } else {
      [colorsForChange[0].textContent, event.target.textContent] = [event.target.textContent, colorsForChange[0].textContent];
      [colorsForChange[0].style.backgroundColor, event.target.style.backgroundColor] = [event.target.style.backgroundColor, colorsForChange[0].style.backgroundColor];
      console.log();
      [colorsArr[colorsForChange[0].id], colorsArr[event.target.id]] = [colorsArr[event.target.id], colorsArr[colorsForChange[0].id]];
      colorsForChange.length = 0;
      infoBlock.innerText = 'Info';
    }
  }
}

function saveGameData() {
  console.log(colorsArr);
  localStorage.setItem('colors', JSON.stringify(colorsArr))
}

document.addEventListener('DOMContentLoaded', startProgram);
window.addEventListener('beforeunload', saveGameData);