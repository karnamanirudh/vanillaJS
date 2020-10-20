var inputText = document.getElementById('text-field');
var toDoList = document.getElementById('todo-List');
function addListItem(event) {
    if (event.key === 'Enter' && inputText.value.length > 0) {
        event.preventDefault();
        var toDoText = inputText.value;
        const listItem = document.createElement("li");
        listItem.innerText = toDoText;
        toDoList.appendChild(listItem);
        inputText.value = ''
    }
}

function addToDo() {
    if (inputText.value.length > 0) {
        var toDoText = inputText.value;
        const listItem = document.createElement("li");
        listItem.innerText = toDoText;
        toDoList.appendChild(listItem);
        inputText.value = ''
    }
}


document.getElementById('text-field')
    .addEventListener("keydown", addListItem);
document.getElementById('add-todo').addEventListener("click", addToDo)