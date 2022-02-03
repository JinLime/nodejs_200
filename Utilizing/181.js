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

// Update 쿼리문 사용, 한 필드 수정 (genre 변경)
connection.query(
    'UPDATE books SET genre = "romance" WHERE number = 1 and name = "LUMINE"',
    (err, results, fields) => {
        if (err) throw err;
        console.log(results);
    },
);

// Update 쿼리문 사용, 한 필드 수정 (genre, writer 변경)
connection.query(
    'UPDATE books SET genre = "fantasy", writer = "J" WHERE number = 2 and name = "Mygiant Nerd boyfriend"',
    (err, results, fields) => {
        if (err) throw err;
        console.log(results);
    },
);

// 연결 종료
connection.end();
