/*
Напишите код для вывода alert случайного значения из массива:

  var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
P.S. Код для генерации случайного целого от min to max включительно:

  var rand = min + Math.floor(Math.random() * (max + 1 - min));*/

let arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
let result = getRand(0, arr.length - 1);
console.log(arr[result]);

function getRand(min, max) {
  let rand = min + Math.floor(Math.random() * (max + 1 - min));
  return rand;
}
