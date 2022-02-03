const fs = require("fs");

const contents = "hello\nbye\n안녕";

fs.writeFileSync("./message.txt", contents);

// or

fs.writeFile("./message1.txt", contents, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});
