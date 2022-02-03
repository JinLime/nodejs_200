const getYymmdd = (date) => {
    const yyyy = date.getFullYear();
    const mm = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const dd = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

    return `${yyyy}-${mm}-${dd}`;
};

const yymmdd = getYymmdd(new Date());
const yymmdd20220222 = getYymmdd(new Date(2022, 2 - 1, 22));

console.log(yymmdd);
console.log(yymmdd20220222);
