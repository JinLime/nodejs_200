// request(옵션, 호출한 후 실행할 함수);
const request = require("request");

request(
    {
        url: "https://www.google.com/",
        method: "GET",
    },
    (error, response, body) => {
        console.log(body);
    },
);
