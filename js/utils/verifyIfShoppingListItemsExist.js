import { SHOPPING_LIST } from "../constants/dom.js"

export function verifyIfShoppingListItems(){
    if((Array.from(SHOPPING_LIST.children).length == 0) == true) {
        return false
    } else {
        return true
    }
}