import { TODOS_MAIN } from "../constants/dom.js";
import createBudgetAmountSection from "../factory/createBudgetAmountSection.js";
import { AmountService } from "../services/AmountService.js";
import { NotificationService } from "../services/NotificationService.js";


export async function amountSaveHandler(el) {
  /* j'instancie la classe NotificationService donc notificationService avec 
    une minuscule est une instance de la classe NotificationService
  */

  const notificationService = new NotificationService()


  const val = el.value;
  if(!val){
    notificationService.setContent("Vous devez mettre un budget");
    // sort de l'exécution du code
    return
  }

  // cas où une valeur a été mise pour le budget
  const uid = await JSON.parse(window.localStorage.getItem("user")).id
  console.log("valeur du montant", val);

  const BUGDET_INPUT_SECTION = document.getElementById("budget-section")
  TODOS_MAIN.removeChild(BUGDET_INPUT_SECTION)
  
  const firestoreAmount = await AmountService.createAmountFromFirestore(val, uid)
  window.localStorage.setItem("amount", JSON.stringify(firestoreAmount))
  createBudgetAmountSection(firestoreAmount)

}
