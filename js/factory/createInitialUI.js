import { ToDoService } from "../services/ToDoService.js";
import { createNoItemMessage } from "./createNoItemMessage.js";

import { createResetButton } from "./createResetButton.js";
import { createToDoListItemLi } from "./createToDoListItemLi.js";

async function createInitiUI() {
  const url = new URL(window.location.href);
  const searchParams = url.searchParams;
  const uid = searchParams.get("token");

  if (uid) {
    const toDos = await ToDoService.getUserToDosFromFirestore(uid);
    if(typeof toDos !== "string" && toDos.length !== 0){
      console.log(toDos);
      toDos.forEach((toDo) => {
        createToDoListItemLi(toDo, "firestore");
      });
      createResetButton();
    } else {
      createNoItemMessage()
    }
   
  }
}

export { createInitiUI };
