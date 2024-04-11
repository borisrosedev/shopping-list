import { MyHtmlElement } from "./MyHtmlElement.js";

export class MyHtmlSpan extends MyHtmlElement {
  constructor(tag, parentId, id, className, attributes, position, specifics) {
    console.log("specifics in htmlSpan", specifics);
    super(tag, parentId, id, className, attributes, position);
    console.log("specific", specifics);
    for (const specific of specifics) {
      this.element[specific.name] = specific.value;
    }
  }
}
