/*
У объекта есть свойство className, которое хранит список «классов» – слов, разделенных пробелами:

var obj = {
  className: 'open menu'
};
Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:

removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений (нет такого класса)

P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:

obj = {
  className: 'my menu menu'
};

removeClass(obj, 'menu');

alert( obj.className ); // 'my'
Лишних пробелов после функции образовываться не должно.*/

let obj1 = {
  className: 'open menu'
};

let obj2 = {
  className: 'my menu menu'
};


removeClass(obj1, 'open'); // obj.className='menu'
removeClass(obj1, 'blabla'); // без изменений (нет такого класса)

removeClass(obj2, 'menu');

console.log((obj1.className));
console.log((obj2.className)); // 'my'

function removeClass(obj, str) {
  var arr = obj.className.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === str) {
      arr.splice(i,1);
      i--;
    }
  }

  return obj.className = arr.join(" ");
}
