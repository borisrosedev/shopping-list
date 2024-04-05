import { ToDoService } from "../services/ToDoService.js";

import { createResetButton } from "./createResetButton.js";
import { createToDoListItemLi } from "./createToDoListItemLi.js";

async function createInitiUI() {
  const url = new URL(window.location.href);
  const searchParams = url.searchParams;
  const uid = searchParams.get("token");

  if (uid) {
    console.log("je suis ici");
    const toDos = await ToDoService.getUserToDosFromFirestore(uid);
    if(typeof toDos !== "string"){
      console.log(toDos);
      toDos.forEach((toDo) => {
        createToDoListItemLi(toDo, "firestore");
      });
      createResetButton();
    }
   
  }
}

export { createInitiUI };
