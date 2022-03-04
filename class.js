// function a(num1,num2,callback) {
//     const result=num1+num2
//     callback(result)
// }
// a(10,5, function (haselejam) {
//     alert(haselejam)
// })
const sizes = {
  width: "2",
  length: "5",
  height: "1",
  volumeOfBox: function () {
    console.log(sizes.width * sizes.height * sizes.length);
  },
};
console.log(sizes.volumeOfBox());

// هم با دات میشه نوشت هم به صورت براکتی
