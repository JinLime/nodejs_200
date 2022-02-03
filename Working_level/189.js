const request = require("request");
const cheerio = require("cheerio");
const nodemailer = require("nodemailer");
const schedule = require("node-schedule");

const url = "https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=105";
const iconv = require("iconv-lite");

const date = new Date(); // 날짜

let title;
const arrayTitle = [];

// 구글 보안 수준이 낮은 앱 허용: 사용 해야함
const sendMail = function (arHeadline) {
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "이메일",
            pass: "패스워드",
        },
    });

    // setup email data with unicode symbols
    const mailOptions = {
        from: "이메일", // sender address
        to: "이메일", // list of receivers
        subject: `${date.toLocaleDateString()} Today News`, // Subject line
        html: `<h1>IT/과학 실시간 뉴스 헤드라인</h1><h2>${arHeadline}</h2>`,
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Message sent: ${info.response}`);
        }
        transporter.close();
    });
};

const getNews = () => {
    const parse = (decodedResult) => {
        const $ = cheerio.load(decodedResult);
        const titles = $("li.cluster_item").find("a");

        for (let i = 0; i < titles.length; i++) {
            title = $(titles[i]).text();
            arrayTitle[i] = title.trim();
        }
        return arrayTitle;
    };

    request(
        {
            url: url,
            method: "GET",
            encoding: null,
        },
        (err, res, body) => {
            const decodedResult = iconv.decode(body, "euc-kr");
            const arTiltles = parse(decodedResult);
            sendMail(arTiltles);
        },
    );
};

// Recurrence Rule Schduling
// 0 - Sunday ~ 6 - Saturday
const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0, new schedule.Range(0, 6)];
rule.hour = 10;
rule.minute = 10;

const j = schedule.scheduledJob(rule, () => {
    getNews();
});
