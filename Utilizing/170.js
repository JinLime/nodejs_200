/*
session은 서버에 사용자가 로그인했는지 여부 등의 정보를 저장하는데 사용된다
클라이언트에 세션 식별자 쿠키를 부여하고 그 쿠키와 대응되는 저장소에 데이터를 저장한다
express-session은 세션을 생성할 때 사용하는 미들웨어다
*/
const express = require("express");
const parseurl = require("parseurl");
const session = require("express-session");

const app = express();

app.use(
    session({
        secret: "keyboard dog",
        resave: false,
        saveUninitialized: true,
    }),
);

app.use((req, res, next) => {
    if (!req.session.views) {
        req.session.views = {};
    }

    console.log(req.session);

    // get the URL
    const pathname = parseurl(req).pathname;

    // count the views
    req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;

    next();
});

app.get("/puddle", (req, res) => {
    res.send(`Hello puddle! you viewed this page ${req.session.views["/puddle"]} times`);
});

app.get("/biggle", (req, res) => {
    res.send(`Hello biggle! you viewed this page ${req.session.views["/biggle"]} times`);
});

app.listen(3030, () => {
    console.log("Server is running");
});
