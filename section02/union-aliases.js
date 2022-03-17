"use strict";
function combine(n1, n2, conversion) {
    let result;
    if ((typeof n1 === "number" && typeof n2 === "number") ||
        conversion === "toNum") {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
const combinedAges = combine(30, 26, "toNum");
console.log(combinedAges);
const combinedStringAges = combine("30", "26", "toNum");
console.log(combinedStringAges);
const combineNames = combine("Kim", "Kelly", "toString");
console.log(combineNames);
