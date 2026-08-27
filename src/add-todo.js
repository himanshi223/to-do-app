const todos = [];

class todo{
    constructor(project, title, description, dueDate, priority, notes, checklist){
        this.completed = false;
        this.project = project;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
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

    updateChecklist(checklist){
        this.checklist = checklist;
    }

    getDetails(){
        return {
            project, title, description, dueDate, priority, notes, checklist
        }
    }
}

export default function addTodo(todoDetails){
    todos.push({
        id: crypto.randomUUID(),
        todo : new todo([...todoDetails])
    });
}



