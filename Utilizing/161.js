/*
response 객체의 메소드
    res.download() : 파일이 다운로드 되도록 프롬프트
    res.end() : 응답 프로세스를 종료
    res.json() : JSON 응답을 전송
    res.jsonp() : JSONP 지원을 통해 JSON 응답을 전송
    res.render() : 탬플릿을 렌더링
    res.send() : 다양한 유형의 응답을 전송(문자열 HTML, 객체 JSON, 배열 JSON 형태로)
*/
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    const result = [];
    const multipleNumber = 9;
    for (let i = 1; i < 10; i++) {
        result.push({
            number: `${multipleNumber}x${i}`,
            multiple: multipleNumber * 1,
        });
    }
    res.send(result);
});

app.get("/error", (req, res) => {
    res.status(404).send("404 Error");
});

app.listen(3001, () => {
    console.log("server is running");
});
