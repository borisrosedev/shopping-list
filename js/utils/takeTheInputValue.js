import { NEW_ITEM_INPUT_CONTAINER } from "../constants/dom.js";
import { createShoppingListItemLi } from "../factory/createShoppingListItemLi.js";


function takeTheInputValue() {
    const inputValue = document.getElementById(
      "new-shopping-item-input"
    ).value;
    if (inputValue == "") {
      NEW_ITEM_INPUT_CONTAINER.removeChild(NEW_ITEM_INPUT_CONTAINER.lastChild)
      return;
    }
    createShoppingListItemLi(inputValue);
}

export {
    takeTheInputValue
}