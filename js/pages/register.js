import { REGISTER_FORM } from "../constants/dom.js";
import registerSubmitHandler from "../handlers/registerSubmitHandler.js";

REGISTER_FORM.addEventListener("submit", registerSubmitHandler);
