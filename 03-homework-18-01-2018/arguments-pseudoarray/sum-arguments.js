/*
Напишите функцию sum(...), которая возвращает сумму всех своих аргументов:

sum() = 0
sum(1) = 1
sum(1, 2) = 3
sum(1, 2, 3) = 6
sum(1, 2, 3, 4) = 10*/

console.log(sum()); //= 0
console.log(sum(1));   //= 1
console.log(sum(1, 2));  //= 3
console.log(sum(1, 2, 3));   //= 6
console.log(sum(1, 2, 3, 4));  //= 10

function sum() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}
