import { MyHtmlElement } from "./MyHtmlElement.js";

export class MyHtmlButton extends MyHtmlElement {
  constructor(tag, parentId, id, className, attributes, position, specifics) {
    super(tag, parentId, id, className, attributes, position);

    console.log("🛍️ constructeur du HTML Button", specifics);

    for (const specific of specifics) {
      this.element[specific.name] = specific.value;
    }
  }
}
