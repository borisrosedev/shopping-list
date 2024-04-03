import { SHOPPING_LIST } from "../constants/dom.js";
import { createResetButton } from "../factory/createResetButton.js";

export default function(){
    SHOPPING_LIST.innerHTML = ""
    createResetButton()
}