// morgan 미들웨어를 통해 웹 요청이 들어왔을 때 로깅
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("combined"));
app.use(morgan("common"));
app.use(morgan(":method + :date"));
app.use(morgan(" :status + :url"));
app.use((req, res) => {
    res.send("express morgan");
});

app.listen(3026, () => {
    console.log("Server is running");
});
