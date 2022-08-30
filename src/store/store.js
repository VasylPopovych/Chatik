import { makeAutoObservable } from "mobx";
import { chatsData } from "./chatsData";
import MessageService from "../services/messagesService";

export default class Store {
  data = chatsData;
  selectedChat = 0;
  chatForResponse = [];
  selectedChatData;
  preSearchingData = this.data;

  constructor() {
    makeAutoObservable(this);
  }

  setAuthUser(bool) {
    this.isLogged = bool;
  }

  setSelectedChat(id) {
    this.selectedChat = id;
  }

  selectChatMessages(selectedChatId) {
    this.selectedChatData = this.data.filter((chat) => chat.id === selectedChatId);
  }

  sortingChats() {
    this.data.sort((a, b) => b.messagesHistory.at(-1).time.getTime() - a.messagesHistory.at(-1).time.getTime());
  }

  filterChats(value) {
    this.data = this.preSearchingData;
    this.data = this.data.filter((chat) => chat.name.toLowerCase().includes(value.toLowerCase()));
    this.sortingChats();
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
      setTimeout(() => {
        const message = MessageService.createNewMessage(res.data.value, false);
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
