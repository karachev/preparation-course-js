/*
Напишите функцию randomInteger(min, max) для генерации случайного целого числа между min и max, включая min,max как возможные значения.
Любое число из интервала min..max должно иметь одинаковую вероятность.
*/

function randomInteger(min, max) {
  return Math.floor(Math.random()* (max - min + 1) + min);
}

console.log(randomInteger(3, 10))
