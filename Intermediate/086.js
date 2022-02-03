const studentList = [
    { name: "가", age: 20, score: 80 },
    { name: "나", age: 26, score: 85 },
    { name: "다", age: 24, score: 90 },
    { name: "라", age: 22, score: 95 },
];

studentList.sort((now, next) => now.age - next.age);
console.log("studentList :", studentList);

const compare = (now, next) => {
    console.log("-----------------");
    console.log("now :", now);
    console.log("next :", next);
};

studentList.sort(compare);
