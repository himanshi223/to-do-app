import addTodo from "./add-todo.js";

export default function createAddForm(){
    const dialog = document.querySelector("#add-task-dialog");
    const form = document.createElement("form");
    form.id = "add-task-form";
    let todo;

    const cancel = document.createElement("button");
    cancel.id = "cancel-add-form";
    cancel.textContent = "X";
    cancel.addEventListener("click", (e)=>{
        e.preventDefault();
        form.reset();
        dialog.close();
    })

    form.appendChild(cancel);


    const addField = (field, type)=>{
        const fieldContainer = document.createElement("div");
        const fieldInput = document.createElement("input");
        fieldInput.id=field;
        fieldInput.type=type;
        fieldInput.setAttribute("required",true);
        fieldContainer.appendChild(fieldInput);
        form.appendChild(fieldContainer);
        return fieldInput;
    }

    const addTextBox = (label)=>{
        const textBoxContainer = document.createElement("div");
        const textBox = document.createElement("textarea");
        textBox.id=label;
        textBox.resize = "none";
        textBoxContainer.appendChild(textBox);
        form.appendChild(textBoxContainer);
        return textBox;
    }

    const priorityContainer = document.createElement("div");
    priorityContainer.id = "priority-container";
    const priorityLabel = document.createElement("label");
    priorityLabel.for = "priority";
    priorityLabel.textContent = "Priority";
    const priorityInput = document.createElement("select");
    priorityInput.id = "priority";
    const options = ["low", "medium", "high"];
    options.forEach((element, key)=>{
        priorityInput[key] = new Option(element,key);
    })
    priorityContainer.appendChild(priorityLabel);
    priorityContainer.appendChild(priorityInput);
    form.appendChild(priorityContainer);

    const titleInput = addField("title", "text");
    titleInput.placeholder = "To do";

    const descriptionInput = addTextBox("description");
    descriptionInput.cols = 3;
    descriptionInput.placeholder = "Description";
    descriptionInput.maxLength = 100;

    const dueDateInput = addField("due-date", "date");
    const dateLabel = document.createElement("label");
    dateLabel.for = "due-date";
    dateLabel.textContent = "Due By:"

    const notesInput = addTextBox("notes");
    notesInput.placeholder = "Notes";

    
    const submitButton = document.createElement("button");
    submitButton.id = "submit-add-form";
    submitButton.classList.add("submit-button");
    submitButton.addEventListener("click",(e)=>{
        e.preventDefault();
        if(form.checkValidity()){
            todo = getDetails();
            addTodo(todo);
            form.reset();
            dialog.close();
        }
    });
    submitButton.textContent = "Done";

    form.appendChild(submitButton);
    dialog.appendChild(form);

    function getDetails(){
        const title = titleInput.value;
        const description = descriptionInput.value;
        const priority = priorityInput.value;
        const dueDate = dueDateInput.value;
        const notes = notesInput.value;
        dialog.close;
        return([title, description, priority, dueDate, notes]);
    }

}