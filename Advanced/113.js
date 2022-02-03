const listEmployee = [
    { name: "가", age: 30, salary: 4500 },
    { name: "나", age: 31, salary: 5000 },
    { name: "다", age: 35, salary: 6000 },
];

const salarys = listEmployee.map((employee) => employee.salary);

const sum = salarys.reduce((a, b) => a + b, 0);
console.log("sum :", sum); // sum : 15500
