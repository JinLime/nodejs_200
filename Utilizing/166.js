/*
라우팅 메소드
    get() : GET 요청 발생 시 이벤트 리스너 지정
    post() : POST 요청 발생 시 이벤트 리스너 지정
    all() : 모든 요청 발생 시 이벤트 리스너 지정
    put() : PUT 요청 발생 시 이벤트 리스너 지정
    delete() : DELETE 요청 발생 시 이벤트 리스너 지정
*/

const express = require("express");

const app = express();

app.get("/one", (req, res) => {
    res.send(`<a href="/two">Street 200</a>`);
});

app.get("/two", (req, res) => {
    res.send(`<a href="/one">Street 100</a>`);
});

// ':' 기호를 사용하여 매개변수를 전달할 수 있다.
app.get("/three/:number", (req, res) => {
    const streetNumber = req.params.number;
    res.send(`${streetNumber}`);
});

app.get("/four/:number", (req, res) => {
    const aveNumber = req.params.number;
    res.send(`${aveNumber}`);
});

app.listen(3025, () => {
    console.log("Server is running");
});
