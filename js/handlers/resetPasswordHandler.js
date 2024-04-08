import { UserService } from "../services/UserService.js";

export async function resetPasswordHandler(){
    const inputEmailValue = document.getElementById("email").value;
    if(inputEmailValue != ""){
        await UserService.resetPassword(inputEmailValue)
    } 

}