export class MyFireStoreDataSource {
  static async getData(endpoint, options) {
    const result = await fetch(
      `http://localhost:3000/${endpoint}/${options ? options : ""}`
    );
    return await result.json();
  }
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
