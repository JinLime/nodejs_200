const studentList = [
    { name: "가", age: 20, score: 80 },
    { name: "나", age: 26, score: 85 },
    { name: "다", age: 24, score: 90 },
    { name: "라", age: 22, score: 95 },
];

const sorted = studentList.sort((now, next) => now.age - next.age);
console.log("sorted :", sorted);

const reversed = sorted.reverse();
console.log("reversed :", reversed);

const sliced = reversed.slice(0, 3);
console.log("sliced :", sliced);
