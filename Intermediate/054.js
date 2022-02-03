// 함수의 유효 범위(Scope) 및 익명함수

// 전역 변수
let resultSubtraction;
const subtraction = function (a, b) {
    resultSubtraction = a - b;
};

subtraction(100, 50);
console.log(resultSubtraction);

// 변수에 익명함수 형태로 함수를 저으이할 수 있음
const multiple = function (a, b) {
    const result = a * b;
    return result;
};

const r = multiple(10, 10);
console.log(r);

// 지역 변수
const sum = function (a, b) {
    const resultSum = a + b; // 단, 함수 내에서 변수 유형(예, var 또는 let)을 지정하지 않고 변수를 선언할 경우 '전역변수'가 된다
};

sum(20, 30);
console.log(resultSum);
