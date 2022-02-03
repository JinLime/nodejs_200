const employeeList = [
    { name: "가", age: 31, department: "development" },
    { name: "나", age: 31, department: "design" },
    { name: "다", age: 35, department: "development" },
];

const developerAgeList = employeeList
    .filter((employee) => employee.department === "development")
    .map((employee) => employee.age)
    .reduce((a, b) => a + b);

console.log("developerAgeList : ", developerAgeList); // 개발팀 나이 합 : 66
