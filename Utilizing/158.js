/*
pug 페이지에서 사용되는 특수 태그
    #[값] : 데이터를 출력할 때 사용
    - : JS를 입력할 때 사용
    = 값: 데이터를 출력할 때 사용
*/

const pug = require("pug");
const fs = require("fs");
const http = require("http");

http.createServer((req, res) => {
    fs.readFile("158.pug", "utf-8", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        const fn = pug.compile(data);
        res.end(
            fn({
                table_name: "Multiplication table 19 X ?",
                number: "19",
            }),
        );
    });
}).listen(8002, () => {
    console.log("서버가 동작 중입니다");
});
