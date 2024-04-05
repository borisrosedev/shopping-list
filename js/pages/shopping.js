import {
  ADD_BUTTON,
} from "../constants/dom.js";
import { createInitiUI } from "../factory/createInitialUI.js";
import addHandler from "../handlers/addHandler.js";


//const pubsubInstance = new PubSubService()
//pubsubInstance.subscribe("todos")
//pubsubInstance.message(createNotificationDiv)
createInitiUI();

ADD_BUTTON.addEventListener("click", addHandler);
 
    

