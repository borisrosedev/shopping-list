import { FORM } from "../constants/dom.js";
import loginSubmitHandler from "../handlers/loginSubmitHandler.js";
import { resetPasswordHandler } from "../handlers/resetPasswordHandler.js";


const resetPasswordButton = document.getElementById("reset-password-button");
resetPasswordButton.onclick = () => resetPasswordHandler()
FORM.addEventListener("submit", loginSubmitHandler);
