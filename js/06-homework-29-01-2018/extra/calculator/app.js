"use strict";

let num;
let operation;
let numDiv = document.querySelector('.calc-numbers');
let operationDiv = document.querySelector('.calc-operations');
let inputField = document.querySelector('#inputField');

let body = document.querySelector('body');

document.addEventListener('keydown', function (event) {
  event.preventDefault();
  inputField.focus();
});

numDiv.addEventListener('click', function (event) {
  event.preventDefault();
  let target = event.target;
  if (target.className !== 'calc-numbers__sym') return;
  getNum(target);
});

operationDiv.addEventListener('click', function (event) {
  event.preventDefault();
  let target = event.target;
  if (target.className !== 'calc-operations__sym') return;
  getOperation(target);
});

function getNum(node) {
  num = node;
  inputField.innerHTML += num.innerHTML;
}

function getOperation(node) {
  operation = node;
  switch (operation.innerHTML) {
    case '+':
    case '-':
    case '*':
    case '/':
      inputField.innerHTML += operation.innerHTML;
      break;
    case 'C':
      // inputField.setAttribute('placeholder', '');
      inputField.innerHTML = '';
      break;
    case '=':
      inputField.innerHTML= eval(inputField.innerHTML);
      break;
  }
}
