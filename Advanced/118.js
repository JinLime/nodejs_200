/*
Promise.all([프로미스1, 프로미스2])
.then(()=>{뒤에 처리할 작업})
*/

const promiseFirst = new Promise((resolve) => resolve(1)).then((result) => `${result + 10}`);

const promiseSecond = new Promise((resolve) => resolve(2)).then((result) => `${result + 20}`);

Promise.all([promiseFirst, promiseSecond]).then((result) => {
    console.log("result :", result);
    console.log("sum :", Number(result[0]) + Number(result[1]));
});
