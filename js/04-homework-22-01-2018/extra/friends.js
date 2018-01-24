'use strict';

const friends = ['Tim', 'Olga', 'Sveta', 'Paul'];

function printFriends (sourceEl) {
  let ul = document.createElement('ul');

  for (let i = 0; i < friends.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = friends[i];
    ul.appendChild(li);
  }


  sourceEl.append(ul);
}


printFriends(document.querySelector('.js-frineds'));
