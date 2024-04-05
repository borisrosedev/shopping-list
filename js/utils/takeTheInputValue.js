import { NEW_ITEM_INPUT_CONTAINER } from "../constants/dom.js";
import { createToDoListItemLi } from "../factory/createToDoListItemLi.js";


function takeTheInputValue() {
    const inputValue = document.getElementById(
      "new-todos-item-input"
    ).value;
    if (inputValue == "") {
      NEW_ITEM_INPUT_CONTAINER.removeChild(NEW_ITEM_INPUT_CONTAINER.lastChild)
      return;
    }
    createToDoListItemLi(inputValue);
}

export {
    takeTheInputValue
}