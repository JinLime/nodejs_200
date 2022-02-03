const today = new Date();
const date1 = new Date(2022, 1 - 1, 18); // 월(month)은 1부터 세지 않고 0부터 11까지 세기 때문에 -1 해줌
const date2 = new Date(2022, 1, 18);
const date3 = new Date(2022, 1, 18, 15);
const date4 = new Date(2022, 1, 18, 15, 10);
const date5 = new Date(2022, 1, 18, 15, 10, 20);

console.log(today.toLocaleString());
console.log(date1.toLocaleString());
console.log(date2.toLocaleString());
console.log(date3.toLocaleString());
console.log(date4.toLocaleString());
console.log(date5.toLocaleString());
