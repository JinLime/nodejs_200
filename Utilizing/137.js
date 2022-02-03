// 음악 파일, 이미지 파일 사용
const fs = require("fs");
const http = require("http");

http.createServer((req, res) => {
    fs.readFile("./newyork.jpg", (error, data) => {
        res.writeHead(200, { "Content-Type": "image/jpeg" });
        res.end(data);
    });
}).listen(8003, () => {
    console.log("서버가 동작 중입니다");
});

http.createServer((req, res) => {
    fs.readFile("./music.mp3", (error, data) => {
        res.writeHead(200, { "Content-Type": "audio/mp3" });
        res.end(data);
    });
}).listen(8003, () => {
    console.log("서버가 동작 중입니다");
});
