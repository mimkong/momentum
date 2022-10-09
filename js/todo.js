const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //localStoarge는 오직 텍스트만 저장가능 배열x 그래서 배열을 JSON.stringify함
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const litag = document.createElement("li");
    litag.id = newTodo.id
    const spantag = document.createElement("span");
    spantag.innerText = newTodo.text;
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
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//function sayHello(item){
    //console.log("this is the turn of", item);
//} [1]

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    // string으로 바꾼 배열을 실제 쓸 수 있는 배열로 바꾼다 JSON.parse
    toDos = parsedToDos; // 비어있는 toDos array에 parsedToDos를 넣어서 전에 있던 toDo들을 복원
    parsedToDos.forEach(paintToDo);
    //parsedToDos.forEach((item) => console.log("this is the turn of", item)); //[2]
    //parsedToDos.forEach(sayHello); [1]
    // = sayHello("a") -> sayHello("b") -> ...
}