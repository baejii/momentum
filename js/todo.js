const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; // 항상 빈 배열로 시작, let을 통해 업데이트가 가능하도록 만듦

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // toDos array를 localStorage에 넣는 것, JSON.stringify를 통해 array 자체를 문자열로 만듦
    // 새로고침을 하면 로컬스토리지에 있던 기존 toDos 리셋됨
}

function deleteToDo(event) {
    const li = event.target.parentElement; // 우리가 삭제하고 싶은 리스트
    // HTML의 event -> target: 클릭된 HTML element (button) -> parentElement: 클릭된 element의 부모 (li)
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    // toDo는 toDos DB에 있는 요소 중 하나, 우리가 클릭한 li.id와 다른 toDo는 남겨두자
    saveToDos(); // toDos DB에서 todo를 지운 뒤에 saveToDos를 한 번 더 불러야 함
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); // li 안에 span을 자식으로 추가
    li.appendChild(button); // li 안에 button을 자식으로 추가
    toDoList.appendChild(li); // toDoList 안에 list를 자식으로 추가
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; // submit되기 전에 입력한 todo의 현재 입력값을 새로운 변수에 복사
    toDoInput.value = ""; // 그 후, 입력한 todo 값 비움
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj); // 입력한 todo를 Object 형식으로 toDos array에 넣기
    paintToDo(newTodoObj); // text가 아닌 newTodoObj
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); // JSON.parse()를 통해 데이터타입을 string에서 object로 바꿈
    toDos = parsedToDos; // localStorage에 toDo들이 있으면 toDos에 parsedToDos를 넣어서 전에 있던 toDo들을 복원 (새로 고침 시 이전 toDo들 그대로 있기 위함)
    parsedToDos.forEach(paintToDo); 
    // forEach() 함수 -> 배열 순회 (array(parsedToDos)에 있는 각각의 item에 대해 function(paintToDo)을 실행할 수 있도록)
    // paintToDo는 텍스트를 받는데 JavaScript는 그 텍스트를 paintToDo에게 전달해줌
}

 