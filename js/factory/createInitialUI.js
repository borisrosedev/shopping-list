
import { getToDosFromFirestore } from "../services/productService.js";

import { createResetButton } from "./createResetButton.js";
import { createShoppingListItemLi } from "./createShoppingListItemLi.js";

async function createInitiUI(){
    const toDos = await getToDosFromFirestore()
    toDos.forEach((toDo) => {
        createShoppingListItemLi(toDo, "firestore");
    });
    createResetButton()
}

export {
    createInitiUI
} 