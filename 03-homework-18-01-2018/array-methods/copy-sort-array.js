/*
Есть массив строк arr. Создайте массив arrSorted – из тех же элементов, но отсортированный.

Исходный массив не должен меняться.

var arr = ["HTML", "JavaScript", "CSS"];

// ... ваш код ...

alert( arrSorted ); // CSS, HTML, JavaScript*/

let arr = ["HTML", "JavaScript", "CSS"];

let newArr = arr.slice().sort();

console.log(arr);
console.log(newArr); // CSS, HTML, JavaScript
