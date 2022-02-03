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

// Select 쿼리문 * 사용
connection.query("SELECT * FROM books", (err, results, fields) => {
    if (err) throw err;
    console.log(results);
});

// Select 쿼리문 (각각의 필드 명칭) 사용
connection.query(
    "SELECT number, genre, name, writer, releasedate FROM books",
    (err, results, fields) => {
        if (err) throw err;
        console.log(results);
    },
);

// Select 쿼리문 WHERE 사용
connection.query('SELECT * FROM books WHERE genre = "fantasy"', (err, results, fields) => {
    if (err) throw err;
    console.log(results);
});

// Select 쿼리문 WHERE, OR 사용
connection.query(
    'SELECT * FROM books WHERE genre = "fantasy" OR genre = "comedy"',
    (err, results, fields) => {
        if (err) throw err;
        console.log(results);
    },
);

// Select 쿼리문 LIKE 사용
connection.query('SELECT * FROM books WHERE releasedate LIKE "2017%"', (err, results, fields) => {
    if (err) throw err;
    console.log(results);
});

// Select 쿼리문 ORDER BY
connection.query(
    "SELECT number, genre, name, writer, releasedate FROM books ORDER BY releasedate;",
    (err, results, fields) => {
        if (err) throw err;
        console.log(results);
    },
);

// Select 쿼리문 ORDER BY DESC
connection.query(
    "SELECT number, genre, name, writer, releasedate FROM books ORDER BY releasedate DESC;",
    (err, results, fields) => {
        if (err) throw err;
        console.log(results);
    },
);

// 연결 종료
connection.end();
