import "./styles.css";
import { downloadTodos} from "./add-todo.js";
import addForm from  "./display-form.js";
import { setProjects, addNewProject} from "./projectManager.js";
import {renderProjects, select} from "./display-projects.js";


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
        const title = document.querySelector("#project-title");
        addNewProject(title.value);
        projectForm.reset();
    }
});
