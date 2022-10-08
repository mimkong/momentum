const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
    //localStoarge는 오직 텍스트만 저장가능 배열x 그래서 배열을 stringify함
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const litag = document.createElement("li");
    const spantag = document.createElement("span");
    spantag.innerText = newTodo;
    const buttontag = document.createElement("button");

    buttontag.innerText = "<3";
    buttontag.addEventListener("click", deleteTodo);
    litag.appendChild(spantag);
    litag.appendChild(buttontag);
    toDoList.appendChild(litag);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //input의 현재 value를 새로운 변수에 복사
    toDoInput.value = "";// 그 다음 우리가 무엇을 하든 newToDo 변수와는 아무 상관이 없다.
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
