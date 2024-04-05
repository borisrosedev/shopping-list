import { MyFireStoreDataSource } from "../data/api_data_source/firestore_data_source.js";
import { PubSubService } from "./PubSubService.js";


export class ToDoService {

  static getToDosFromFirestore() {
    return MyFireStoreDataSource.getData("todos");
  }

  static async getOneToDoById(id) {
    return MyFireStoreDataSource.getData("todos", id).then((res) => {
      return res;
    });
  }

  static async createToDoInFirestore(val) {
    const req = {
      name: val,
    };
    return MyFireStoreDataSource.sendData("todos/add", req).then((res) => {
      let data = {
        message: "Ajoute d'une tâche : " + req.name,
        channel: "todos",
      };
      console.log("data", data)
      const pubsubInstance = new PubSubService()
      pubsubInstance.publish(data);
     
      return res;
    });
  }
}
