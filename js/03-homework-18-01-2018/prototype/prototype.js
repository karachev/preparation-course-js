/*Задание состоит из двух частей:

1.Присвойте объектам ссылки __proto__ так, чтобы любой поиск чего-либо шёл по алгоритму pockets -> bed -> table -> head.
  То есть pockets.pen == 3, bed.glasses == 1, но table.money == undefined.

2.После этого ответьте на вопрос, как быстрее искать glasses: обращением к pockets.glasses или head.glasses? Попробуйте протестировать.*/

let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow:             2
};

let pockets = {
  money: 2000
};

// 1
pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

console.log(pockets.pen);
console.log(bed.glasses);
console.log(table.money);

// 2
// Быстре к head.glasses чем pockets.glasses == Оказалось, что без разницы :(
