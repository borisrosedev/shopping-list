
import { ToDoService } from "../services/ToDoService.js";

import { createResetButton } from "./createResetButton.js";
import { createShoppingListItemLi } from "./createShoppingListItemLi.js";

async function createInitiUI(){
    const toDos = await ToDoService.getToDosFromFirestore()
    console.log(toDos)
    toDos.forEach((toDo) => {
        createShoppingListItemLi(toDo, "firestore");
    });
    createResetButton()
}

export {
    createInitiUI
} 