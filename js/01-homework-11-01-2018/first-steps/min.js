/*
Задача «Hello World» для функций :)

Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.
Пример вызовов:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1*/

function min(a, b) {
    return (a > b) ? b : a;
}

console.log(min(1, 1));