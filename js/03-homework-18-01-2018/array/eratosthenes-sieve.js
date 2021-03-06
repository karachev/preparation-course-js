/*
Целое число, большее 1, называется простым, если оно не делится нацело ни на какое другое, кроме себя и 1.

Древний алгоритм «Решето Эратосфена» для поиска всех простых чисел до n выглядит так:

Создать список последовательных чисел от 2 до n: 2, 3, 4, ..., n.
Пусть p=2, это первое простое число.
Зачеркнуть все последующие числа в списке с разницей в p, т.е. 2*p, 3*p, 4*p и т.д. В случае p=2 это будут 4,6,8....
Поменять значение p на первое не зачеркнутое число после p.
Повторить шаги 3-4 пока p2 < n.
Все оставшиеся не зачеркнутыми числа – простые.
Посмотрите также анимацию алгоритма.

Реализуйте «Решето Эратосфена» в JavaScript, используя массив.

Найдите все простые числа до 100 и выведите их сумму.
*/

function sieveOfEratosthenes(value) {
  let arr = [];
  for (let i = 2; i < value; i++) {
    arr.push(i);
  }
  for (let i = 0; i < value; i++) {
    for (let j = 0; j < i; j++ ) {
      if (arr[i] % arr[j] == 0) {
        // arr.pop(arr[i]);
        arr[i] = 0;
      }
    }
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sieveOfEratosthenes(100));
