import displayTodos from "./display-todos.js";
import { getProjects, addNewTodo } from "./projectManager.js";

class Todo{
    constructor(details){
        this.completed = false;
        this.project = details.project;
        this.title = details.title;
        this.description = details.description;
        this.dueDate = details.dueDate;
        this.priority = details.priority;
        this.notes = details.notes;
    }

    // markDone(){
    //     this.completed = true;
    // }

    // updateTitle(title){
    //     this.title = title;
    // }

    // updateDescription(description){
    //     this.description = description;
    // }

    // updateDueDate(dueDate){
    //     this.dueDate = dueDate;
    // }

    // updatePriority(priority){
    //     this.priority = priority;
    // }

    // updateNotes(notes){
    //     this.notes = notes;
    // }

    // getDetails(){
    //     return {
    //         project, priority, title, description, dueDate, notes
    //     }
    // }
}

export default function addTodo(todoDetails){
    const id = crypto.randomUUID();
    const projects = getProjects();
    console.log("adding todo");
    const index = projects.findIndex((project)=>{
        return project.title == todoDetails.project
    });
    if(index!=-1){
        addNewTodo(projects[index].key, new Todo(todoDetails));
    }
    displayTodos(project[index].key);
}



