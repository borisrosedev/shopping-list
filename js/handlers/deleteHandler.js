import { MyLocalStorageService } from "../services/MyLocalStorageService.js";
import { MyUiService } from "../services/MyUiService.js";
import { ToDoService } from "../services/ToDoService.js";

export async function deleteHandler(li) {
  const user = await MyLocalStorageService.getData("user");
  console.log("👩🏿‍🦰", user);
  ToDoService.deleteToDoFromFirestore(li.id, {
    userUid: user.id,
  }).then(async () => {
    await MyUiService.loadToDos();
  });
}
