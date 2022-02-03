/*
pug 형식
    style. : style 태그를 입력할 때 사용
    script. : script 태그를 입력할 때 사용
    // : 주석처리
    # : div 태그
    . : div class 속성
    ul : ul 태그
    li : li 태그
*/

const pug = require("pug");
const fs = require("fs");
const http = require("http");

http.createServer((req, res) => {
    fs.readFile("157.pug", "utf-8", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        const fn = pug.compile(data);
        res.end(fn());
    });
}).listen(8001, () => {
    console.log("서버가 동작 중입니다");
});
