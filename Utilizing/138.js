/*
request 객체의 속성
    - url : 요청한 URL 정보
    - headers : 요청 메시지 헤더 정보
    - method : 클라이언트의 요청 방식
    - httpVersion : HTTP 프로토콜의 버전
*/
const fs = require("fs");
const http = require("http");
const url = require("url");

http.createServer((req, res) => {
    let pathname = url.parse(req.url);
    pathname = url.parse(req.url).pathname;

    if (pathname === "/") {
        fs.readFile("./138_example.html", (error, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
            console.log(url.parse(req.url));
        });
    } else if (pathname === "/example") {
        fs.readFile("./136_example.html", (error, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
            console.log(url.parse(req.url));
        });
    }
}).listen(8005, () => {
    console.log("서버가 동작 중입니다");
});
