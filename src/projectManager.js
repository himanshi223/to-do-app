import renderProjects from "./display-projects.js";

class Project{
    constructor(title,color){
        this.title = title;
        this.color = color;
        this.todos = [];
    }
}

let projects = {};


function setProjects(){
    if(!localStorage.getItem("projects")){
        addNewProject("inbox", "white");
    }
    projects = JSON.parse(localStorage.getItem("projects"));
}

function updateProjects(){
    localStorage.setItem("projects", JSON.stringify(projects));
}

function addNewProject(title, color){
    if(title == "" || getProjectsTitles().includes(title))
        return "invalid";
    const id = crypto.randomUUID();
    const project = new Project(title, color);
    projects[id] = project;
    updateProjects();
    renderProjects();
} 

function getProjects(){
    updateProjects();
    const projectItems = [];
    for(let key in projects){
        projectItems.push({key, title: projects[key].title})
    }
    return projectItems;
}

function addNewTodo(projectId, todo){
    projects[projectId].todos.push(todo);
    updateProjects();
}

function getTodos(projectId) {
    return projects[projectId].todos;
}

function removeProject(projectId){
   const result = delete projects[projectId];
   console.log(projectId, result);
   updateProjects();
   console.log(projects);
}

function getProjectsTitles(){
    const projectTitles = [];
    for(let key in projects){
        projectTitles.push(projects[key].title)
    }
    return projectTitles;
}

export { setProjects, addNewProject, getProjects, addNewTodo, getTodos, removeProject};

