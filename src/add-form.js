import createAddForm from "./create-form.js";


export default function displayForm(){
    const dialog = document.querySelector("#add-task-dialog");
    createAddForm();
    dialog.showModal();
}


