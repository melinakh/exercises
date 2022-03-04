let arr = [3, 5, 0, 1, NaN];
function chekNumber(array) {
  for (let i in array) {
    array[i] = array[i] || 1;
  }

  return array;
}
console.log(chekNumber(arr));
