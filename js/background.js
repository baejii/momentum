const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg"
];

const chosenImage = images[Math.floor(Math.random() * quotes.length)];

const bgImage = document.createElement("img"); // body에 <img> 생성

bgImage.src = `img/${chosenImage}`; // 생성한 img 태그 안 src 속성에 랜덤한 사진이 들어갈 수 있도록 해줌
document.body.appendChild(bgImage); // appendChild(): body에 html을 추가