export function createNotificationDiv(message){

    const shoppingMain = document.getElementsByTagName("main")[0];
    const notificationDiv = document.createElement("div")
    notificationDiv.id = "notification"
    notificationDiv.classList.add("notification-component")
    notificationDiv.innerHTML = `<p>${message}<p>`
    shoppingMain.appendChild(notificationDiv)
    
}

