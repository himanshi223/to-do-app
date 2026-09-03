import { deleteTodo, getProjects, getTodos } from "./projectManager.js";

export default function displayTodos(projectId) {
    const projects = getProjects();

    const todos = getTodos(projectId);
    const list = document.querySelector(".list");
    list.textContent = "";

    todos.forEach((todo)=>{
        const todoContainer = document.createElement("div");
        todoContainer.classList.add("todo");
        todoContainer.classList.add(todo.priority);

        const detailsContainer = document.createElement("div");
        detailsContainer.classList.add("container");
        detailsContainer.classList.add("details");

        const label = document.createElement("label");
        label.for = "complete-marker";
        label.textContent = "Mark Complete";
        label.classList.add("sr-only");
        detailsContainer.appendChild(label);

        const complete = document.createElement("input");
        complete.type = "checkbox";
        complete.classList.add = "complete";
        complete.id = "complete-marker";
        detailsContainer.appendChild(complete);

        complete.addEventListener("change" , (e)=>{
            todoContainer.classList.toggle("completed");
            console.log(todo.complete);

            if(todoContainer.classList.contains("completed")){
                todo.markDone();
                todoContainer.remove();
                list.appendChild(todoContainer);
            }
        })


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
        remove.addEventListener("click", ()=>{
            deleteTodo(projectId, todo.id);
            displayTodos(projectId)
        });
        buttonContainer.appendChild(remove);

        todoContainer.appendChild(buttonContainer);
        list.appendChild(todoContainer);
    })
}



function displayDetails(){

}

