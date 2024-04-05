import {io} from "../../node_modules/socket.io-client/dist/socket.io.esm.min.js";

export class PubSubService {
  constructor() {
    this.socket = io("http://localhost:3000");
  }
  subscribe(channel) {
    this.socket.emit("subscribe", { channel: channel});
  }

  publish(data) {
    // Publish a message to a channel
    this.socket.emit("publish", {
      channel: data.channel,
      message: data.content,
    });
  }

  message(notifMaker) {

    this.socket.on("message", (data) => {
      console.log("Received message:", data);
      notifMaker(data)
     
    });


    
    
  }

  // Listen for messages from the server
}
