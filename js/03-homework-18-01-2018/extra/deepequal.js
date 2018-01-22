'use strict';

/**
 * Task - deepEqual()
 * Написать такую функцию, которая принимает два объекта A и B, и будет
 * сравнивать их не по ссылкам, а по значениям. deepEqual будет возвращать true,
 * если у этих объектах в одинаковых свойствах значении одинаковые.
 */

/** By Pavel Karachev. */

let menu = {
  width: 300,
  height: 2000,
  title3: "Menu",
  title: "Menu",

};

let menu2 = {
  width: 300,
  height: 200,
  title: "Menu",
};

deepEqual(menu, menu2);

/**
 * Сравнение объектов
 * @param {object} obj1 - объект 1
 * @param {object} obj2 - объект 2
 */
function deepEqual(obj1, obj2) {
  let cacheKey = [];
  let cacheKey2 = [];
  let cacheProp = [];
  let cacheProp2 = [];

  for (let key in obj1) {
    cacheKey.push(key);
  }

  for (let key in obj2) {
    cacheKey2.push(key);
  }

  for (let key in obj1) {
    cacheProp.push(obj1[key]);
  }

  for (let key in obj2) {
    cacheProp2.push(obj2[key]);
  }

  /** Для перебора берет объект с наименьшим количеством свойств */
  for (let i = 0; i < Math.min(cacheProp.length, cacheProp2.length); i++) {
    if (cacheKey[i] === cacheKey2[i]) {
      if (cacheProp[i] === cacheProp2[i]) {
        console.log(i + ' Свойства и значение полностью совпадает. Возвращает 1.');
      } else {
        console.log(i + ' Свойства совпадают, значения нет. Возвращает 0.');
      }
    } else {
      console.log(i + ' Свойства не совпадают. Возвращает 0.');
    }
  }
}

