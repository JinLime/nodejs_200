// request에 이어 또 다른 웹 스크래핑 모듈 cheerio
const cherrio = require("cheerio");

const $ = cherrio.load(`<html><h2 class='title'>hello</h2></html>`);
const titleText = $("h2.title").text();

console.log("titleText:", titleText);
