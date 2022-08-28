import { makeAutoObservable } from "mobx";
import { chatsData } from "./chatsData";
import MessageService from "../services/messagesService";

export default class Store {
  data = chatsData;
  selectedChat = 1;
  chatForResponse = [];

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedChat(id) {
    this.selectedChat = id;
  }

  sortingChats() {
    this.data.sort((a, b) => b.messagesHistory.at(-1).time.getTime() - a.messagesHistory.at(-1).time.getTime());
    console.log("list of chats sorted!");
  }

  addNewMessage(messageText) {
    const message = MessageService.createNewMessage(messageText, true);
    this.data.map((chat) => {
      if (chat.id === this.selectedChat) {
        chat.messagesHistory.push(message);
        this.chatForResponse.push(this.selectedChat);
      }
    });
    this.sortingChats();
  }

  async addNewMessageFromAPI() {
    const num = MessageService.getRandomNumberForResponseDelay();
    try {
      const res = await MessageService.getMessageFromAPI();
      const message = MessageService.createNewMessage(res.data.value, false);
      setTimeout(() => {
        this.data.map((chat) => {
          if (chat.id === this.chatForResponse[0]) {
            chat.messagesHistory.push(message);
            this.sortingChats();
            this.chatForResponse.shift();
          }
        });
      }, num);
    } catch (error) {
      console.log(`Can not get message from API. Error: ${error}`);
    }
  }
}
