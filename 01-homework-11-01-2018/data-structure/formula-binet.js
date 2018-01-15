// Существует формула Бине, согласно которой Fn равно ближайшему целому для ϕn/√5, где ϕ=(1+√5)/2 – золотое сечение.
//
//   Напишите функцию fibBinet(n), которая будет вычислять Fn, используя эту формулу. Проверьте её для значения F77 (должно получиться fibBinet(77) = 5527939700884757).

function fibBinet(n) {
  let phi = (1+Math.sqrt(5))/2;
  let result = Math.pow(phi, n) / Math.sqrt(5);
  return parseInt(result);
}

console.log(fibBinet(77));
console.log(fibBinet(8));
console.log(fibBinet(2));
