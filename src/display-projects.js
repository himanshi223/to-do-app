import { getProjects, removeProject } from "./projectManager.js";

export default function renderProjects(){
    const projects = document.querySelector("nav.projects");
    projects.textContent = "";
    const currentProjects = getProjects();
    console.log(currentProjects);
    currentProjects.forEach((project)=>{
        const projectTitle = project.title;
        const projectButton = document.createElement("button");
        projectButton.classList.add("project");
        projectButton.id = projectTitle;
        projectButton.dataset.id = project.key;
        projectButton.textContent = projectTitle;

        const removeButton = document.createElement("button");
        removeButton.classList.add("remove-project");
        removeButton.textContent = "Delete";
        removeButton.dataset.id = project.key;
        removeButton.addEventListener("click", (e)=>{
            removeProject(e.target.dataset.id);
            renderProjects();
        });

        if(projectTitle!= "inbox")
            projectButton.appendChild(removeButton);
        projects.appendChild(projectButton);
})
};