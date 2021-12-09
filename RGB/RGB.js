let redBtn = document.querySelector('#red');
let greenBtn = document.querySelector('#green');
let blueBtn = document.querySelector('#blue');
let body = document.querySelector('body');
let whiteBtn = document.createElement('button');

body.append(whiteBtn);
whiteBtn.textContent = 'W';

redBtn.addEventListener('click',()=>body.style.backgroundColor = 'red');
greenBtn.addEventListener('click',()=>body.style.backgroundColor = 'green');
blueBtn.addEventListener('click',()=>body.style.backgroundColor = 'blue');
whiteBtn.addEventListener('click',()=>body.style.backgroundColor = 'white');
console.log(body);

