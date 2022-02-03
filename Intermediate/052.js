const studentList = [
    { name: "가", age: 20, math: 80, science: 100 },
    { name: "나", age: 22, math: 85, science: 80 },
    { name: "다", age: 24, math: 90, science: 70 },
];

const plus = (a, b) => a + b;

studentList.forEach((student) => {
    console.log(`${student.name}학생의 점수는 total : ${plus(student.math, student.science)}`);
});
