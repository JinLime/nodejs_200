// /<정규표현식>/g 형식을 사용하면 문자열 전체에서 해당 부분을 찾을 수 있음
const string = "<h1>:::특별가 - 99,000원:::</h1>";

console.log("string :", string);

const result1 = string.replace(/<h1>/g, "");
console.log("result :", result1);

// 역슬래시(\)는 연산자, 특수문자, 예약어 앞에 사용하여 연산자가 아니고 문자열이라고 알려주기 위해 사용
const result2 = string.replace(/<h1>/g, "").replace(/<\/h1>/g, "");
console.log("result2 :", result2);
