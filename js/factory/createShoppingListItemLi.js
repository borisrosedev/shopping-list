import { NEW_ITEM_INPUT_CONTAINER, SHOPPING_LIST } from "../constants/dom.js";
import { createToDoInFirestore } from "../services/productService.js";
import { createNoItemMessage } from "./createNoItemMessage.js";
import { createResetButton } from "./createResetButton.js";

// el et from sont des paramètres
// ils font partie de la signature de la fonction
async function createShoppingListItemLi(el, from) {

  // on crée un élément html de type li et on le stocke dans la variable locale à la fonction createShoppinbgListItemLi, li
  const li = document.createElement("li");
  const paragraph = document.createElement("p");

  // control flow 
  if (from !== "firestore") {
    const item = await createToDoInFirestore(el);
    li.id = item.id;
    paragraph.innerText = item.name;
    NEW_ITEM_INPUT_CONTAINER.removeChild(NEW_ITEM_INPUT_CONTAINER.lastChild)
  } else {
    li.id = el.id;
    paragraph.innerText = el.name;
  }

  li.classList.add("li-item-container")
  li.appendChild(paragraph);
  SHOPPING_LIST.appendChild(li);


  createNoItemMessage();
  createResetButton()
  


}

export { createShoppingListItemLi };
