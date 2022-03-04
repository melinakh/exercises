// let Number1 =43
// function sumOfNumbers(input) {
//   let result=

// } console.log(sumOfNumbers(,));

let input = prompt("enter");
function oddOrEven(n) {
  let a = n.toString();
  let b = 0;
  for (let i = 0; i < a.length; i++) {
    b += Number(a[i]);
  }
  if (b % 2 === 1) {
    return "Oddish";
  } else return "Evenish";
}
console.log(oddOrEven(input));
