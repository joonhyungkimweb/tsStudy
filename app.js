function combine(n1, n2) {
    if (typeof n1 === "number" && typeof n2 === "number") {
        return n1 + n2;
    }
    else {
        return n1.toString() + n2.toString();
    }
}
var combinedAges = combine(30, 26);
console.log(combinedAges);
var combineNames = combine("Kim", "Kelly");
console.log(combineNames);
