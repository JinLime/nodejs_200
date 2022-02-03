const schedule = require("node-schedule");

// 특정 시간에 한 번
// 2022년 02월 01일 오후 22시 15분에 수행할 작업
const date = new Date(2022, 2, 1, 22, 15, 0);

console.log(date);

const j = schedule.scheduleJob(date, () => {
    console.log("no pain, no gain");
});

// 매 시간마다 한 번
const rule = new schedule.RecurrenceRule();
rule.minute = 30;

const k = schedule.scheduleJob(rule, () => {
    console.log("good job");
});

// 작업 취소
// j.cancel();
// k.cancel();
