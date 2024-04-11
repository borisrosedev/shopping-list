import { MyHtmlElement } from "./MyHtmlElement.js";

export class MyHtmlButton extends MyHtmlElement {
    constructor(tag, id, className, attributes, position, specifics){
        super(tag, id, className,attributes, position)
        for(const specific of specifics){
            this.element[specific.name] = specific.value
        }
    }
}