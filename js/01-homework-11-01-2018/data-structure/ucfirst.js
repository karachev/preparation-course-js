// Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом, например:
//
// ucFirst("вася") == "Вася";
// ucFirst("") == ""; // нет ошибок при пустой строке
// P.S. В JavaScript нет встроенного метода для этого. Создайте функцию, используя toUpperCase() и charAt().

function ucFirst(str) {
  let newStr = str.charAt(0).toUpperCase() + str.slice(1);
  return newStr;
}

console.log(ucFirst('вася'));
