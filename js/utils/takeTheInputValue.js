import { createShoppingListItemLi } from "../factory/createShoppingListItemLi.js";


function takeTheInputValue() {
    const inputValue = document.getElementById(
      "new-shopping-item-input"
    ).value;
    if (inputValue == "") {
      return;
    }
    createShoppingListItemLi(inputValue);
}

export {
    takeTheInputValue
}