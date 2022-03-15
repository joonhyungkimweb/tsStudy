function combine(n1: number | string, n2: number | string) {
  if (typeof n1 === "number" && typeof n2 === "number") {
    return n1 + n2;
  } else {
    return n1.toString() + n2.toString();
  }
}
const combinedAges = combine(30, 26);

console.log(combinedAges);

const combineNames = combine("Kim", "Kelly");

console.log(combineNames);
