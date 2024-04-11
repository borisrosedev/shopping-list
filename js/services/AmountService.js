import { MyFireStoreDataSource } from "../data/api_data_source/firestore_data_source.js";

export class AmountService {

    //CRUD

        static readSpecificAmountFromFirestore(uid){
            return MyFireStoreDataSource.getData("amounts/user/"+uid)
        }
        static readAmountFromFirestore(){
            return MyFireStoreDataSource.getData("amounts")
        }

        static updateAmountFromFirestore(id, data){
            return MyFireStoreDataSource.sendData("amounts/"+id, data, "PUT")
        }

        static deleteAmountFromFirestore(id){
            return MyFireStoreDataSource.sendData("amounts/"+id,{},  "DELETE")
        }

        static createAmountFromFirestore(val, userUid){
            const req = {
                value: val,
                userUid:userUid
              };
            return MyFireStoreDataSource.sendData("amounts", req)
        }
    


}