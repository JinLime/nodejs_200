const students = [
    { name: "가", age: 31, math: 85, english: 87 },
    { name: "나", age: 31, math: 96, english: 97 },
    { name: "다", age: 35, math: 76, english: 84 },
    { name: "라", age: 24, math: 84, english: 73 },
    { name: "마", age: 26, math: 54, english: 67 },
    { name: "바", age: 29, math: 34, english: 100 },
];

const mathUpper80 = students.filter((student) => student.math > 80);
const mathUpper90AndEnglishUpper70 = students.filter(
    (student) => student.math > 90 && student.english > 70,
);

console.log("mathUpper80 :", mathUpper80);
console.log("mathUpper90AndEnglishUpper70 :", mathUpper90AndEnglishUpper70);
