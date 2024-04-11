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

  static async createToDoInFirestore(data) {
    return MyFireStoreDataSource.sendData("todos/add", data)
  }
}
