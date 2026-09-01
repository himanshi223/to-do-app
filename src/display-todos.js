import { getProjects, getTodos } from "./projectManager.js";

export default function displayTodos(projectId) {
    const projects = getProjects();
    if(!projectId)
        projectId = projects[0].key;

    const todos = getTodos(projectId);
    const list = document.querySelector(".list");
    list.textContent = "";
    todos.forEach((todo)=>{
        const todoContainer = document.createElement("div");
        todoContainer.classList.add("todo");
        todoContainer.classList.add(todo.priority);

        const detailsContainer = document.createElement("div");
        detailsContainer.classList.add("container");
        const title = document.createElement("h3");
        title.textContent = todo.title;
        detailsContainer.appendChild(title);

        const dueDate = document.createElement("p");
        dueDate.textContent = "Due by: " + todo.dueDate;
        detailsContainer.appendChild(dueDate);

        todoContainer.appendChild(detailsContainer);

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("container");

        const details = document.createElement("button");
        details.classList.add("details");
        details.textContent = "Details";
        details.addEventListener("click", displayDetails);
        buttonContainer.appendChild(details);

        const remove = document.createElement("button");
        remove.classList.add("remove");
        remove.textContent = "Remove";
        remove.addEventListener("click", removeTodo);
        buttonContainer.appendChild(remove);

        todoContainer.appendChild(buttonContainer);
        list.appendChild(todoContainer);
    })
}

function displayDetails(){

}

function removeTodo(){

}