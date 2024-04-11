import { BUGDET_SECTION } from "../constants/dom.js";

export default function(amount, reset = false){
    if(reset){
        BUGDET_SECTION.innerHTML= ""
    } else {
        BUGDET_SECTION.innerHTML= `<p id=${amount.id}> Budget : ${amount.value}</>`
    }

}