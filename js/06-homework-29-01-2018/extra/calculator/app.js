"use strict";

let num;
let operation;
let numDiv = document.querySelector('.calc-numbers');
let operationDiv = document.querySelector('.calc-operations');
let inputField = document.querySelector('#inputField');

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
  inputField.setAttribute('placeholder', num.innerHTML);
}

function getOperation(node) {
  operation = node;
  inputField.setAttribute('placeholder', operation.innerHTML);
}
