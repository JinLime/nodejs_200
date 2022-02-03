/*
server 객체
- http 모듈에서 가장 중요한 객체로 createServer() 메소드를 통해 객체 생성
- 주요 메소드
    - listen() : 서버 실행
    - close() : 서버 종료
*/

// 웹 서버 생성과 실행
const http = require("http");

const server = http.createServer();

server.listen(50000, () => {
    console.log("서버가 동작 중입니다, http://127.0.0.1:50000");
});

// 웹서버 종료
const testClose = function () {
    server.close();
    console.log("서버가 종료되었습니다, http://127.0.0.1:50000");
};

// 강제 서버 종료
setTimeout(testClose, 5000); // 5초후 종료
