"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result : ", num);
}
function addANdHandle(n1, n2, cb) {
    const result = n1 + n2;
    const a = cb(result);
    console.log(a);
    return a;
}
printResult(add(5, 12));
let combineValues;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(4, 4));
addANdHandle(1, 2, (num) => {
    console.log(num);
    return num + 4;
});
