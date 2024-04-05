import { NEW_ITEM_INPUT_CONTAINER, TODOS_LIST } from "../constants/dom.js";
import { ToDoService } from "../services/ToDoService.js";
import { createNoItemMessage } from "./createNoItemMessage.js";
import { createResetButton } from "./createResetButton.js";

// el et from sont des paramètres
// ils font partie de la signature de la fonction
async function createToDoListItemLi(el, from) {

  // on crée un élément html de type li et on le stocke dans la variable locale à la fonction createShoppinbgListItemLi, li
  const li = document.createElement("li");
  const paragraph = document.createElement("p");

  // control flow 
  if (from !== "firestore") {
    const { id } = JSON.parse(localStorage.getItem("user"))
    const item = await ToDoService.createToDoInFirestore(el,id.toString());
    li.id = item.id;
    paragraph.innerText = item.name;
    NEW_ITEM_INPUT_CONTAINER.removeChild(NEW_ITEM_INPUT_CONTAINER.lastChild)
  } else {
    li.id = el.id;
    paragraph.innerText = el.name;
  }

  li.classList.add("li-item-container")
  li.appendChild(paragraph);
  TODOS_LIST.appendChild(li);


  createNoItemMessage();
  createResetButton()
  


}

export { createToDoListItemLi };
