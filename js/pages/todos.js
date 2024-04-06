import {
  ADD_BUTTON,
  LOGOUT_BUTTON,
} from "../constants/dom.js";
import { createInitiUI } from "../factory/createInitialUI.js";
import addHandler from "../handlers/addHandler.js";
import { logoutHandler } from "../handlers/logoutHandler.js";


//const pubsubInstance = new PubSubService()
//pubsubInstance.subscribe("todos")
//pubsubInstance.message(createNotificationDiv)
createInitiUI();
LOGOUT_BUTTON.addEventListener("click", logoutHandler)
ADD_BUTTON.addEventListener("click", addHandler);
 


