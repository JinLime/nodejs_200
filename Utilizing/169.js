// multipart/form-data 인코딩 방식으로 파일을 업로드 할 수 있게 해주는 미들웨어가 connect-multiparty
const express = require("express");
const fs = require("fs");
const multipart = require("connect-multiparty");

const app = express();

app.use(multipart({ uploadDir: `${__dirname}/upload` }));

app.get("/", (req, res) => {
    fs.readFile("169_connect-multiparty.html", (err, data) => {
        res.send(data.toString());
    });
});

app.post("/", (req, res) => {
    const imgFile = req.files.image;
    const outputPath = `${__dirname}/upload/${Date.now()}_${imgFile.name}`;
    console.log(outputPath);
    console.log(req.body, req.files);
    fs.rename(imgFile.path, outputPath, () => {
        res.redirect("/");
    });
});

app.listen(3029, () => {
    console.log("Server is running");
});
