export class MyLocalStorageService {
  static async getData(key) {
    const kv = await JSON.parse(localStorage.getItem(key));
    if (kv) {
      console.log("key gotten => ", kv);
      return kv
    }
  }

  static async setDate(key, data){
    localStorage.setItem(key, JSON.stringify(data))
    console.log(" key created => ", this.getData(key))
  }
}
