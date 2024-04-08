import { MyFireStoreDataSource } from "../data/api_data_source/firestore_data_source.js";

export class ToDoService {


  static deleteToDoFromFirestore(id, data){
    return MyFireStoreDataSource.sendData("todos/user/"+id, data,"DELETE")
  }

  static getUserToDosFromFirestore(userUid){
    return MyFireStoreDataSource.getData("todos/user", userUid)
  }

  static getToDosFromFirestore() {
    return MyFireStoreDataSource.getData("todos");
  }

  static async getOneToDoById(id) {
    return MyFireStoreDataSource.getData("todos", id).then((res) => {
      return res;
    });
  }

  static async createToDoInFirestore(val, userUid) {
    const req = {
      name: val,
      userUid:userUid
    };
    return MyFireStoreDataSource.sendData("todos/add", req).then((res) => {
      let data = {
        message: "Ajoute d'une tâche : " + req.name,
        channel: "todos",
      };
      console.log("data", data)
      //const pubsubInstance = new PubSubService()
     // pubsubInstance.publish(data);
     
      return res;
    });
  }
}
