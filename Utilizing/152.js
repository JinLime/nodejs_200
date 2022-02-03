const request = require("request");
const iconv = require("iconv-lite");
const charset = require("charset");

const crawl = (callback) => (queryString) =>
    request(
        {
            url: "https://www.google.com/search",
            encoding: null,
            method: "GET",
            qs: queryString,
            timeout: 10000,
            followRedirect: true,
            maxRedirects: 10,
        },
        (err, res, body) => {
            if (!err && res.statusCode === 200) {
                const enc = charset(res.headers, body);
                const decodeResult = iconv.decode(body, enc);
                callback(decodeResult);
            } else {
                console.log(`err${res.statusCode}`);
            }
        },
    );

module.exports.crawl = crawl;
