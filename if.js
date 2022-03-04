let number = prompt("enter a number");
function showNumber(input) {
  if (input >= 1) {
    return 1;
  } else if (input <= -1) {
    return -1;
  } else {
    return 0;
  }
}
console.log(showNumber(number));
