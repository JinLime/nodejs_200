// MySQL 모듈 사용
const mysql = require("mysql");

// 연결할 DB 정보 입력
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "comicbook",
});

// 데이터베이스 연결
connection.connect();

// create 쿼리문 사용
connection.query(
    "CREATE TABLE books (number INT NOT NULL AUTO_INCREMENT PRIMARY KEY, genre VARCHAR(20) NOT NULL, name VARCHAR(50) NOT NULL, writer VARCHAR(30) NOT NULL, releasedate date NOT NULL)",
    (err, results, fields) => {
        if (err) throw err;
        console.log(results);
    },
);

connection.query("describe books", (err, results, fields) => {
    if (err) throw err;
    console.log(results);
});

// 연결 종료
connection.end();
