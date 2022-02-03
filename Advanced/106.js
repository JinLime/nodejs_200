// predicate는 JS에서 true 또는 false를 리턴하는 함수이다
// sort(), filter() 등의 함수형 프로그래밍 함수에 사용됨
const isApple = (fruit) => {
    if (fruit === "apple") return true;
    return false;
};

console.log(isApple("apple"));
