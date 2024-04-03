// Tout ce qui existe DEJA dans le fichier .html
const ADD_BUTTON = document.getElementById("add-button");

const SHOPPING_LIST = document.getElementById("shopping-list");

const NEW_ITEM_INPUT_CONTAINER = document.getElementById(
  "new-item-input-container"
);

const NO_ITEM = document.getElementById("no-item");


// je veux pouvoir utiliser ces variables ailleurs
export { 
  ADD_BUTTON, 
  SHOPPING_LIST, 
  NEW_ITEM_INPUT_CONTAINER, 
  NO_ITEM
}