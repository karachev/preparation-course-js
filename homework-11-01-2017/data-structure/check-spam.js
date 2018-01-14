// Напишите функцию checkSpam(str), которая возвращает true, если строка str содержит „viagra“ или „XXX“, а иначе false.
//
// Функция должна быть нечувствительна к регистру:

function checkSpam(str) {
  str = str.toLowerCase();
  if (~str.indexOf('viagra') || ~str.indexOf('xxx')) {
    return true;
  }
  return false;
}

console.log(checkSpam('buy ViAgRA now')); // == true
console.log(checkSpam('free xxxxx')); // == true
console.log(checkSpam("innocent rabbit")); // == false
