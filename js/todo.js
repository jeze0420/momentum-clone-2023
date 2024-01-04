const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];
const TODOS_KEY = "todos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // filter 함수를 이용해서 조건이 false가 되는 값을 걸러주는 식으로 사용
  saveToDos(); // 그러나 filter 함수는 기존의 배열을 수정하는게 아닌 조건에 따라 없어진 값을 제외한 새로운 배열을 생성함으로 DB 들어갈 배열에 걸러진 값을 담아줌
} // 이후 바뀐 DB를 호출해서 업데이트해주면 todo리스트를 제거하고 난 배열의 값이 DB에 남으므로 삭제 기능 구현 완성

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "x";
  button.addEventListener("click", deleteTodo);
  toDoList.append(li); // append() 는 객체뿐아니라 텍스트 등 다양한 요소를 자식화 가능 이게 더 범용성 있어보임
  li.appendChild(span); // appendChild() 는 태그요소의 자식화
  li.appendChild(button); // append는 순서대로 와야하고 함수의 끝에 와야함
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoOBJ = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoOBJ);
  paintToDo(newTodoOBJ);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); //JSON 문자열을 사용해 JavaScript 객체 리터럴 또는 배열로 구문분석해줌
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); // localstorage에 저장된 값이 있으면 paintToDo 함수를 돌려서 투두리스트를 보여주는 역할
}
