const students = [
    { name: "가", age: 31, score: 85 },
    { name: "나", age: 31, score: 96 },
    { name: "다", age: 35, score: 76 },
    { name: "라", age: 24, score: 84 },
    { name: "마", age: 26, score: 54 },
    { name: "바", age: 29, score: 34 },
];

// 21살 이상 30미만 점수 평균 구하기
const between21to30StudentsAverage = students
    .filter((student) => student.age >= 20 && student.age < 30)
    .map((student) => student.score)
    // reduce 함수에서 callback 함수의 파라미터 4개
    // previous는 배열의 첫 번째 파라미터 혹은 초기값
    // current는 배열 내 현재 처리되고 있는 값
    // index는 현재 처리되고 있는 값의 인덱스
    // array는 현재 사용되고 있는 배열
    // 0/3 -> (0/3) + 84/3 -> (0/3 + 84/3) + 54/3 (0/3 + 84/3 + 54/3) + 34/3
    .reduce((previous, current, index, array) => previous + current / array.length, 0);

console.log("average :", between21to30StudentsAverage); // average: 57.3
