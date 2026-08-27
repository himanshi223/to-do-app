import addTodo from "./add-todo.js";

export default function createAddForm(){
    const dialog = document.querySelector("#add-task-dialog");
    const form = document.createElement("form");
    form.id = "add-task-form";
    let todo;

    const addField = (field, type)=>{
        const fieldContainer = document.createElement("div");
        const fieldLabel = document.createElement("label");
        fieldLabel.textContent = field;
        const fieldInput = document.createElement("input");
        fieldInput.id=field;
        fieldInput.type=type;
        fieldInput.setAttribute("required",true);
        fieldContainer.appendChild(fieldLabel);
        fieldContainer.appendChild(fieldInput);
        form.appendChild(fieldContainer);
        return fieldInput;
    }

    const addTextBox = (label)=>{
        const textBoxContainer = document.createElement("div");
        const textBoxLabel = document.createElement("label");
        textBoxLabel.textContent = label;
        const textBox = document.createElement("textarea");
        textBox.id=textBox;
        textBoxContainer.appendChild(textBoxLabel);
        textBoxContainer.appendChild(textBox);
        form.appendChild(textBoxContainer);
        return textBox;
    }

    const titleInput = addField("title", "text");
    const descriptionInput = addField("description", "text");
    const priorityInput = addField("priority", "number");
    const dueDateInput = addField("due-date", "date");
    const notesInput = addTextBox("notes");
    const checklistInput = addField("checklist","text");
    
    const submitButton = document.createElement("button");
    submitButton.classList  = submitButton;
    submitButton.addEventListener("click",(e)=>{
        e.preventDefault();
        todo = getDetails();
        addTodo(todo);
        form.reset();
        dialog.close();
    });
    submitButton.textContent = "Submit";

    form.appendChild(submitButton);
    dialog.appendChild(form);

    function getDetails(){
        const title = titleInput.value;
        const description = descriptionInput.value;
        const priority = priorityInput.value;
        const dueDate = dueDateInput.value;
        const notes = notesInput.value;
        const checklist = checklistInput.value;
        dialog.close;
        return([title, description, priority, dueDate, notes, checklist]);
    }

}