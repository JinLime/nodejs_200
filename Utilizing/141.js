/*
쿠키(cookie)란 인터넷 사용자가 어떠한 웹 사이트를 방문할 경우 그 사이트가 사용하고 있는 서버를 통해 
인터넷 사용자의 컴퓨터에 설치되는 작은 기록 정보 파일을 의미한다
쿠키는 서버와 클라이언트에서 모두 저장하고 사용 가능하며, 일정 기간 동안 데이터를 저장할 수 있기 때문에
로그인 상태를 일정 시간 유지해야 하는 웹 사이트에서 사용한다.
*/
const http = require("http");

http.createServer((req, res) => {
    // cookie
    res.writeHead(200, {
        "Content-Type": "test/html",
        "Set-Cookie": ["name = A", "age = 25"],
    });

    // cookie output
    res.end(`<h1>${req.headers.cookie}</h1>`);
}).listen(8001, () => {
    console.log("서버가 동작 중입니다");
});
