/*
setTimeout 함수는 setInterval 함수처럼 정기적, 지속적 실행되는 함수가 아니라 
일회성으로 특정 함수를 정해진 시간 이후 실행한 후 종료하는 함수이다
*/
// 3초 후에 hello를 한 번 출력하고 종료하기
setTimeout(() => console.log("hello"), 3000);
