import "./styles.css";
import todo from "./add-todo.js";
import createAddForm from "./create-form.js";
import addForm from  "./add-form.js";
import { setProjects, addNewProject, getProjects } from "./projectManager.js";
import displayProjects from "./display-projects.js";
import displayTodos from "./display-todos.js";
import renderProjects from "./display-projects.js";


window.addEventListener("load",()=>{
    setProjects();
    renderProjects();

    //display todos of inbox by default
    const projects = getProjects();
    displayTodos(projects[0].key);

    //set event listener for other projects
    const tabs = document.querySelectorAll("nav button.project");
    console.log(tabs);
    tabs.forEach((tab)=>{
        tab.classList.remove("selected");
        tab.addEventListener("click",(e)=>{
            console.log("clicked", e.target.dataset.id);
            displayTodos(e.target.dataset.id);
            createAddForm(e.target.dataset.id);
            tabs.forEach((tab)=>tab.classList.remove("selected"));
            tab.classList.add("selected");
        })
    })
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
