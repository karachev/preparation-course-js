/* Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
Если объект пустой, то результат должен быть 0. */

"use strict";
let salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};
console.log(sumSalaries(salaries));

function sumSalaries(salaries) {
  let result = 0;
  for (let key in salaries) {
    result += salaries[key];
  }
  return result;
}

//... ваш код выведет 650
