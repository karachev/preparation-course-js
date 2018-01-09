let start = 2;
let finish = 10;

outer: for (let i = start; i <= finish; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            continue outer;
        }
    }
    console.log(i);
}