import { MyFireStoreDataSource } from "../data/api_data_source/firestore_data_source.js";

async function getToDosFromFirestore() {
  // logique métier "todos"
  return MyFireStoreDataSource.getData("todos");
}

async function getOneToDoById(id) {
  // logique métier todos + id

  return MyFireStoreDataSource.getData("todos", id);
}

async function createToDoInFirestore(val) {
  //formatage de l'information
  const req = {
    name: val,
  };

  return MyFireStoreDataSource.sendData("todos/add", req);
}

export { getToDosFromFirestore, createToDoInFirestore, getOneToDoById };
