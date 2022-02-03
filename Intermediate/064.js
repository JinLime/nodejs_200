// Math.trunc() 함수는 주어진 실수에서 소수점 자리를 절사하는 버림함수
const trunc1 = Math.trunc(24.2); // 24
const trunc2 = Math.trunc(42.8123123); // 42
const trunc3 = Math.trunc(0.88); // 0
const trunc4 = Math.trunc(-0.88); // -0
const trunc5 = Math.trunc("-1.123"); // -1
const trunc6 = Math.trunc(NaN); // NaN
const trunc7 = Math.trunc("foo"); // NaN
const trunc8 = Math.trunc(); // NaN
