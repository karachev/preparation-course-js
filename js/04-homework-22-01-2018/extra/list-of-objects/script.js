'use strict';

const profile = {
  isAdmin: true,
  age: 28,
  nickname: 'iketari',
  avatar: 'http://i.imgur.com/FHMnsVNt.jpg'
};

function printProfile () {
  let div = document.createElement('div');
  div.innerHTML = `
  <table class="table table-hover table-mc-light-blue">
    <thead>
      <tr>
        <th>Key</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>`;

  // сформировать внутри tbody тело таблицы содержащее
  // по одной строке на каждую пару ключ-значение объекта profile
  // в первой ячейке должен быть выведен ключ, во второй значение

  return div;
}

document.body.append(printProfile());

addProfileInTable(profile)

function addProfileInTable (profile) {
  let thead = document.querySelector('thead');
  let oldTr = thead.querySelectorAll('tr');

  let th = thead.querySelectorAll('th');

  for (let key in profile) {
    let tr = document.createElement('tr');
    thead.appendChild(tr);
    let th1 = document.createElement('th')
    tr.appendChild(th1);
    let th2 = document.createElement('th')
    tr.appendChild(th2);
    th1.innerHTML = key;
    th2.innerHTML = profile[key];
  }
}
