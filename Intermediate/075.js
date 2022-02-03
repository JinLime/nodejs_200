const string = "<h1>특별가 - </h1><h2>99,000원</h2>";

// <..>은 <로 시작하고 .한글자 .두글자 >로 끝나는 패턴 ex) <h1>, <h2>
const result1 = string.replace(/<..>/g, "");
// <...>은 <로 시작하고 .한글자 .두글자. 세글자 >로 끝나는 패턴 ex) </h1>, </h2>
const result2 = string.replace(/<...>/g, "");

console.log("<..> :", result1);
console.log("<...> :", result2);
