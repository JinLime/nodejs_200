const studentList = [
    { name: "가", age: 20, score: 80 },
    { name: "나", age: 22, score: 85 },
    { name: "다", age: 24, score: 90 },
];

console.log(studentList[0]);

const student1 = { name: "라", age: 26, score: 95 };
studentList.push(student1); // 학생1을 리스트에 넣기

console.log(studentList);

studentList.pop(); // 맨 마지막 학생, 리스트에서 제거
console.log(studentList);
