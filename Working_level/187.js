const request = require("request");
const cheerio = require("cheerio");

const url = "https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=105";
const iconv = require("iconv-lite");

let title;
const arrayTitle = [];

const parse = (decodedResult) => {
    const $ = cheerio.load(decodedResult);
    const titles = $("li.cluster_item").find("a");

    for (let i = 0; i < titles.length; i++) {
        title = $(titles[i]).text();
        arrayTitle[i] = title.trim();
    }
    console.log(arrayTitle);
};

request(
    {
        url: url,
        method: "GET",
        encoding: null,
    },
    (err, res, body) => {
        const decodedResult = iconv.decode(body, "euc-kr");
        parse(decodedResult);
    },
);
