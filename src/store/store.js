import { makeAutoObservable } from "mobx";
import MessageService from "../services/messagesService";

export default class Store {
  data = this.setDataToStorage();
  selectedChat = 0;
  chatForResponse = [];
  selectedChatData;
  preSearchingData = this.data;

  constructor() {
    makeAutoObservable(this);
  }

  setDataToStorage() {
    this.data = JSON.parse(localStorage.getItem("chatsData"));
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
    if (this.data) {
      this.data.sort(
        (a, b) => new Date(b.messagesHistory.at(-1).time).getTime() - new Date(a.messagesHistory.at(-1).time).getTime()
      );
    }
  }

  filterChats(value) {
    this.data = JSON.parse(localStorage.getItem("chatsData"));
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
    localStorage.setItem("chatsData", JSON.stringify(this.data));
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
            localStorage.setItem("chatsData", JSON.stringify(this.data));
          }
        });
      }, num);
    } catch (error) {
      console.log(`Can not get message from API. Error: ${error}`);
    }
  }
}
