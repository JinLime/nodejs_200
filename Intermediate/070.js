const greeting = "hello";
const dateString = "2022-01-20T11:00:00";
const smallBracket = "()";

// replace
const replacedGreeting = greeting.replace("el", "");
const replacedDateString = dateString.replace("T", " ");
const middleBracket = smallBracket.replace("(", "{").replace(")", "}");

// print
console.log("el 없애기 : %s", replacedGreeting);
console.log("T를 공백으로 : %s", replacedDateString);
console.log("() => {} : %s", middleBracket);
