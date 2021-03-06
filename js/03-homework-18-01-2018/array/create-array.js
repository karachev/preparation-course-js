/*
Задача из 5 шагов-строк:

Создайте массив styles с элементами «Джаз», «Блюз».
Добавьте в конец значение «Рок-н-Ролл»
Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины.
Удалите первое значение массива и выведите его alert.
Добавьте в начало значения «Рэп» и «Регги».
Массив в результате каждого шага:

Джаз, Блюз
Джаз, Блюз, Рок-н-Ролл
Джаз, Классика, Рок-н-Ролл
Классика, Рок-н-Ролл
Рэп, Регги, Классика, Рок-н-Ролл
*/

let styles = [`Джаз`, `Блюз`];
console.log(styles);

styles.push(`Рок-н-Ролл`);
console.log(styles);

styles[styles.length - 2] = `Классика`;
console.log(styles);

styles.shift();
console.log(styles);

styles.unshift(`Регги`);
styles.unshift(`Рэп`);
console.log(styles);
