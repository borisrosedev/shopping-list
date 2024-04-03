import { NO_ITEM, SHOPPING_LIST } from "../constants/dom.js";

function createNoItemMessage() {

  // Explications 
  // Nous allons stocker dans la variable children, locale à la fonction createNoItemMessage,
  // le résult de la structure ternaire suivante 
  /*
    Ceci est une structure terniare:

    Si  Array.from(SHOPPING_LIST.children).length == 0  EST VRAI alors on stocke dans 
    children ceci : (NO_ITEM.innerText = "Aucun élément pour le moment")
    Si Array.from(SHOPPING_LIST.children).length == 0 EST FAUX alors on stocken dasn children ce
    qui est derrière les : à savoir (NO_ITEM.innerText = "")
    Array.from(SHOPPING_LIST.children).length == 0
      ? (NO_ITEM.innerText = "Aucun élément pour le moment")
      : (NO_ITEM.innerText = "");
  */

  let children; 
  if((Array.from(SHOPPING_LIST.children).length == 0) == true) {
    children = (NO_ITEM.innerText = "Aucun élément pour le moment")
  } else {
    children = (NO_ITEM.innerText = "")
  }

  console.log(children);
}


export {
  createNoItemMessage
}