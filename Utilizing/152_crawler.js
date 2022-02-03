const cheerio = require("cheerio");
const crawler = require("./152");

const parse = (decodeResult) => {
    const $ = cheerio.load(decodeResult);
    const titles = $("h3.r").find("a");
    for (let i = 0; i < titles.length; i++) {
        const title = $(titles[i].text());
        console.log(title);
    }
};

crawler.crawl(parse)({ q: "서울대입구역 맛집" });
