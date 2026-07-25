let listOfTodos = [];

function addNewToDo() {
    const toDoMainContainer = document.getElementById("todo-main-list");
const toDoMainList = document.createElement("li");


    toDoMainContainer.appendChild(toDoMainList);
}
const form = document.getElementById("main-container");
    form.addEventListener("submit", function(event) {
    event.preventDefault();
   // const fieldOfTodo = document.getElementById("add-new-todo").value;
    listOfTodos.push(document.getElementById("add-new-todo").value);
    document.getElementById("add-new-todo").value = "";
console.log(listOfTodos);
})
