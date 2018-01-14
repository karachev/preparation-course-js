/*Создайте функцию truncate(str, maxlength), которая проверяет длину строки str, и если она превосходит maxlength – заменяет конец str на "...", так чтобы ее длина стала равна maxlength.
Результатом функции должна быть (при необходимости) усечённая строка.*/

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 3) + "...";
  }
  return str;
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)); // = "Вот, что мне хоте..."
console.log(truncate("Всем привет!", 20)); // = "Всем привет!"
