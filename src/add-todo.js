import displayTodos from "./display-todos.js";
import { getProjects, addNewTodo } from "./projectManager.js";

let todos = [];

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
    const projects = getProjects();
    console.log("adding todo");
    const index = projects.findIndex((project)=>{
        return project.title == todoDetails.project
    });
        const todo = new Todo(todoDetails);
        todos.push(todo);
        uploadTodos();
        addNewTodo(projects[index].key, todo.id);
        displayTodos(projects[index].key); 
}

function removeTodo(id){
    const index = todos.findIndex((todo)=>todo.id == id);
    todos.splice(index, 1);
    uploadTodos();
    console.log(todos);
}

function getTodo(id){
    console.log(id);
    return todos.find((todo)=>todo.id === id);
}

function uploadTodos(){
    localStorage.setItem("todos", JSON.stringify(todos));
}

function downloadTodos(){
    todos = JSON.parse(localStorage.getItem("todos"));
    console.log(todos);
}

function addMethodsToTodo(todo){
    Object.setPrototypeOf(Todo, TodoMethods);
}

export {addTodo, addMethodsToTodo, downloadTodos, getTodo, removeTodo};


