// 여러 개의 파일 이름을 한 번에 바꾸고 싶을 때는 함수를 만든 후 반복문을 이용하면 됨
const fs = require("fs");

const renameFile = (fromFilePathName, toFilePathName) => {
    fs.rename(fromFilePathName, toFilePathName, (err) => {
        if (err) console.log(`ERROR: ${err}`);
    });
};

const fromFilePathName = "./hello.txt";
const toFilePathName = "./bye.txt";

renameFile(fromFilePathName, toFilePathName);
