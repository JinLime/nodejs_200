const studentList = [
    { name: "가", age: 20, score: 80 },
    { name: "나", age: 26, score: 85 },
    { name: "다", age: 24, score: 90 },
];

studentList.sort((beforeStudent, nextStudent) => {
    if (beforeStudent.age > nextStudent.age) return 1;
    else if (beforeStudent.age < nextStudent.age) return -1;
});

console.log(studentList);
