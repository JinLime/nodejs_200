// SetInterval(실행할 함수, 실행주기(1000ms=1초))을 정기적으로 특정 액션을 해야 할 때 사용하는 함수이다
setInterval(() => console.log("hello"), 1000); // 1초에 한번씩 'hello' 출력하기

const printBye = () => console.log("bye"); // 2초에 한번씩 bye 출력하기
setInterval(printBye, 2000);
