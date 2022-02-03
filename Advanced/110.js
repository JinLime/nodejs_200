// map()함수는 배열에 있는 모든 item에 map(함수)의 파라미터로 받은 함수를 적용시킨 배열을 리턴
const list = [1, 2, 3];

const multipledList = list.map((item) => item * 10);

console.log(multipledList); // [10, 20, 30]
multipledList.forEach((item) => console.log(item));
