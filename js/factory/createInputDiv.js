import { NEW_ITEM_INPUT_CONTAINER } from "../constants/dom.js";
import saveHandler from "../handlers/saveHandler.js";
import { verifyIfInputDivExists } from "../utils/verifiyIfInputDivExists.js";
import { MyHtmlFactory } from "./MyHtmlFactory.js";

function createInputDiv() {
  // on vérifie en premier lieu si le formulaire d'ajout d'un nouvel est déjà présent sur la page
  if (verifyIfInputDivExists()) {
    return;
  }

  const sectionInputs = document.createElement("section");
  sectionInputs.classList.add("inputs-container");
  const sectionButton = document.createElement("section");
  sectionButton.classList.add("button-container");
  // on crée un input
  // on créer un article qui va contenir l'input + le bouton sauvegarder
  const articleItemName = document.createElement("article");
  articleItemName.classList.add("todos-list-item-input-article");
  const articleItemQuantity = document.createElement("article");
  articleItemQuantity.classList.add("todos-list-item-input-article");
  const articleItemUnitPrice = document.createElement("article");
  articleItemUnitPrice.classList.add("todos-list-item-input-article");

  const todoNameItem = MyHtmlFactory.createInput({
    parentId: "",
    id: "new-todos-item-input",
    className: "item-input",
    attributes: ["type:text", "placeholder: Nouvel élément ..."],
  });

  const itemQuantity = MyHtmlFactory.createInput({
    parentId: "",
    id: "item-quantity",
    className: "item-input",
    attributes: ["type:number", "placeholder:Entrez la quantité"],
  });

  const itemUnitPrice = MyHtmlFactory.createInput({
    parentId: "",
    id: "item-unit-price",
    className: "item-input",
    attributes: ["type:number", "placeholder:Entrez le prix unitaire"],
  });

  const saveButton = MyHtmlFactory.createButton({
    id: "save-button",
    className: "button",
    parentId: "",
    specifics: [{
      name: "innerText",
      value: "Sauvegarder"
    }]
  });


  NEW_ITEM_INPUT_CONTAINER.addEventListener("submit", saveHandler);
  // on ajoute à l'article l'todoNameItem puis le bouton
  todoNameItem.addParent(articleItemName);
  itemQuantity.addParent(articleItemQuantity);
  itemUnitPrice.addParent(articleItemUnitPrice);

  // ajoute à la sectin existante l'article
  sectionInputs.appendChild(articleItemName);
  sectionInputs.appendChild(articleItemQuantity);
  sectionInputs.appendChild(articleItemUnitPrice);

  saveButton.addParent(sectionButton);

  NEW_ITEM_INPUT_CONTAINER.appendChild(sectionInputs);
  NEW_ITEM_INPUT_CONTAINER.appendChild(sectionButton);

  document.getElementById("new-todos-item-input").scrollIntoView({
    behavior: "smooth", // Pour une transition fluide, si vous le souhaitez
  });
}

export { createInputDiv };
