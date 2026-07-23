function addNewToDo() {
    const toDoMainContainer = document.getElementById("todo-main-list");
const toDoMainList = document.createElement("li");


    toDoMainContainer.appendChild(toDoMainList);
}
const form = document.getElementById("main-container");
    form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Es hat geklappt!");
})
