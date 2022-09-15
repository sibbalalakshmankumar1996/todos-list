let inputNode = document.getElementById("myTask");
let todoButtonNode = document.getElementById("addTodoButton");
let updateBtn = document.getElementById("updateButton");
let ulNode = document.getElementById("tasksContainer");

let todoList = [
    {
        serialNo:1,
        text:"Learn HTML"
    }
]

let userInputId = "";

function onDeleteTodo(todoId){
    let todoElement = document.getElementById(todoId);
    ulNode.removeChild(todoElement);
}

function onEditTodo(inputId){
    userInputId = inputId;
    let paraElement1 = document.getElementById(userInputId); // p element
    inputNode.value = paraElement1.textContent; // to see input tag content
    inputNode.focus();
    updateBtn.classList.remove("d-none");
    todoButtonNode.classList.add("d-none");
}

updateBtn.onclick = function(){
    let inputParaE1 = document.getElementById(userInputId);
    inputParaE1.textContent = inputNode.value;
    
    updateBtn.classList.add("d-none");
    todoButtonNode.classList.remove("d-none");
    for (let todo of todoList){
        if ("input"+todo.serialNo ==userInputId){
            todo.text = inputNode.value;
        }
    }
    inputNode.value = "";

}

function createAndAppendTodo(todo){
    let todoId = "todo"+todo.serialNo;
    let inputId = "input"+todo.serialNo;
    
    let liNode1 = document.createElement("li");
    liNode1.id = todoId;
    ulNode.appendChild(liNode1);

    let divNode = document.createElement("div");
    divNode.classList.add("label-container","mb-3", "d-flex", "flex-row");
    liNode1.appendChild(divNode);

    let spanNode = document.createElement("span");
    spanNode.classList.add("number");
    divNode.appendChild(spanNode);

    let paraNode = document.createElement("p");
    paraNode.classList.add("label-content")
    paraNode.textContent = todo.text;
    paraNode.id = inputId;
    divNode.appendChild(paraNode);

    let buttonsContainer =document.createElement("div");
    buttonsContainer.classList.add("d-flex", "flex-row");
    buttonsContainer.classList.add("buttons-container");

    let editButton = document.createElement("button");
    
    editButton.classList.add("btn", "btn-warning","ml-3");
    editButton.textContent = "Edit";
    editButton.onclick = function(){
        onEditTodo(inputId);
    }

    let deleteButton = document.createElement("button");
    
    deleteButton.classList.add("btn", "btn-danger", "ml-3");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function(){
        onDeleteTodo(todoId);
    }

    buttonsContainer.appendChild(editButton);
    buttonsContainer.appendChild(deleteButton);

    divNode.appendChild(buttonsContainer);
    }
    
    let todosCount = todoList.length;
    

function addTodoTask(){
    
    let inputValue = inputNode.value;
    if (inputValue === ""){
        alert("Enter a valid Text");
        return; 
    }
    todosCount += 1;
    let newTodo = {
        serialNo:todosCount,
        text:inputValue
    }
    createAndAppendTodo(newTodo);
    inputNode.value = "";
}
    
todoButtonNode.onclick = function(){
    addTodoTask();
}


for (let todo of todoList){
    createAndAppendTodo(todo);
}

