const numbers = [1, 2, 19, 38, 4, 98, 25];

const isFirstBiggerThenSecond = (first, second) => {
    if (first > second) return true;
    return false;
};

const sortedNumbers = numbers.sort(isFirstBiggerThenSecond);
console.log(sortedNumbers);

// sort 함수 내림차순
numbers.sort(function (a, b) {
    console.log(numbers);
    console.log(b - a);
    return b - a;
});

console.log(numbers);
