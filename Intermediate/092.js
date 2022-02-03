const destination = ["런던", "파리", "뉴옥", "로마"];

const serchDestination = "뉴옥";

for (let i = 0; i < destination.length; i++) {
    if (serchDestination === destination[i]) {
        console.log(serchDestination, "입니다");
        break;
    }
}
