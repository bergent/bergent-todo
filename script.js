let addButton = document.querySelector(".input-submit");
let todoList = document.querySelector(".todo-list");


function createTodoTask() {
    let inputField = document.querySelector('.input-field')
    let userInput = inputField.value;
    
    let newTask = document.createElement('li');
    newTask.classList.add('todo-item');
    
    let newTaskContent = document.createElement('p');
    newTaskContent.classList.add('todo-content');
    newTaskContent.textContent = userInput;
    newTask.appendChild(newTaskContent);

    let newTaskCloseButton = document.createElement('span');
    newTaskCloseButton.classList.add('todo-close-button');
    newTask.appendChild(newTaskCloseButton);

    newTaskCloseButton.addEventListener('click', () => {
        newTask.remove();
    });

    inputField.value = "";
    todoList.appendChild(newTask);
}


addButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    createTodoTask();
});