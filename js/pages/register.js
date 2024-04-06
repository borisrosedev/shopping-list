import { LOGOUT_BUTTON, REGISTER_FORM } from "../constants/dom.js";
import { logoutHandler } from "../handlers/logoutHandler.js";
import registerSubmitHandler from "../handlers/registerSubmitHandler.js";


LOGOUT_BUTTON.addEventListener("click", logoutHandler)
REGISTER_FORM.addEventListener("submit", registerSubmitHandler);
