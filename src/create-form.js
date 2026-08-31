import addTodo from "./add-todo.js";
import {getProjects} from "./projectManager.js";

export default function createAddForm(){
    const dialog = document.querySelector("#add-task-dialog");
    dialog.textContent = "";
    const form = document.createElement("form");
    form.id = "add-task-form";
    form.classList.add("add-task-form");
    let todo;

    const cancel = document.createElement("button");
    cancel.id = "cancel-add-form";
    cancel.classList.add("cancel");
    cancel.ariaLabel = "cancel";
    cancel.textContent = "X";
    cancel.addEventListener("click", (e)=>{
        e.preventDefault();
        form.reset();
        dialog.close();
    })

    form.appendChild(cancel);

    const addField = (field, type)=>{
        const fieldContainer = document.createElement("div");
        fieldContainer.classList.add("container");
        const fieldLabel = document.createElement("label");
        fieldLabel.textContent = field +"(required)";
        fieldLabel.for = field;
        const fieldInput = document.createElement("input");
        fieldInput.id=field;
        fieldInput.type=type;
        fieldContainer.appendChild(fieldLabel);
        fieldContainer.appendChild(fieldInput);
        form.appendChild(fieldContainer);
        return fieldInput;
    }

    const addTextBox = (label)=>{
        const textBoxContainer = document.createElement("div");
        textBoxContainer.classList.add("container");
        const textBoxLabel = document.createElement("label");
        textBoxLabel.textContent = label;
        textBoxLabel.for = label;
        const textBox = document.createElement("textarea");
        textBox.id=label;
        textBox.resize = "none";
        textBoxContainer.appendChild(textBoxLabel);
        textBoxContainer.appendChild(textBox);
        form.appendChild(textBoxContainer);
        return textBox;
    }
    
    const selectContainer = document.createElement("div");
    selectContainer.classList = "select-container";

    const projectContainer = document.createElement("div");
    projectContainer.classList.add("container");
    const projectLabel = document.createElement("label");
    projectLabel.for = "project";
    projectLabel.textContent = "Project";
    const projectInput = document.createElement("select");
    projectInput.id = "project";
    const projectOptions = getProjects();
    projectOptions.forEach((element,key)=>{
        projectInput[key] = new Option(element.title,element.id);
    })
    projectContainer.appendChild(projectLabel);
    projectContainer.appendChild(projectInput);
    selectContainer.appendChild(projectContainer);
    

    const priorityContainer = document.createElement("div");
    priorityContainer.classList.add("container");
    const priorityLabel = document.createElement("label");
    priorityLabel.for = "priority";
    priorityLabel.textContent = "Priority";
    const priorityInput = document.createElement("select");
    priorityInput.id = "priority";
    const priorityOptions = ["low", "medium", "high"];
    priorityOptions.forEach((element, key)=>{
        priorityInput[key] = new Option(element,element);
    })
    priorityContainer.appendChild(priorityLabel);
    priorityContainer.appendChild(priorityInput);
    selectContainer.appendChild(priorityContainer);

    form.appendChild(selectContainer);

    const titleInput = addField("title", "text");
    titleInput.placeholder = "To do";
    titleInput.setAttribute("required",true);


    const descriptionInput = addTextBox("description");
    descriptionInput.cols = 3;
    descriptionInput.placeholder = "Brief description...";
    descriptionInput.maxLength = 100;


    const dueDateInput = addField("due-date", "date");
    dueDateInput.setAttribute("required",true);
    const dateLabel = document.createElement("label");
    dateLabel.for = "due-date";
    dateLabel.textContent = "Due By:"

    const notesInput = addTextBox("notes");
    notesInput.placeholder = "Things to remember...";

    
    const submitButton = document.createElement("button");
    submitButton.id = "submit-add-form";
    submitButton.classList.add("submit");
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
        const project = projectInput.selectedOptions[0].value;
        const priority = priorityInput.selectedOptions[0].value;
        const title = titleInput.value;
        const description = descriptionInput.value;
        const dueDate = dueDateInput.value;
        const notes = notesInput.value;
        dialog.close;
        return({project, priority, title, description, dueDate, notes});
    }

}