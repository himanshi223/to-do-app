const todos = [];

class todo{
    constructor(title, description, dueDate, priority, notes, project){
        this.completed = false;
        this.project = project;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }

    markDone(){
        this.completed = true;
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
            project, title, description, dueDate, priority, notes
        }
    }
}

export default function addTodo(todoDetails){
    const id = crypto.randomUUID();
    const todoItem = new todo(...todoDetails);
    todos.push({
        id,
        todoItem
    });

    console.log(todos);
    localStorage.setItem(id, todoItem);
}



