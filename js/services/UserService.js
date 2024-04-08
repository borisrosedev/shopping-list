import { MyFireStoreDataSource } from "../data/api_data_source/firestore_data_source.js";

export class UserService {

  static async resetPassword(email){
    await MyFireStoreDataSource.sendData("user/reset-password",{ email })
  }
  static async login(data) {
    return await MyFireStoreDataSource.sendData("user/login", data);
  }

  static async register(data) {
    return await MyFireStoreDataSource.sendData("user/register", data);
  }

  static async logout() {
    return await MyFireStoreDataSource.getData("user/logout");
  }
}
