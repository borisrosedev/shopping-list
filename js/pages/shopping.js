import {
  ADD_BUTTON,
} from "../constants/dom.js";
import { createInitiUI } from "../factory/createInitialUI.js";
import { createNotificationDiv } from "../factory/createNoficationDiv.js";
import addHandler from "../handlers/addHandler.js";
import { PubSubService } from "../services/PubSubService.js";

const pubsubInstance = new PubSubService()
pubsubInstance.subscribe("todos")
pubsubInstance.message(createNotificationDiv)
createInitiUI();
ADD_BUTTON.addEventListener("click", addHandler);
 
    

