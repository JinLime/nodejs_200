const user = { name: "sj", age: 26 };
console.log("user :", user);
console.log("user.name :", user.name);
console.log("user.age :", user.age);

user.job = "developer";
user.nation = "korea";
console.log(user);

const memberName = "age";
console.log(user[memberName]);
