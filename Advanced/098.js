// 0과 1로 시작하며, 그 다음 숫자부터는 앞의 두 수의 합이 되는 수열을 피보나치 수열이라고 한다
const fibonacci = (num) => {
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
};

for (let i = 1; i < 10; i++) {
    console.log(fibonacci(i));
}
