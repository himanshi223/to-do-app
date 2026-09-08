import { removeTodo } from "./add-todo.js";
import { removeTodoId } from "./projectManager.js";

export default function deleteTodo(projectId, todoId ){
    removeTodoId(projectId, todoId);
    removeTodo(todoId);
}