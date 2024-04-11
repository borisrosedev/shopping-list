import {  TODOS_LIST } from "../constants/dom.js";
import { deleteHandler } from "../handlers/deleteHandler.js";
import { doneHandler } from "../handlers/doneHandler.js";
import { NotificationService } from "../services/NotificationService.js";
import { ToDoService } from "../services/ToDoService.js";
import { createNoItemMessage } from "./createNoItemMessage.js";
import { createResetButton } from "./createResetButton.js";
import { MyHtmlFactory } from "./MyHtmlFactory.js";
import { MyLocalStorageService } from "../services/MyLocalStorageService.js";
import { MyUiService } from "../services/MyUiService.js"

// el et from sont des paramètres
// ils font partie de la signature de la fonction
async function createToDoListItemLi(data, from) {
  const notificationService = new NotificationService()
  
  //-------CHECKING THE BUDGET
  const budget = await MyLocalStorageService.getData("amount");
  const budgetId = budget.id;

  if(from !== "firestore"){

    if (data.price > budget) {

      console.log("le prix dépasse le budget");
      const notificationService = new NotificationService();
      notificationService.setContent(
        `le prix : ${data.price} € dépasse le budget: ${budget} €`
      );
      return;
    }
    setTimeout(() => {
      notificationService.setContent("Prix de l'élément en adéquation avec votre contrainte budgétaire")
    })
  }


  // on crée un élément html de type li et on le stocke dans la variable locale à la fonction createShoppinbgListItemLi, li

  let brandNewListItem, paragraphInBrandNewListItem;

  const deleteSpanForListItem = MyHtmlFactory.createSpan({
    className: "material-symbols-outlined",
    specifics: [
      {
        name: "innerText",
        value: "delete",
      },
    ],
  });

  const emptyCheckboxSpanForListItem = MyHtmlFactory.createSpan({
    className: "material-symbols-outlined",
    specifics: [
      {
        name: "innerText",
        value: "check_box_outline_blank",
      },
    ],
  });

  // control flow
  if (from !== "firestore") {
  
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user.id) {
      return;
    }
    const formattedData = {
      name: data.name,
      quantity: data.quantity,
      unitPrice: data.unitPrice,
      price: data.price,
      userUid: user.id,
      previousBudget: budget.value,
      budgetId,
    };

    setTimeout(() => {
      notificationService.setContent("Envoie des informations vers la base de données")
    }, 3000)

    const item = await ToDoService.createToDoInFirestore(formattedData);

    if(item.id){
      setTimeout(() => {
        notificationService.setContent("Nouvel élément persistant")
      },6000)
    }

    setTimeout(() => {
      notificationService.setContent("Récupération des données actualisées")
    },9000)
    await MyUiService.loadBudget()  
  

    brandNewListItem = MyHtmlFactory.createLi({
      id: item.id,
      className: "list-item-container",
    });

    paragraphInBrandNewListItem = MyHtmlFactory.createParagraph({
      specifics: [
        {
          name: "innerHTML",
          value: `<span class"list-item-name" aria-label="nom de l'élément de la liste">${item.name}</span> <span class="list-item-quantity" aria-label="quantité prise de produit">${item.quantity}</span> <span class="list-item-unit-price" aria-label="prix unitaire du produit"> ${item.unitPrice} € </span>`
        },
      ],
    });

  } else {
    brandNewListItem = MyHtmlFactory.createLi({
      id: data.id,
      className: "list-item-container",
    });

    paragraphInBrandNewListItem = MyHtmlFactory.createParagraph({
      className: "list-item-paragraph",
      specifics: [
        {
          name: "innerHTML",
          value: `<span class"list-item-name" aria-label="nom de l'élément de la liste">${data.name}</span> <span class="list-item-quantity" aria-label="quantité prise de produit">${data.quantity}</span> <span class="list-item-unit-price" aria-label="prix unitaire du produit"> ${data.unitPrice} € </span>`,
        },
      ],
    });
  }

  deleteSpanForListItem.element.onclick = async () =>
    deleteHandler(brandNewListItem.element);
  emptyCheckboxSpanForListItem.element.onclick = () =>
    doneHandler(
      emptyCheckboxSpanForListItem.element,
      paragraphInBrandNewListItem.element
    );

  brandNewListItem.element.appendChild(paragraphInBrandNewListItem.element);
  brandNewListItem.element.appendChild(emptyCheckboxSpanForListItem.element);
  brandNewListItem.element.appendChild(deleteSpanForListItem.element);
  TODOS_LIST.appendChild(brandNewListItem.element);

  createNoItemMessage();
  createResetButton();
}

export { createToDoListItemLi };
