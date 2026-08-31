import "./styles.css";
import todo from "./add-todo.js";
import createAddForm from "./create-form.js";
import addForm from  "./add-form.js";
import { addNewProject, getProjects } from "./projectManager.js";
import displayProjects from "./display-projects.js";
import displayTodos from "./display-todos.js";


window.addEventListener("load",()=>{
    displayProjects();
    const projects = getProjects();
    displayTodos(projects[0].key);
});

const addTask = document.querySelector("#add-task-button");
addTask.addEventListener("click", ()=>{
    addForm();
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
        displayProjects();
    }
});

const tabs = document.querySelectorAll("nav .project");
tabs.forEach((tab)=>{
    tab.addEventListener("click",()=>{
        displayTodos(tab.dataset.id);
    })
})
