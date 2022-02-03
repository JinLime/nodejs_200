/*
response 객체 주요 메서드
    - writeHead() : 응답 헤더 작성
    - end() : 응답 본문 작성
*/
require("http")
    .createServer((request, response) => {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end("Hello World!");
    })
    .listen(50001, () => {
        console.log("서버가 동작 중입니다, http://127.0.0.1:50000");
    });
