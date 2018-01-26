'use strict';

function highlight (table) {
    let tbody = table.getElementsByTagName('tbody')[0];
    let trs = tbody.getElementsByTagName('tr');

    for (let i = 0; i < trs.length; i++) {
      let statusCell = trs[i].cells[3];
      if (!statusCell.hasAttribute('data-available')) {
        statusCell.setAttribute('properties', 'hidden');
      } else if (statusCell.dataset.available === "true") {
          statusCell.classList.add('available');
      } else {
        statusCell.classList.add('unavailable');
      }
    }

    for (let i = 0; i < trs.length; i++) {
      let genderCell = trs[i].cells[2];
      if (genderCell.textContent === "m") {
        genderCell.classList.add('male')
      } else if (genderCell.textContent === "f") {
        genderCell.classList.add('female');
      }
    }

    for (let i = 0; i < trs.length; i++) {
      let ageCell = trs[i].cells[1];
      if (+ageCell.textContent < 18) {
        ageCell.parentElement.style.textDecoration = 'line-through'
      }
    }

    console.log(trs);
}

highlight(document.querySelector('.js-teachers'));

// Проставит класс available/unavailable, в зависимости от значения атрибута data-available у ячейки Status = OK
// Проставит property hidden, если такого атрибута нет вообще  = OK
// Проставит класс male/female, в зависимости от содержимого ячекйки Gender = OK
// Установит inline-стиль style="text-decoration: line-through", если значение ячейки Age меньше 18 = OK
