const scores = [85, 95, 76];

const sum = (list, total, length) => {
    if (length === list.length) return total;
    return sum(list, total + list[length], length + 1);
};

console.log("sum :", sum(scores, 0, 0)); // total, length는 0으로 넣고 함수를 호출
