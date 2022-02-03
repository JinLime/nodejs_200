const cheerio = require("cheerio");
const crawler = require("./152");
const fs = require("fs");

const parse = (decodeResult) => {
    const $ = cheerio.load(decodeResult);
    const titles = $("h3.r").find("a");
    titles.each((index, element) => {
        const title = $(element).text();
        console.log(title);
        fs.appendFile("./titles.txt", `${title}\n`);
    });
};

crawler.crawl(parse)({ q: "가로수길 맛집" });
