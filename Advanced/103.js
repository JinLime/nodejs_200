// 여러 개의 파라미터를 갖는 함수가 있을 때, 그 중 일부의 파라미터만 필요로 하는 함수를 만드는 기법을 커링이라고 한다
const add = (x) => (y) => x + y;
const add10 = add(10);

console.log(add10(20));
console.log(add(10)(20));
