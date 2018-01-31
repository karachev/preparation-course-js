"use strict";

let numDiv = document.querySelector('.calc-numbers');
let operationDiv = document.querySelector('.calc-operations');
let inputField = document.querySelector('#inputField');

const KEYS = [
  48, // `0` алфавитно-цифровые
  49, // `1` алфавитно-цифровые
  50, // `2` алфавитно-цифровые
  51, // `3` алфавитно-цифровые
  52, // `4` алфавитно-цифровые
  53, // `5` алфавитно-цифровые
  54, // `6` алфавитно-цифровые
  55, // `7` алфавитно-цифровые
  56, // `8` алфавитно-цифровые
  57, // `9` алфавитно-цифровые
  187, // `=` алфавитно-цифровые
  189, // `-` алфавитно-цифровые
  190, // `.` алфавитно-цифровые
  191, // `/` алфавитно-цифровые
  96, // `0` цифровые
  97, // `1` цифровые
  98, // `2` цифровые
  99, // `3` цифровые
  100, // `4` цифровые
  101, // `5` цифровые
  102, // `6` цифровые
  103, // `7` цифровые
  104, // `8` цифровые
  105, // `9` цифровые
  106, // `*` цифровые
  107, // `+` цифровые
  109, // `-` цифровые
  110, // `.` цифровые
  111, // `/` цифровые
  13, // `ENTER` цифровые
];

/** `Слушает` клики на определённые клавиши */
window.addEventListener('keydown', function (evt) {
  evt.preventDefault();
  inputField.focus();
  for (let i = 0; i < KEYS.length; i++) {
    if (evt.keyCode === 13 ||
        evt.keyCode === 187) {
      resultField();
      break;
    }
    if (evt.keyCode === KEYS[i]) {
      inputField.placeholder += evt.key;
      break;
    }
  }
});

/** `Слушает` клики на блоке с цифврами */
numDiv.addEventListener('click', function (evt) {
  evt.preventDefault();
  let target = event.target;
  if (target.className !== 'calc-numbers__sym') return;
  writeSymbol(target);
});

/** `Слушает` клики на блоке с математическими знаками */
operationDiv.addEventListener('click', function (evt) {
  evt.preventDefault();
  let target = event.target;
  if (target.className !== 'calc-operations__sym') return;
  writeSymbol(target);
});

/**
 * Записывает символ в поле
 * @param {Object} node - узел, на который нажали
 * */
function writeSymbol(node) {
  switch (node.innerHTML) {
    case 'C':
      resetField();
      break;
    case '=':
      resultField();
      break;
    default:
      inputField.placeholder += node.innerHTML;
      break;
  }
}

/** Сбрасывает поле ввода */
function resetField() {
  inputField.setAttribute('placeholder', '');
}

/** Выводит результат вычислений */
function resultField() {
  inputField.placeholder = eval(inputField.placeholder);
}
