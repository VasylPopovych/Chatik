import { makeAutoObservable } from "mobx";
import { chatsData } from "./chatsData";
import MessageService from "../services/messagesService";

export default class Store {
  data = chatsData;
  selectedChat = 1;

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedChat(id) {
    this.selectedChat = id;
  }

  addNewMessage(textMessage) {
    const message = {
      id: Date.now(),
      isMyMessage: true,
      text: textMessage,
      time: new Date(),
    };
    this.data.map((chat) => {
      if (chat.id === this.selectedChat) chat.messagesHistory.push(message);
    });
  }

  async addNewMessageFromAPI() {
    const res = await MessageService.getMessageFromAPI();
    console.log(res.data.value);
    const message = {
      id: Date.now(),
      isMyMessage: false,
      text: res.data.value,
      time: new Date(),
    };
    setTimeout(() => {
      this.data.map((chat) => {
        if (chat.id === this.selectedChat) chat.messagesHistory.push(message);
      });
    }, 3000);
  }
}
