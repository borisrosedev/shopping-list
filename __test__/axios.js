import axios from "axios";

export class UserService {
  constructor() {}
  async getAll() {
    const result = await axios.get("../js/data/local_data_source/users.json");

    const users = result.data;
    console.log("users", users);
    return users;
  }
}
