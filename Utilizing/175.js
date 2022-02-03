const nodemailer = require("nodemailer");

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
    subject: "Hello attachment",

    // html body
    html:
        `<h1>Hello HTML</h1><a href="http://www.infopub.co.kr">` +
        `<img src="http://www.infopub.kr/pdspool/common/main_top/2016-11-02.jpg"/></p></a>`,

    // attachment configuration
    attachments: [
        {
            filename: "test",
            path: "./test.sh",
        },
    ],
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Message sent: ${info.response}`);
        console.log(mailOptions.attachments);
    }
    transporter.close();
});
