/*
https://github.com/winstonjs/winston

npm install winston --save
npm winston-daily-rotate-file --save
npm install moment --save
*/
const winston = require("winston");
const winstonDaily = require("winston-daily-rotate-file");
const moment = require("moment");

const tsFormat = function () {
    return moment().format("YYYY-MM-DD HH:mm:ss.SSS ZZ");
};

const logger = new winston.createLogger({
    transports: [
        new winston.transports.Console({
            timestamp: tsFormat,
            colorize: true,
            showlevel: true,
            level: "debug",
        }),
        new winstonDaily({
            level: "info",
            filename: "Log/logs",
            timestamp: tsFormat,
            dataPattern: "_yyyy-MM-dd.log",
            showlevel: true,
            maxsize: 100000,
            maxFiles: 5,
        }),
    ],
    exceptionHandler: [
        new winstonDaily({
            level: "info",
            filename: "Log/exception",
            timestamp: tsFormat,
            datePattern: "_yyyy-MM-dd.log",
            showlevel: true,
            maxsize: 100000,
            maxFiles: 5,
        }),
        new winston.transports.Console({
            timestamp: tsFormat,
            colorize: true,
            showlevel: true,
            level: "debug",
        }),
    ],
});

logger.info("인포 로깅");
logger.error("에러 로깅");
