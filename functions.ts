function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log("Result : ", num);
}

function addANdHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  const a = cb(result);
  console.log(a);
  return a;
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(4, 4));

addANdHandle(1, 2, (num: number) => {
  console.log(num);

  return num + 4;
});
