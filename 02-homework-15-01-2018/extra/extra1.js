'use strict';

/**
 * Реализовать RLE-сжатие: AAAB -> A3B, BCCDDDAXXXX -> BC2D3AX4
 * @param  {string} value
 * @return {string}
 */
function rle(value) {
  let newStr = "";
  let count = 1;
  for (let i = 0; i < value.length; i++) {
    if (value[i] == value[i+1]) {
        count++;
    } else {
      if (count > 1) {
        newStr += value[i] + count;
        count = 1;
      } else {
        newStr += value[i];
      }
    }
  }
  return newStr;
}

console.log(rle('AAAB'));
console.log(rle('BCCDDDAXXXX'));
console.log(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'));
