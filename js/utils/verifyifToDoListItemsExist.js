import { TODOS_LIST } from "../constants/dom.js"

export function verifyIfToDoListItems(){
    if((Array.from(TODOS_LIST.children).length == 0) == true) {
        return false
    } else {
        return true
    }
}