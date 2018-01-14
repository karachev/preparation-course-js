/*
Есть стоимость в виде строки: "$120". То есть, первым идёт знак валюты, а затем – число.
Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять число-значение, в данном случае 120.*/

function extractCurrencyValue(str) {
  return +str.slice(1);
}

console.log(extractCurrencyValue("$120"));
