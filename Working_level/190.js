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

// Select 쿼리문 * 사용
connection.query("SELECT * FROM books", (err, results, fields) => {
    if (err) throw err;
    console.log(results);
});

// 연결 종료
connection.end();
