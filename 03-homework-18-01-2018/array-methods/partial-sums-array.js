/*
На входе массив чисел, например: arr = [1,2,3,4,5].

Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.

Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов, в котором на каждой позиции
должна быть сумма элементов arr до этой позиции включительно.

То есть:

для arr = [ 1, 2, 3, 4, 5 ]
getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
Еще пример: getSums([-2,-1,0,1]) = [-2,-3,-3,-2].

Функция не должна модифицировать входной массив.
В решении используйте метод arr.reduce.*/

let arr1 = [ 1, 2, 3, 4, 5 ];
let arr2 = [-2,-1,0,1];

console.log(getSums(arr1));
console.log(getSums(arr2));

function getSums(arr) {
  let resultArr = [];
  if (!arr.length) return resultArr;

  let result = arr.reduce(function (sum, current) {
    resultArr.push(sum);
    return sum + current;
  })

  resultArr.push(result);

  return resultArr;
}

