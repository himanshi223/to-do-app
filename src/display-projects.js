import { getProjects, removeProject } from "./projectManager.js";
import displayTodos from "./display-todos.js";
import createAddForm from "./create-form.js";


function renderProjects(id){
    const projects = document.querySelector("nav.projects");
    projects.textContent = "";
    const currentProjects = getProjects();

    currentProjects.forEach((project)=>{
        const tab = document.createElement("div");
        tab.classList.add("button-container");
        tab.dataset.id = project.key;

        const projectTitle = project.title;
        const projectButton = document.createElement("button");
        projectButton.classList.add("project");
        projectButton.id = projectTitle;
        projectButton.dataset.id = project.key;
        projectButton.textContent = projectTitle;
        tab.appendChild(projectButton);


        const removeButton = document.createElement("button");
        removeButton.classList.add("remove-project");
        removeButton.textContent = "Delete";
        removeButton.dataset.id = project.key;
        removeButton.addEventListener("click", (e)=>{
            removeProject(e.target.dataset.id);
            renderProjects();
        });
        if(projectTitle!= "inbox")
            tab.appendChild(removeButton);

        projects.appendChild(tab);
    });
    const tabs = document.querySelectorAll("div.button-container>.project");
        tabs.forEach(tab => {
            tab.addEventListener("click",(e)=>{
                tabs.forEach((tab)=>tab.parentNode.classList.remove("selected"));
                select(e.target.parentNode);
            });
            if(id===tab.dataset.id){
                select(tab.parentNode);
            }
    });
}

function select(tab){
    console.log(tab);
    tab.classList.add("selected");
    displayTodos(tab.dataset.id);
    tab.classList.add("selected");
    createAddForm(tab.dataset.id);
}

export {renderProjects, select}