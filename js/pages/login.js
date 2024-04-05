import { FORM } from "../constants/dom.js";
import submitHandler from "../handlers/submitHandler.js";

console.log("intp login.js");
FORM.addEventListener("submit", submitHandler);
