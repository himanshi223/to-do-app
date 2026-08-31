class Project{
    constructor(title,color){
        this.title = title;
        this.color = color;
        this.todos = [];
    }
}

let projects = {};
function setProjects(){
    if(localStorage.length<1)
        addNewProject("index", "white");
    projects = JSON.parse(localStorage.getItem("projects"));
}

function updateProjects(){
    localStorage.setItem("projects", JSON.stringify(projects));
}

function addNewProject(title, color){
        const id = crypto.randomUUID();
        const project = new Project(title, color);
        projects[id] = project;
        updateProjects();
} 

function getProjects(){
    const projectItems = [];
    setProjects();
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

export {addNewProject, getProjects, addNewTodo, getTodos};

