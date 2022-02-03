/*
pug 모듈 메소드
    compile() : pug 문자열을 HTML 문자열로 변경할 수 있는 함수 생성
*/
const pug = require("pug");
const fs = require("fs");
const http = require("http");

http.createServer((req, res) => {
    fs.readFile("156.pug", "utf-8", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        const fn = pug.compile(data);
        res.end(fn());
    });
}).listen(8000, () => {
    console.log("서버가 동작 중입니다");
});
