const fs = require("fs");

fs.readFile("./list.json", (err, data) => {
    if (err) throw err;
    const json = JSON.parse(data.toString());
    console.log("name: %s, age: %d", json[0].name, json[0].age);
    console.log("name: %s, age: %d", json[1].name, json[1].age);
});
