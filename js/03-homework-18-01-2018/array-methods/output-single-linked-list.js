let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

printList(list);

//Напишите функцию printList(list), которая выводит элементы списка по очереди, при помощи цикла.
// function printList(list) {
//   while (list) {
//     console.log(list.value);
//     list = list.next;
//   }
// }

//Напишите функцию printList(list) при помощи рекурсии.
function printList(list) {
  console.log(list.value);
  if (list.next) {
    printList(list.next);
  }
}

//Напишите функцию printReverseList(list), которая выводит элементы списка в обратном порядке, при помощи рекурсии. Для списка выше она должна выводить 4,3,2,1
function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }
  console.log(list.value);
}

/*Сделайте вариант printReverseList(list), использующий не рекурсию, а цикл.*/
function printReverseList(list) {
  var arr = [];
  var tmp = list;
  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }
  for (var i = arr.length - 1; i >= 0; i--) {
    alert( arr[i] );
  }
}
