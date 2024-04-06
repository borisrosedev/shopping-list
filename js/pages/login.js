import { FORM } from "../constants/dom.js";
import loginSubmitHandler from "../handlers/loginSubmitHandler.js";



FORM.addEventListener("submit", loginSubmitHandler);
