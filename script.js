import { colors } from './colors.js';

let wrapper;
let colorsForChange = [];

function addColors(){
  for (let i = 0; i < colors.length; i +=1) {
    const div = document.getElementById(i);
    const data = colors[i];
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
    if (!colorsForChange.length) {
      colorsForChange.push(event.target);
    } else {
      [colorsForChange[0].textContent, event.target.textContent] = [event.target.textContent, colorsForChange[0].textContent];
      [colorsForChange[0].style.backgroundColor, event.target.style.backgroundColor] = [event.target.style.backgroundColor, colorsForChange[0].style.backgroundColor];
      colorsForChange.length = 0;
    }
  }
}

document.addEventListener('DOMContentLoaded', startProgram);