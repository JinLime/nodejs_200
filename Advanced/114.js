const listEmployee = [
    { name: "가", age: 30, salary: 4500 },
    { name: "나", age: 31, salary: 5000 },
    { name: "다", age: 35, salary: 6000 },
];

// 봉급이 5000 이상인 직원 필터링
const upper5000Employees = listEmployee
    .filter((employee) => employee.salary >= 5000)
    .map((employee) => employee.salary)
    .reduce((a, b) => a + b);

console.log("sum :", upper5000Employees); // sum : 11000
