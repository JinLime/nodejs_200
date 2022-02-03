// cookie parser
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.get("/set", (req, res) => {
    console.log("Set Cookie 호출");
    res.cookie("user", {
        id: "0070",
        name: "brian",
        authorized: true,
    });
    res.redirect("/get");
});

app.get("/get", (req, res) => {
    console.log("Get Cookie 호출");
    res.setDefaultEncoding(req.cookies);
});

app.listen(3027, () => {
    console.log("Server is running");
});
