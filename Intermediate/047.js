const students = [
    { name: "가", age: 20, score: 80 },
    { name: "나", age: 22, score: 85 },
    { name: "다", age: 24, score: 90 },
    { name: "라", age: 26, score: 95 },
];

const getDegree = function (score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 60) {
        return "C";
    }
    return "F";
};

students.forEach((students) => {
    const result = `name : ${students.name}, score : ${getDegree(students.score)}`;
    console.log(result);
});
