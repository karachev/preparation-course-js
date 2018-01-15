/*Создайте функцию filterRange(arr, a, b), которая принимает массив чисел arr и возвращает новый массив, который содержит
только числа из arr из диапазона от a до b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция не должна менять arr.*/


let arr = [5, 4, 3, 8, 0];
let filtered = filterRange(arr, 3, 5);
console.log(filtered);

function filterRange(arr, min, max) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= min && arr[i] <= max) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}
// теперь filtered = [5, 4, 3]
// arr не изменился
