// html 페이지 사용
const fs = require("fs");
const http = require("http");

http.createServer((req, res) => {
    fs.readFile("./136_example.html", (error, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}).listen(8002, () => {
    console.log("서버가 동작 중입니다");
});
