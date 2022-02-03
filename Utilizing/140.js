const fs = require("fs");
const http = require("http");

http.createServer((req, res) => {
    if (req.method === "GET") {
        fs.readFile("./140_example.html", (error, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
            console.log(`${req.method}방식의 요청입니다`);
        });
    } else if (req.method === "POST") {
        req.on("data", (data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
            console.log(`${req.method}방식의 요청입니다`);
        });
    }
}).listen(8013, () => {
    console.log("서버가 동작 중입니다");
});
