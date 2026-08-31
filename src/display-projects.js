import { getProjects } from "./projectManager.js";

export default function updateProjects(){
    const projects = document.querySelector("nav.projects");
    projects.textContent = "";
    const currentProjects = getProjects();
    console.log(currentProjects);
    currentProjects.forEach((project)=>{
        const projectTitle = project.title;
        const projectButton = document.createElement("button");
        projectButton.classList.add("project");
        projectButton.id = projectTitle;
        projectButton.dataset.id = project.id;
        projectButton.textContent = projectTitle;
        projects.appendChild(projectButton);
})
};