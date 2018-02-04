'use strict';

const COUNTER_BOMB = 5;
const COUNTER_ROWS = 5;
const COUNTER_COLUMNS = 5;

let table = document.querySelector('table');
let td = document.querySelectorAll('td');

createBombs();

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

table.addEventListener('click', function (evt) {
  evt.preventDefault();
  let target = event.target;
  if (target.tagName !== 'TD') return;
  setTd(target);
});

table.addEventListener('contextmenu', function (evt) {
  evt.preventDefault();
  let target = event.target;
  if (target.tagName !== 'TD') return;
  target.classList.toggle('possible-bomb');
  checkPossibleBomb();
});

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

function setTd(node) {
  if (node.classList.contains('bomb')) {
    node.classList.add('bang');
    alert("Вы проиграли");
    return;
  }
  createNear(node);
  node.classList.add('check');
}

function createNear(node) {
  let x;
  let y;
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

  let counter = 0;
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

}

// TODO рефакторить
// TODO продумать конец если выиграл
// TODO продумать конец если проиграл
// TODO расставить все комментарии JSDoc
