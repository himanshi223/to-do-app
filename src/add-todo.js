import displayTodos from "./display-todos.js";
import { getProjects, addNewTodo } from "./projectManager.js";

class Todo{
    constructor(details){
        this.id = crypto.randomUUID();
        this.completed = false;
        this.project = details.project;
        this.title = details.title;
        this.description = details.description;
        this.dueDate = details.dueDate;
        this.priority = details.priority;
        this.notes = details.notes;
    }

}

class TodoMethods {

    markDone(){
        this.completed  = ! this.completed;
    }

    updateTitle(title){
        this.title = title;
    }

    updateDescription(description){
        this.description = description;
    }

    updateDueDate(dueDate){
        this.dueDate = dueDate;
    }

    updatePriority(priority){
        this.priority = priority;
    }

    updateNotes(notes){
        this.notes = notes;
    }

    getDetails(){
        return {
            project, priority, title, description, dueDate, notes
        }
    }

}

function addTodo(todoDetails){
    const id = crypto.randomUUID();
    const projects = getProjects();
    console.log("adding todo");
    const index = projects.findIndex((project)=>{
        return project.title == todoDetails.project
    });
    if(index!=-1){
        addNewTodo(projects[index].key, new Todo(todoDetails));
        displayTodos(projects[index].key); 
    }
}

function addMethodsToTodo(todo){
    Object.setPrototypeOf(Todo, TodoMethods);
}

export {addTodo, addMethodsToTodo};


