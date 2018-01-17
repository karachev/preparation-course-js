/*
Случайный порядок в массиве
важность: 3
Используйте функцию sort для того, чтобы «перетрясти» элементы массива в случайном порядке.

  var arr = [1, 2, 3, 4, 5];

arr.sort(ваша функция);

alert( arr ); // элементы в случайном порядке, например [3,5,1,2,4]*/

let arr = [1, 2, 3, 4, 5];
arr.sort(mySort);
console.log(arr);

function mySort(a, b) {
  return Math.random() - 0.5;
}
