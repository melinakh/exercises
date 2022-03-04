// function Days(Number) {
//   switch (Number) {
//     case 0:
//       alert("saturday");
//       break;
//     case 1:
//       alert("sunday");
//       break;
//     case 2:
//       alert("monday");
//       break;
//     case 3:
//       alert("tusday");
//       break;
//     case 4:
//       alert("wednesday");
//       break;
//     case 5:
//       alert("thursday");
//       break;
//     case 6:
//       alert("friday");
//       break;
//     default:
//       alert("unknown");
//       break;
//   }
// }
// console.log(Days(number));
//ba obj
let number = +prompt("plz enter number between 0 and 6");

function weekDays(num) {
  if (num > 6 || num < 0) {
    throw Error("Invalid day");
  }

  const days = {
    0: "Saturday",
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
  };
  return days[num];
}
try {
  alert(weekDays(number));
} catch (error) {
  alert(error);
}
