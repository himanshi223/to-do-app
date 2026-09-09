import {getTodos } from "./projectManager.js";
import deleteTodo from "./delete-todo.js";
import { getTodo } from "./add-todo.js";
import {createEditForm} from "./create-form.js";
import displayForm from "./display-form.js";

export default function displayTodos(projectId) {

    const todoIds = getTodos(projectId);
    const todos = todoIds.map((todoId)=>getTodo(todoId));
    console.log(todos);
    const list = document.querySelector(".list");
    list.textContent = "";

    todos.forEach((todo)=>{
        const todoContainer = document.createElement("div");
        todoContainer.classList.add("todo");
        todoContainer.classList.add(todo.priority);
        todoContainer.dataset.id = todo.id;

        const detailsContainer = document.createElement("div");
        detailsContainer.classList.add("container");
        detailsContainer.classList.add("details");

        const label = document.createElement("label");
        label.htmlFor = "complete-marker";
        label.textContent = "Mark Complete";
        label.classList.add("sr-only");
        detailsContainer.appendChild(label);

        const complete = document.createElement("input");
        complete.type = "checkbox";
        complete.classList.add = "complete";
        complete.id = "complete-marker";
        detailsContainer.appendChild(complete);

        complete.addEventListener("change" , ()=>{
            todoContainer.classList.toggle("completed");

            if(todoContainer.classList.contains("completed")){
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
        buttonContainer.classList.add("button-container");

        const details = document.createElement("button");
        details.classList.add("details");
        details.textContent = "Details";
        details.addEventListener("click",()=> displayDetails(todo.id));
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



function displayDetails(todoId){
    const todo = getTodo(todoId);
    console.log(todo);

    const dialog = document.querySelector(".details-dialog")

    const details = document.createElement("div");
    details.classList.add("details-container");

    const title = document.createElement("h4");
    title.classList.add("title");
    title.textContent = todo.title;
    details.appendChild(title);

    const status = document.createElement("p");
    status.textContent = todo.complete ? "Completed" : "Not completed"
    details.appendChild(status);

    const priority = document.createElement("p");
    if(todo.priority == "high")
        priority.textContent = "High Priority Task";
    else if(todo.priority == "medium")
        priority.textContent = "Medium Priority Task";
    else 
        priority.textContent = "Low Priority Task";
    details.appendChild(priority);

    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = "Description: " + todo.description;
    details.appendChild(description);

    const dueDate = document.createElement("p");
    dueDate.textContent = "Due by: " ;
    details.appendChild(dueDate);

    const notes = document.createElement("p");
    notes.textContent = "Notes: " + todo.notes;
    details.appendChild(notes);

    const project = document.createElement("p");
    project.textContent = "Project: " + todo.project;
    details.appendChild(project);

    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttons-container");

    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", ()=>{
        dialog.textContent = "";
        dialog.close();
    })
    buttonsContainer.appendChild(closeButton);

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", ()=>{
        dialog.textContent = "";
        dialog.close();
        createEditForm(todoId);
        displayForm();
    })
    buttonsContainer.appendChild(editButton);

    dialog.appendChild(details);
    dialog.appendChild(buttonsContainer);
    dialog.showModal();
}

