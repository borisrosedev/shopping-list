import { NEW_ITEM_INPUT_CONTAINER } from "../constants/dom.js";
import { createToDoListItemLi } from "../factory/createToDoListItemLi.js";
import { NotificationService } from "../services/NotificationService.js";


function takeTheInputValue() {

    //getting values
    const inputNameValue = document.getElementById(
      "new-todos-item-input"
    ).value;
    const quantityValue = document.getElementById("item-quantity").value
    const unitPriceValue = document.getElementById("item-unit-price").value
    //---------------------------


    //---------------------CHECKING VALUES
    if (!(inputNameValue && quantityValue && unitPriceValue)) {
      NEW_ITEM_INPUT_CONTAINER.innerHTML = ""
      const notificationService = new NotificationService()
      notificationService.setContent("Vous n'avez pas rempli le formulaire")
      return
    }
    //-----------------------------------------------------

    
    createToDoListItemLi({
      name:inputNameValue,
      quantity: quantityValue,
      unitPrice: unitPriceValue,
      price: quantityValue * unitPriceValue

    });
}

export {
    takeTheInputValue
}