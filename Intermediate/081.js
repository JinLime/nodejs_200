// clearInterval 함수는 setInterval 함수의 동작을 끝내는 함수이다
// 1초에 한번씩 'hello'출력하기
const playInterval = setInterval(() => {
    console.log("hello");
}, 1000);

setTimeout(() => {
    clearInterval(playInterval);
}, 5000);
