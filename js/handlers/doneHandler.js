import {NotificationService} from "../services/NotificationService.js"
export function doneHandler(span,p){
    const notificationService = new NotificationService()
    if(span.dataset.isDone == "true"){
        span.innerText = "check_box_outline_blank"
        span.dataset.isDone= "false"
        p.style.textDecoration = "unset"
        notificationService.setContent("Un élément de la liste n'est pas terminé")
      
        
    } else {
        span.innerText = "select_check_box"
        span.dataset.isDone= "true"
        p.style.textDecoration = "line-through"
        notificationService.setContent("Un élément de la liste est fait")
    }
 
}