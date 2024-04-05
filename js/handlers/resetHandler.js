import { TODOS_LIST } from "../constants/dom.js";
import { createResetButton } from "../factory/createResetButton.js";

export default function(){
    TODOS_LIST.innerHTML = ""
    createResetButton()
}