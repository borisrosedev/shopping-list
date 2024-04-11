import { TODOS_MAIN } from "../constants/dom.js";
import createBudgetAmountSection from "../factory/createBudgetAmountSection.js";
import { AmountService } from "../services/AmountService.js";
import { NotificationService } from "../services/NotificationService.js";


export async function amountSaveHandler(el) {
  const notificationService = new NotificationService()
  const val = el.value;
  if(!val){
    notificationService.setContent("Vous devez mettre un budget")
    return
  }
  const uid = await JSON.parse(window.localStorage.getItem("user")).id
  console.log("valeur du montant", val);

  const BUGDET_INPUT_SECTION = document.getElementById("budget-section")
  TODOS_MAIN.removeChild(BUGDET_INPUT_SECTION)
  
  const firestoreAmount = await AmountService.createAmountFromFirestore(val, uid)
  window.localStorage.setItem("amount", JSON.stringify(firestoreAmount))
  createBudgetAmountSection(firestoreAmount)

}
