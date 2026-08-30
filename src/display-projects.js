import { getProjects } from "./projectManager.js";

export default function updateProjects(){
    const projects = document.querySelector("nav.projects");
    projects.textContent = "";
    const currentProjects = getProjects();
    currentProjects.forEach((project)=>{
        const projectButton = document.createElement("button");
        projectButton.classList.add("project");
        projectButton.id = project;
        projectButton.textContent = project;
        projects.appendChild(projectButton);
})
};