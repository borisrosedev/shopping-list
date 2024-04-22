import { MyHtmlFactory } from "../factory/MyHtmlFactory.js";
import { MyUiService } from "../services/MyUiService.js";
import { NotificationService } from "../services/NotificationService.js";
import { ToDoService } from "../services/ToDoService.js";

export async function editHandler(data){

    const notificationService = new NotificationService()
    notificationService.setContent("Vous venez de cliquer sur le stylo :" + data.id);
    console.clear()
    console.log("data", data.data);
    let unitPrice, quantity;

    data.instance.element.innerHTML = "";

    const taskName = MyHtmlFactory.createSpan({
        parentId: data.id,
        id: "task-name",
        className:"task-name",
        specifics: [
            {
                name: "innerText",
                value: data.data.name
            }
        ]
    })

    const taskQuantity = MyHtmlFactory.createInput({
        parentId: data.id,
        id: "edit-task-quantity",
        className:"edit-input",
        attributes:["type:number", `placeholder:${data.data.quantity}`]
    })


    taskQuantity.element.addEventListener("input", (e) => {
        quantity = e.target.value
   
    })

    const taskUnitPrice = MyHtmlFactory.createInput({
        parentId: data.id,
        id: "edit-task-unit-price",
        className:"edit-input",
        attributes:["type:number", `placeholder:${data.data.unitPrice}`]
    })

    taskUnitPrice.element.addEventListener("input", (e) => {
        unitPrice = e.target.value
   
    })

    

    const saveEditButton = MyHtmlFactory.createButton({
        parentId: data.id,
        id: "edit-save-button",
        className: "edit-save-button",
        specifics: [{
            name: "innerText",
            value: "Sauvegarder"
        }]
    })

    saveEditButton.element.addEventListener("click", async() => {

        if(!quantity && unitPrice){
            notificationService.setContent("Mettez une quantité")
            return
        } 
        if(!unitPrice && quantity){
            notificationService.setContent("Mettez un prix unitaire")
            return 
        }

        if(!unitPrice && !quantity){
            notificationService.setContent("Mettez un prix unitaire et une quantité")
            return
        }

        // si tout se passe bien 
        const itemId = data.id
        
        const res = await ToDoService.updateOneToDoById(itemId, {
            quantity: quantity,
            unitPrice: unitPrice,
            price: quantity * unitPrice
        })

        console.log("🟠 =========================>", res)
        await MyUiService.loadToDos()

    })









    




}

