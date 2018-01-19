/*Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
Если объект пустой, то пусть он выводит «нет сотрудников».*/

"use strict";
var salaries = {
  `Вася`: 100,
  `Петя`: 300,
  `Даша`: 250
};

console.log(showSalaries(salaries));

function showSalaries(salaries) {
  let maxSalaries = 0;
  let name = ``;
  for (let maxName in salaries) {
    if (salaries[maxName] > maxSalaries) {
      maxSalaries = salaries[maxName];
      name = maxName;
    }
  }
  return name || `нет сотрудников`;
}
