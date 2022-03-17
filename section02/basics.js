"use strict";
function add(n1, n2, printResult, phrase) {
    const result = n1 + n2;
    if (printResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Resul is : ";
add(number1, number2, printResult, resultPhrase);
