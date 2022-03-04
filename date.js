var arrayOfWeekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var dateObj = new Date();
var weekdayNumber = dateObj.getDay();
var weekdayName = arrayOfWeekdays[weekdayNumber];
console.log(weekdayName);
