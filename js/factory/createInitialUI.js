import { AmountService } from "../services/AmountService.js";
import { NotificationService } from "../services/NotificationService.js";
import { ToDoService } from "../services/ToDoService.js";
import createBudgetAmountInputSection from "./createBudgetAmountInputSection.js";
import createBudgetAmountSection from "./createBudgetAmountSection.js";
import { createNoItemMessage } from "./createNoItemMessage.js";

import { createResetButton } from "./createResetButton.js";
import { createToDoListItemLi } from "./createToDoListItemLi.js";

async function createInitiUI() {
  const notificationService = new NotificationService();
  // notification service instance

  //getting the uid of the use from the URL

  const url = new URL(window.location.href);
  const searchParams = url.searchParams;
  const uid = searchParams.get("token");
  notificationService.setContent("Building the UI");

  //IF UID
  if (uid) {
    setTimeout(() => {
      notificationService.setContent("User connected " + uid);
    }, 3000)

    const result = await AmountService.readSpecificAmountFromFirestore(uid);
    setTimeout(() => {
      notificationService.setContent("Budget Amount retrieved " + result[0].value)
    }, 6000)

    if (result.length && result[0].id) {
      const amount = result[0];
      window.localStorage.setItem("amount", JSON.stringify(amount));
      if (amount.value) {
        createBudgetAmountSection(amount);
      }
    } else {
      console.log("aucun montant en bdd");
      createBudgetAmountInputSection();
    }

    const toDos = await ToDoService.getUserToDosFromFirestore(uid);
    if (typeof toDos !== "string" && toDos.length !== 0) {
      console.log(toDos);
      setTimeout(() => {
        notificationService.setContent(toDos.length + " ToDos retrieved")
      }, 9000)

      toDos.forEach((toDo) => {
        createToDoListItemLi(toDo, "firestore");
      });
      createResetButton();
    } else {
      createNoItemMessage();
      setTimeout(() => {
        notificationService.setContent("No item in the list retrieved")
      }, 9000)
    }
  }
}

export { createInitiUI };
