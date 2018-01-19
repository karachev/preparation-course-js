/*
На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
Задача – найти непрерывный подмассив arr, сумма элементов которого максимальна.
Ваша функция должна возвращать только эту сумму.
Например:

getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
getMaxSubSum([2, -1, 2, 3, -9]) = 6
getMaxSubSum([-1, 2, 3, -9, 11]) = 11
getMaxSubSum([-2, -1, 1, 2]) = 3
getMaxSubSum([100, -9, 2, -3, 5]) = 100
getMaxSubSum([1, 2, 3]) = 6 (неотрицательные - берем всех)
Если все элементы отрицательные, то не берём ни одного элемента и считаем сумму равной нулю:

getMaxSubSum([-1, -2, -3]) = 0
Постарайтесь придумать решение, которое работает за O(n2), а лучше за O(n) операций.
*/

function getMaxSubSum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum > result) {
        result = sum;
      }
    }
  }
  return result;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); // = 5 (сумма выделенных)


console.log(getMaxSubSum([2, -1, 2, 3, -9])); // = 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // = 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // = 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // = 100
console.log(getMaxSubSum([1, 2, 3])); // = 6 (неотрицательные - берем всех)
console.log(getMaxSubSum([-1, -2, -3])); // = 0

