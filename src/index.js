import "./styles.css";
import {addMethodsToTodo, addTodo, downloadTodos} from "./add-todo.js";
import createAddForm from "./create-form.js";
import addForm from  "./add-form.js";
import { setProjects, addNewProject, getProjects } from "./projectManager.js";
import {renderProjects, select} from "./display-projects.js";
import displayTodos from "./display-todos.js";


window.addEventListener("load",()=>{
    downloadTodos();
    setProjects();
    renderProjects();
    const inbox = document.querySelector("nav .button-container");
    select(inbox);

    const addTask = document.querySelector("#add-task-button");
    addTask.addEventListener("click", ()=>{
        addForm();
    });

});

const addProject = document.querySelector("#add-project-button");
addProject.addEventListener("click",(e)=>{
    e.preventDefault();
    const projectForm = document.querySelector("form.add-new");
    if(projectForm.checkValidity()){
        createAddForm();
        const title = document.querySelector("#project-title");
        addNewProject(title.value);
        projectForm.reset();
    }
});
