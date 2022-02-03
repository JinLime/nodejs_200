/*
비동기 방식은 return이 없기 때문에 다음에 실행할 로직을 callback 함수를 이용해 넘겨주고, 
바로 이어서 실행하는 구조이다. (err, data) => {} 함수를 넘겼음
*/
const fs = require("fs");

fs.readFile("./message.txt", (err, data) => {
    if (err) throw err;
    console.log("async work01");
    console.log(data.toString());
});
