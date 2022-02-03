// reduce() 함수는 해당 배열의 가장 첫 번째 인덱스부터 마지막 인덱스까지의 값에 대한 누적 계산을 통해 하나의 결과를 내보내는 함수이다
const scores = [10, 20, 30, 40, 50];

const sum = scores.reduce((a, b) => a + b);
const sumWithInitValue = scores.reduce((a, b) => a + b, 10);

console.log("sum :", sum); // 150
console.log("sumWithInitValue :", sumWithInitValue); // 160
