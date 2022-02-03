const express = require("express");

// express 객체 생성
const app = express();

app.use(express.static(`${__dirname}/multimedia`));
app.use((req, res) => {
    res.writeHead("200", { "Content-type": "text/html;charset=utf8" });
    res.end('<img src ="./newyork.jpg" width="100%">');
});

app.listen(3014, () => {
    console.log("Server is running");
});
