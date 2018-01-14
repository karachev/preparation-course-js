// Напишите код для генерации случайного числа от min до max, не включая max.

function getRandomMinMax(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(getRandomMinMax(1 , 10));
