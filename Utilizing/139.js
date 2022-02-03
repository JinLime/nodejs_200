/*
HTTP 프로토콜에서 메시지 요청하는 방법은 GET과 POST를 가장 많이 사용한다
GET은 그냥 요청하고 (ex 네이버에서 키워드를 입력해 검색)
POST는 내용을 넣어서 요청한다 (ex 회원가입 할 때, id, 인적사항 등 함께 보낼 때)
*/
const http = require("http");
const url = require("url");

http.createServer((req, res) => {
    const get = url.parse(req.url, true).query;

    if (req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`<h1>${JSON.stringify(get)}</h1>`);
        console.log(`${req.method}방식의 요청입니다`);
    } else if (req.method === "POST") {
        console.log(`${req.method}방식의 요청입니다`);
    }
}).listen(8006, () => {
    console.log("서버가 동작 중입니다");
});
