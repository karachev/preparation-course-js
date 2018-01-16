/*
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть, дефисы удаляются, а все слова после них получают заглавную букву.

Например:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
Такая функция полезна при работе с CSS.

  P.S. Вам пригодятся методы строк charAt, split и toUpperCase.*/

function camelize(string) {
  let array = string.split();
  console.log(array);
  // for (let i = 0; i < string.length; i++) {
  //   array.push(string[i]);
  // }
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] = "-") {
  //     array[i+1] = array[i+1].toUpperCase();
  //   }
  //
  // }
  // return string;
}

console.log(camelize("background-color")); // == 'backgroundColor';
console.log(camelize("list-style-image")); // == 'listStyleImage';
console.log(camelize("-webkit-transition")); // == 'WebkitTransition';
