import { MyFireStoreDataSource } from "../data/api_data_source/firestore_data_source.js"

async function getToDosFromFirestore() {
  return MyFireStoreDataSource.getData("todos")

}

async function getOneToDoById(id) {
  return MyFireStoreDataSource.getData("todos", id)
}

async function createToDoInFirestore(val) {
  const req = {
    name: val,
  };
  //une api qui est en l'occurrence fetch
  return MyFireStoreDataSource.sendData("todos/add", req);
}

export { getToDosFromFirestore, createToDoInFirestore, getOneToDoById };
