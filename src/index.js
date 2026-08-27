import "./styles.css";
import todo from "./add-todo.js";
import createAddForm from "./create-form.js";
import addForm from  "./add-form.js";


createAddForm();
const addTask = document.querySelector("#add-task-button");

addTask.addEventListener("click", ()=>{
    addForm();
});