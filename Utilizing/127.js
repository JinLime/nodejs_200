const fs = require("fs");

const list = [1, 2, 3, 4, 5];

list.forEach((item) => fs.appendFileSync("./chapter.txt", `chapter ${item}\n`));
