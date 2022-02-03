const randomNumber = Math.random();
const zeroToNine = Math.floor(Math.random() * 10, 10); // 뒤에 10은 10진수. default 10진수이지만 가독성을 위해 사용
const twentyToThirty = Math.floor(Math.random() * 11, 10) + 20;
const oneToTen = Math.floor(Math.random() * 10, 10) + 1;

const makeRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1), 10) + min;
};

console.log(`randomNumber : ${randomNumber}`);
console.log(`zeroToNine : ${zeroToNine}`);
console.log(`twentyToThirty : ${twentyToThirty}`);
console.log(`oneToTen : ${oneToTen}`);

for (let value = 1; value < 10; value++) {
    console.log(`10 to 20 : ${makeRandom(10, 20)}`);
}
