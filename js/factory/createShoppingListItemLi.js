import { SHOPPING_LIST } from "../constants/dom.js";
import { createToDoInFirestore } from "../services/productService.js";
import { createNoItemMessage } from "./createNoItemMessage.js";

async function createShoppingListItemLi(el, from) {
  const li = document.createElement("li");
  const paragraph = document.createElement("p");
  if (from !== "firestore") {
    const item = await createToDoInFirestore(el);
    li.id = item.id;
    paragraph.innerText = item.name;
  } else {
    li.id = el.id;
    paragraph.innerText = el.name;
  }
  li.classList.add("li-item-container")
  li.appendChild(paragraph);
  SHOPPING_LIST.appendChild(li);
  createNoItemMessage();
}

export { createShoppingListItemLi };
