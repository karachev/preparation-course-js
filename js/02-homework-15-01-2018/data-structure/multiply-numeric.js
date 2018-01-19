// Создайте функцию multiplyNumeric , которая получает объект и умножает все численные свойства на 2. Например:

var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

console.log(multiplyNumeric(menu));

function multiplyNumeric(menu) {
  for (let key in menu) {
    if (isNumeric(menu[key])) {
      menu[key] *= 2;
    }
  }
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
