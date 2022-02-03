const listUser = [
    { name: "가", age: 20, score: 80 },
    { name: "나", age: 22, score: 85 },
    { name: "다", age: 24, score: 90 },
    { name: "라", age: 26, score: 95 },
];

listUser.forEach(function (user) {
    console.log(user);
});

console.log("----------------------------------");

// arrow function
listUser.forEach((user) => console.log(user));
