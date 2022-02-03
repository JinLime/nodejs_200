const studentList = [
    { name: "가", age: 20, score: 80 },
    { name: "나", age: 22, score: 85 },
    { name: "다", age: 24, score: 90 },
    { name: "라", age: 26, score: 95 },
];

let resultStudent = "";

for (let i = 0; i < studentList.length; i++) {
    if (studentList[i].name === "라") {
        resultStudent = studentList[i];
        break;
    }
    console.log(studentList[i].name, "은(는) '라'가 아닙니다.");
}

console.log("resultStudnet :", resultStudent);
