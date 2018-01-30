"use strict";

let num;
let operation;
let val = '';
let numDiv = document.querySelector('.calc-numbers');
let operationDiv = document.querySelector('.calc-operations');
let inputField = document.querySelector('#inputField');

let result;

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
  val += num.innerHTML;
  inputField.setAttribute('placeholder', val);
}

function getOperation(node) {
  operation = node;
  switch (operation.innerHTML) {
    case '+':
      alert('+');
      break;
    case '-':
      alert('-');
      break;
    case '×':
      alert('×');
      break;
    case '÷':
      alert('÷');
      break;
    case 'C':
      alert('C');
      break;
    case '=':
      alert('=');
      break;
  }
  // inputField.setAttribute('placeholder', operation.innerHTML);
}
