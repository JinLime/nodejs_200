/*
모듈의 용도
    mysql : 데이터베이스 연겨하여 데이터를 생성, 조회, 수정, 삭제
    express : 웹 서버를 구동하고 각 경로를 라우팅 지정
    fs : html 파일 read
    ejs : 문자열을 HTML 문자열로 변경
    body-parser : application/x=www-form-urlencoded 파싱
*/

// CRUD에 필요한 모듈 사용
const mysql = require("mysql");
const express = require("express");
const fs = require("fs");
const ejs = require("ejs");
const bodyParser = require("body-parser");

// 연결할 DB 정보 입력
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "comicbook",
    port: "3306",
});

const app = express();
app.use(
    bodyParser.urlencoded({
        extended: false,
    }),
);

app.listen(3013, () => {
    console.log("Server is running");
});

// 데이터베이스 연결
connection.connect();

// 데이터 조회
app.get("/", (req, res) => {
    fs.readFile("192_bookList.html", "utf-8", (err, data) => {
        // Select 쿼리문 사용
        connection.query("SELECT * FROM books", (err, results, fields) => {
            if (err) throw err;
            res.send(
                ejs.render(data, {
                    data: results,
                }),
            );
        });
    });
});

// 데이터 추가
app.get("/create", (req, res) => {
    fs.readFile("193_insertNewBook.html", "utf-8", (err, data) => {
        if (err) throw err;
        res.send(data);
    });
});

// 데이터 추가
app.post("/create", (req, res) => {
    const body = req.body;
    connection.query(
        "INSERT INTO books (genre, name, writer, releasedate) VALUE (?, ?, ?, ?)",
        [body.genre, body.name, body.writer, body.releasedate],
        () => {
            // 조회 페이지로 이동
            res.redirect("/");
        },
    );
});
