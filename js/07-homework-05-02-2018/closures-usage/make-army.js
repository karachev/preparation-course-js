function makeArmy() {

  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function() { // функция-стрелок
      console.log(i); // выводит свой номер
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9
