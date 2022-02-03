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
    subject: "Hello", // subject line
    text: "Hello world?", // plain text body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Message sent: ${info.response}`);
    }
    transporter.close();
});
