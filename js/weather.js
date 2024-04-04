const API_KEY = "a9b8a61a68af74fbda0200a2c249e5fb";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }); // fetch는 promise,, 시간이 좀 걸린 뒤 일어나기 때문에 서버의 응답을 기다려야 함(then 사용 이유)
} // 성공 함수는 GeolocationPosition object 하나 입력 받음 -> user의 위치를 얻음
function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // 브라우저에서 위치 좌표를 줌
// getCurrentPosition(모든 게 잘 됐을 때 실행될 함수, 에러가 발생했을 때 실행될 함수)

