let m = 0;
let sum = 0;
function sumOfDigits(num) {
  m = num % 10;
  num = parseInt(num / 10);
  sum += m;
  if (num > 0) {
    sumOfDigits(num);
  }
  return sum;
}
console.log(sumOfDigits(12));

let number = 12;
let sum = 0;
function sumofdigit(number) {
  let str = String(number);
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }
  return sum;
}
console.log(sumofdigit(number));


