import { NEW_ITEM_INPUT_CONTAINER } from "../constants/dom.js";
import { takeTheInputValue } from "../utils/takeTheInputValue.js";

export default function(e) {
    e.preventDefault()
    takeTheInputValue();
    NEW_ITEM_INPUT_CONTAINER.innerHTML = ""
}
