export class MyFireStoreDataSource {


  // méthode statique numéro 1 autrement méthode de classe n°1
  static async getData(endpoint, options) {
    const result = await fetch(
      `http://localhost:3000/${endpoint}/${options ? options : ""}`
    );
    return await result.json();
  }


  // méthiode statique numéro 2 autrement méthode de classe n°2
  static async sendData(endpoint, data) {
    const result = await fetch(
      `http://localhost:3000/${endpoint}`, {
        method:"POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
      }
    );
    return await result.json();
  }
}
