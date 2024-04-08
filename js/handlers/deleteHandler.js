import { ToDoService } from "../services/ToDoService.js";

export async function deleteHandler(li){
    await ToDoService.deleteToDoFromFirestore(li.id, {
        userUid: await JSON.parse(window.localStorage.getItem("user")).id
    })
}