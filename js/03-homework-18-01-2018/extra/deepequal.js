let objA = {
  name: 'Vasya',
  surname: 'Petrov',
  age: 15,
};

let objB = {
  name: 'Masha',
  surname: 'Petrov',
  age: 21,
};

console.log(deepEqual(objA, objB));;

function deepEqual(objA, objB) {
  for (let i = 0; i < objA.length; i++) {
    // let keyA in objA;
    // let keyB in objB;
    for (let keyA in objA && let keyB in objB) {
      if (keyA === keyB && objA[keyA] === objB[keyB]) {
        return true;
      }
    }
  }
}
