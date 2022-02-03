const plus = function (a, b) {
    return a + b;
};

const minus = function (a, b) {
    return a - b;
};

let p = plus;

console.log("typeof plus : %s", typeof plus);
console.log("typeof p : %s", typeof p);
console.log("10 + 20 = %d", p(10, 20));

// 함수를 파라미터로 받는 함수
const calculate = function (a, b, func) {
    return func(a, b);
};

console.log(calculate(10, 20, minus));
console.log(calculate(10, 20, plus));
