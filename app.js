function combine(n1, n2, conversion) {
    var result;
    if ((typeof n1 === "number" && typeof n2 === "number") ||
        conversion === "toNum") {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26, "toNum");
console.log(combinedAges);
var combinedStringAges = combine("30", "26", "toNum");
console.log(combinedStringAges);
var combineNames = combine("Kim", "Kelly", "toString");
console.log(combineNames);
