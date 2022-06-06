class ChatRoom {
    logMessage(user: Object, message: string) {
      const sender = user.getName();
      console.log(`${new Date().toLocaleString()} [${sender}]: ${message}`);
    }
  }

  class User {
      private name: string;
      private chatroom : Object;
    constructor(name: string, chatroom: Object) {
      this.name = name;
      this.chatroom = chatroom;
    }
  
    getName() {
      return this.name;
    }
  
    send(message: string) {
      this.chatroom.logMessage(this, message);
    }
  }
  
  const chatroom = new ChatRoom();
  
  const user1 = new User("John Doe", chatroom);
  const user2 = new User("Jane Doe", chatroom);
  
  user1.send("Hi there!");
  user2.send("Hey!");
  
//   Use a central mediator object to handle communication between components