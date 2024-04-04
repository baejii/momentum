const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// step 3
function onLoginSubmit(event) {
    event.preventDefault(); // 화면의 기본 동작(새로고침) 방지
    loginForm.classList.add(HIDDEN_CLASSNAME); // class name hidden을 더해줘서 form을 다시 숨겨준다
    const username = loginInput.value; // value를 username이라는 key값으로 저장시켜준다
    localStorage.setItem(USERNAME_KEY, username); // local storage에 username key와 함께 username 값을 저장한다
    paintGreetings(username); // paintGreetings 함수 호출 - 유저정보가 input으로부터 오고 있다
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username} !`; // ` == 맥북: fn+₩, 비어있는 h1인 요소 안에 'Hello username !'이라는 텍스트 추가
    greeting.classList.remove(HIDDEN_CLASSNAME); // h1에서 hidden이라는 class를 삭제해서 h1 드러냄
}

// step 1
const savedUsername = localStorage.getItem(USERNAME_KEY); // 앱이 시작되면 local storage에서 savedusername을 얻으려고 할텐데, 거기서 username이라는 key를 가지고 찾게 된다

// step 2
if (savedUsername === null) { // 처음에는 key와 value가 null이므로 = local storage에 유저정보가 없을 때
    loginForm.classList.remove(HIDDEN_CLASSNAME); // form에 hidden을 지워 form을 다시 보여준다
    loginForm.addEventListener("submit", onLoginSubmit); // form의 submit을 기다리고 form이 submit되면,, 함수 onLoginSubmit 호출
} else { // local storage에 유저정보가 있으면 거기서 유저정보를 받아서 인자로 받아옴
    paintGreetings(savedUsername); // paintGreetings 함수 호출 - 유저정보가 local storage에서 오고 있다
}
