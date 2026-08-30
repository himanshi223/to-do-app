const projects = [];

class Project{
    constructor(title,color){
        this.title = title;
        this.color = color;
    }
}

function addNewProject(title, color){
    if(!getProjects().includes(title) && title != ""){
    projects.push(new Project(title, color));
}
} 

addNewProject("inbox", "white");

function getProjects(){
    const projectTitles = [];
    projects.forEach(project => {
        projectTitles.push(project.title);
        console.log(projectTitles);
    })
    return projectTitles;
}

export {addNewProject, getProjects};

