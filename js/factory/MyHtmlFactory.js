import { MyHtmlButton } from "../models/MyHtmlButton.js";
import { MyHtmlElement } from "../models/MyHtmlElement.js";
import { MyHtmlLi } from "../models/MyHtmlLi.js";
import { MyHtmlSpan } from "../models/MyHtmlSpan.js";
import { MyHtmlParagraph } from "../models/MyHtmlParagraph.js";

export class MyHtmlFactory {
  static createSection(data) {
    return new MyHtmlElement(
      "section",
      data.parentId,
      data.id,
      data.className,
      "",
      data.position
    );
  }

  static createParagraph(data) {
    return new MyHtmlParagraph(
      "p",
      data.parentId,
      data.id,
      data.className,
      "",
      data.specifics
    );
  }

  static createArticle(data) {
    return new MyHtmlElement(
      "article",
      data.parentId,
      data.id,
      data.className,
      "",
      data.position
    );
  }

  static createInput(data) {
    return new MyHtmlElement(
      "input",
      data.parentId,
      data.id,
      data.className,
      data.attributes,
      ""
    );
  }

  static createButton(data) {
    return new MyHtmlButton(
      "button",
      data.parentId,
      data.id,
      data.className,
      "",
      "",
      data.specifics
    );
  }

  static createSpan(data) {
    console.log("data", data);
    console.log(data.specifics)
    return new MyHtmlSpan(
      "span",
      data.parentId,
      data.id,
      data.className,
      "",
      "",
      data.specifics
    );
  }

  static createLi(data) {
    return new MyHtmlLi(
      "li",
      data.parentId,
      data.id,
      data.className,
      "",
      "",
      data.specifics
    );
  }
}
