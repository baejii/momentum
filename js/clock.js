const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date()
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // getClock 즉시 실행
setInterval(getClock, 1000); // 매 초마다 getClock 다시 실행