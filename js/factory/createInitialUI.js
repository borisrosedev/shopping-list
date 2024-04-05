import { ToDoService } from "../services/ToDoService.js";

import { createResetButton } from "./createResetButton.js";
import { createShoppingListItemLi } from "./createShoppingListItemLi.js";

async function createInitiUI() {
  const url = new URL(window.location.href);
  const searchParams = url.searchParams;
  const uid = searchParams.get("token");

  if (uid) {
    console.log("je suis ici");
    const toDos = await ToDoService.getUserToDosFromFirestore(uid);
    console.log(toDos);
    toDos.forEach((toDo) => {
      createShoppingListItemLi(toDo, "firestore");
    });
    createResetButton();
  }
}

export { createInitiUI };
