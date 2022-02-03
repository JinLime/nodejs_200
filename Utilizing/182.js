// MySQL 모듈 사용
const mysql = require("mysql");

// 연결할 DB 정보 입력
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "comicbook",
    port: "3306",
});

// 데이터베이스 연결
connection.connect();

// Delete 쿼리문 사용
connection.query("DELETE FROM books WHERE number = 2", (err, results, fields) => {
    if (err) throw err;
    console.log(results);
});

// 연결 종료
connection.end();
