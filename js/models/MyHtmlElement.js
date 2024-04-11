export class MyHtmlElement {
  constructor(tag, parentId, id, className, attributes, position) {
    this.element = document.createElement(tag);
    if (parentId) {
      this.parent = document.getElementById(parentId);
    }

    if (id) {
      this.element.id = id;
    }
    if (className) {
      this.element.classList.add(className);
    }

    if (attributes) {
      for (let kv of attributes) {
        let kvArray = kv.split(":");
        this.element.setAttribute(kvArray[0], kvArray[1]);
      }
    }

    if (position == "pre" && parentId) {
      this.parent.prepend(this.element);
    } else if (position !== "pre" && parentId) {
      this.parent.appendChild(this.element);
    } else {
      console.log("waiting for a parent");
    }
  }

  remove() {
    this.parent.removeChild(this.element);
  }

  addParent(parent) {
    this.parent = parent;
    this.parent.appendChild(this.element);
  }
}
