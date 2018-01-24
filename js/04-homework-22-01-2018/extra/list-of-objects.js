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
  let table = document.querySelector('table table-hover table-mc-light-blue');
  let th = table.querySelectorAll('th');
  th[0].innerHTML = profile;
  th[1].innerHTML = profile['isAdmin'];


  return div;
}

document.body.append(printProfile());
