const projects = [];

class Project{
    constructor(title,color){
        this.title = title;
        this.color = color;
    }
}

function addNewProject(title, color){
    projects.push(new Project(title, color));
} 

addNewProject("inbox", "white");

export default function getProjects(){
    const projectTitles = [];
    projects.forEach(project => {
        projectTitles.push(project.title);
        console.log(projectTitles);
    })
    return projectTitles;
}

