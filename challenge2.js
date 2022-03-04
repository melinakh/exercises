let myFunc = function () {
  let maxNumber = -Infinity;
  for (let i of arguments) {
    if (maxNumber < i) {
      maxNumber = i;
    }
  }
  return maxNumber;
};
console.log(myFunc(2, 5, 12, 8));



