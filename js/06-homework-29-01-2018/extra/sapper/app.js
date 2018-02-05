'use strict';

const COUNTER_BOMB = 10;
const COUNTER_ROWS = 10;
const COUNTER_COLUMNS = 10;

let table = document.querySelector('table');

createField();

createBombs();

/** `Слушает` клики на ячейки поля */
table.addEventListener('click', function (evt) {
  evt.preventDefault();
  let target = event.target;
  if (target.tagName !== 'TD') return;
  setTd(target);
});

/** `Слушает` правые клики на ячейки поля */
table.addEventListener('contextmenu', function (evt) {
  evt.preventDefault();
  let target = event.target;
  if (target.tagName !== 'TD') return;
  target.classList.toggle('possible-bomb');
  checkPossibleBomb();
});

/** Создает поле */
function createField() {
  let tbody = document.querySelector('tbody');
  for (let i = 0; i < COUNTER_ROWS; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < COUNTER_COLUMNS; j++) {
      let td = document.createElement('td');
      td.className = 'td';
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
}

/** Создает бомбы и добавляет их на поле */
function createBombs() {
  outer:
    for (let i = 0; i < COUNTER_BOMB; i++) {
      let x = Math.floor(Math.random() * COUNTER_ROWS);
      let y = Math.floor(Math.random() * COUNTER_COLUMNS);

      if (table.rows[x].cells[y].classList.contains('bomb')) {
        i--;
        continue outer;
      }
      table.rows[x].cells[y].classList.add("bomb");
    }
}

/** Проверяет возможные бомбы и настоящие бомбы */
function checkPossibleBomb() {
  let possibleBomb = document.querySelectorAll('.possible-bomb');
  let countPossibleBomb = 0;

  for (let i = 0; i < possibleBomb.length; i++) {
    if (possibleBomb[i].classList.contains('bomb')) countPossibleBomb++;
  }
  if (countPossibleBomb === COUNTER_BOMB) {
    alert("Поздравляем! Вы выиграли!")
  }
}

/**
 * Провеярет ячейку td
 * @param {Object} node - ячейка td, на которую нажали
 * */
function setTd(node) {
  if (node.classList.contains('bomb')) {
    node.classList.add('bang');
    alert("Вы проиграли");
    return;
  }
  createNear(node);
  node.classList.add('check');
}

/**
 * Обсчитывает количество бомб вокруг
 * @param {Object} node - ячейка td, на которую нажали
 * */
function createNear(node) {
  let x;
  let y;
  let counter = 0;

  node.classList.add('check-now');
  for (let i = 0; i < COUNTER_COLUMNS; i++) {
    for (let j = 0; j < COUNTER_ROWS; j++) {
      if (table.rows[j].cells[i].classList.contains('check-now')) {
        x = j;
        y = i;
        break;
      }
    }
  }

  node.classList.remove('check-now');
  for (let i = x - 1; i <= x + 1; i++) {
    for (let j = y - 1; j <= y + 1; j++){
      if (i >= COUNTER_ROWS ||
          j >= COUNTER_COLUMNS ||
          i < 0 ||
          j < 0) {
        continue;
      }
      if (table.rows[i].cells[j].classList.contains('bomb')) {
        counter++;
      }
    }
  }

  node.innerHTML = counter;
  node.classList.add('bombs' + `${counter}`);
}
