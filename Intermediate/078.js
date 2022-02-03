// .math()를 이용하면 원하는 패턴으로 문자열에서 필요한 부분을 추출할 수 있음
const text = "hello my name is sj";
const matched = text.match(/[a-l]{1,3}/g); // A~L까지 1개 이상 3개 이하 문자열을 추출

console.log(matched);
