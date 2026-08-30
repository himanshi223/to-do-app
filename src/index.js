import "./styles.css";
import todo from "./add-todo.js";
import createAddForm from "./create-form.js";
import addForm from  "./add-form.js";
import { addNewProject } from "./projectManager.js";
import displayProjects from "./display-projects.js";

const addTask = document.querySelector("#add-task-button");
addTask.addEventListener("click", ()=>{
    addForm();
});

const addProject = document.querySelector("#add-project-button");
addProject.addEventListener("click",(e)=>{
    e.preventDefault();
    const projectForm = document.querySelector("form.add-new");
    createAddForm();
    const title = document.querySelector("#project-title");
    addNewProject(title.value);
    projectForm.reset();
    displayProjects();
});
