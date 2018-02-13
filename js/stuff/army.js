'use strict';

let army = createArmy(3);

army[0]();
army[2]();

function createRobot(serialNo) {
  let robot = function () {
    console.log(serialNo);
  };

  return robot;
}

function createArmy(n) {
  let robots = [];
  let i = 0;

  for (; i < n; i++) {
    let robot = createRobot(i);
    robots.push(robot);
  }

  return robots;
}
