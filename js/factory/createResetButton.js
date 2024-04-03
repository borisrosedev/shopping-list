import { RESET_BUTTON_CONTAINER } from "../constants/dom.js";
import resetHandler from "../handlers/resetHandler.js";
import { verifyIfShoppingListItems } from "../utils/verifyIfShoppingListItemsExist.js";

export function createResetButton() {
  if (verifyIfShoppingListItems() == true) {
    if (Array.from(RESET_BUTTON_CONTAINER.children).length == 0) {
      console.log("✅ CREATED");
      const resetButton = document.createElement("button");
      resetButton.textContent = "Réinitialiser";
      resetButton.id="reset-button"
      resetButton.addEventListener("click", resetHandler);
      RESET_BUTTON_CONTAINER.appendChild(resetButton);
    }
  } else {
    console.log("❌ REMOVED");
    RESET_BUTTON_CONTAINER.removeChild(RESET_BUTTON_CONTAINER.lastChild);
  }
}
