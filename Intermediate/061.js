// Math.sign() 함수는 어떤 실수 범위값의 부호가 +인지, -인지를 판별하여 양수일 경우 1, 음수일 경우 -1을 출력
const sign1 = Math.sign(3); //    1
const sign2 = Math.sign(-3); // -1
const sign3 = Math.sign("-3"); // -1
const sign4 = Math.sign(0); // 0
const sign5 = Math.sign(NaN); // NaN
const sign6 = Math.sign("foo"); // Nan
const sign7 = Math.sign(); // NaN

console.log("sign1 :", sign1);
console.log("sign2 :", sign2);
console.log("sign3 :", sign3);
console.log("sign4 :", sign4);
console.log("sign5 :", sign5);
console.log("sign6 :", sign6);
console.log("sign7 :", sign7);
