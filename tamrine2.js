const myObj = {};

function compare() {
  if (array1.length == array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] == array2[i]) {
        console.log("true");
      } else {
        console.log("false");
      }
    }
  }
}
compare(array1, array2);
