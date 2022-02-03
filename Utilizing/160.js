// express 모듈은 PORT 3000을 기본으로 사용함
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello express module");
});

app.listen(3000, () => {
    console.log("server is running");
});
