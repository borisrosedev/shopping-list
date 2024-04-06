import { UserService } from "../services/UserService"

export async function logoutHandler(){
    if(localStorage.getItem("user")){
        localStorage.removeItem("user")
        const result = await UserService.logout()
        if(result.message){
            console.log("❌ Déconnexion!",result.message)
            window.location.href="login.html"
        }
    }

}



