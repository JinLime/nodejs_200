const listEmployee = [
    { name: "가", age: 30, salary: 4500 },
    { name: "나", age: 31, salary: 5000 },
    { name: "다", age: 35, salary: 6000 },
];

const raisedSalaryList = listEmployee.map((employee) => {
    return employee.salary * 1.2;
});

raisedSalaryList.forEach((salary) => console.log("salary : %d", salary));
