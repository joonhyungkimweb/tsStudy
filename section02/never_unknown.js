"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "Nick";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateEror(message, code) {
    throw { message, errorCode: code };
    //   while (true) {}
}
generateEror("network error", 500);
