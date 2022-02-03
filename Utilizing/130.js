// JSON.stringify()는 JSON 오브젝트를 JSON 문자열(String)로 변환 해줍니다
const fs = require("fs");

const userList = [
    { name: "가", age: 26 },
    { name: "나", age: 25 },
];

fs.writeFileSync("./list.json", JSON.stringify(userList));
