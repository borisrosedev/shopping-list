import { NO_ITEM, SHOPPING_LIST } from "../constants/dom.js";

function createNoItemMessage() {
  const children =
    Array.from(SHOPPING_LIST.children).length == 0
      ? (NO_ITEM.innerText = "Aucun élément pour le moment")
      : (NO_ITEM.innerText = "");
  console.log(children);
}


export {
  createNoItemMessage
}