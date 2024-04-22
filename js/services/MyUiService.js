import { AmountService } from "./AmountService.js";
import { MyLocalStorageService } from "./MyLocalStorageService.js";
import { ToDoService } from "./ToDoService.js";
import { NotificationService } from "./NotificationService.js";
import createBudgetAmountSection from "../factory/createBudgetAmountSection.js";
import { TODOS_LIST } from "../constants/dom.js";
import { createToDoListItemLi } from "../factory/createToDoListItemLi.js";

export class MyUiService {
  static async loadBudget() {
    const notificationService = new NotificationService();
    const user = await MyLocalStorageService.getData("user");
    if (user.id) {
      const result = await AmountService.readSpecificAmountFromFirestore(
        user.id
      );
      const amount = result[0];
      if (amount.id) {
        setTimeout(() => {
          notificationService.setContent("Budget existant récupéré");
        });
        console.log("amout =====>🟢", amount);
        createBudgetAmountSection(amount);
      } else {
        setTimeout(() => {
          notificationService.setContent("Budget inexistant");
        });

        createBudgetAmountSection({}, true);
      }
    } else {
      setTimeout(() => {
        notificationService.setContent("Utilisateur déconnecté");
      });

      createBudgetAmountSection({}, true);
    }
  }

  static async loadToDos() {
    console.log("❎ ");
    const notificationService = new NotificationService();
    const user = await MyLocalStorageService.getData("user");
    //console.clear();
    console.log("user", user);
    if (user.id) {
      console.log("into it");
      const todos = await ToDoService.getUserToDosFromFirestore(user.id);
      if (todos.length) {
        setTimeout(() => {
          notificationService.setContent("Liste existante récupérée");
        });

        TODOS_LIST.innerHTML = "";
        for (const todo of todos) {
          createToDoListItemLi(todo, "firestore");
        }
      } else {
        setTimeout(() => {
          notificationService.setContent("Aucune liste existante");
        });

        TODOS_LIST.innerHTML = "";
      }
    } else {
      setTimeout(() => {
        notificationService.setContent("Utilisateur déconnecté");
      });

      TODOS_LIST.innerHTML = "";
    }
  }
}
