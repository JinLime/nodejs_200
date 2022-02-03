// 함수 선언식(Function declaration)
function printMessage(message) {
    console.log(message);
}

// 함수 표현식(Function expression)
const printWelcome = function () {
    console.log("welcome");
};

// 화살표 함수
const printBye = () => {
    console.log("Bye");
};

printMessage("Hi");
printWelcome();
printBye();
