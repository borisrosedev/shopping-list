import { NEW_ITEM_INPUT_CONTAINER } from "../constants/dom.js";
import saveHandler from "../handlers/saveHandler.js";
import { verifyIfInputDivExists } from "../utils/verifiyIfInputDivExists.js";

function createInputDiv() {
  // on vérifie en premier lieu si le formulaire d'ajout d'un nouvel est déjà présent sur la page
  if (verifyIfInputDivExists()) {
    return;
  }

  // on crée un input
  // on créer un article qui va contenir l'input + le bouton sauvegarder
  const article = document.createElement("article");
  article.classList.add("shopping-list-item-input-article");
  // on crée un input et un bouton
  const input = document.createElement("input");
  const button = document.createElement("button");
  button.textContent = "Sauvegarder";
  button.id = "save-button";

  button.addEventListener("click", saveHandler);
  // on ajoute à l'article l'input puis le bouton
  article.appendChild(input);
  article.appendChild(button);
  // on définit les attributs et leurs valeurs pour l'input
  input.setAttribute("placeholder", "Nouvelle élément ...");
  //input.placeholder = 'Nouvelle élément'
  input.setAttribute("type", "text");
  //input.type = "text"
  input.id = "new-shopping-item-input";
  //ajoute élément dans l'arbre html existant

  // ajoute à la sectin existante l'article
  NEW_ITEM_INPUT_CONTAINER.appendChild(article);
}

export { createInputDiv };
