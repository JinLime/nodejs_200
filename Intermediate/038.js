const date = new Date(2022, 0, 3, 15, 15, 30);

console.log("date : %s", date.toLocaleString);
console.log("LocaleDateString : %s", date.toLocaleDateString());
console.log("LocaleTimeString : %s", date.toLocaleTimeString());

console.log("year : %s", date.getFullYear());
console.log("month : %s", date.getMonth());
console.log("date : %s", date.getDate());
console.log("hour : %s", date.getHours());
console.log("minutes : %s", date.getMinutes());
console.log("seconds : %s", date.getSeconds());
