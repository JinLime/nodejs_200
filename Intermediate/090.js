// shift() 메소드를 사용하면 배열의 첫 번째 값을 제거할 수 있다
// unshift(x) 메소드를 사용하면 x를 첫 번째 배열에 추가할 수 있다
const destination = ["런던", "파리", "로마"];

console.log(destination);

// shift()
console.log(destination.shift()); // 런던
console.log(destination);

// unshift()
destination.unshift("뉴옥");
console.log(destination);
