import axios from "axios";

export const BASE_URL = "https://api.chucknorris.io/jokes/random";

const $api = axios.create({
  baseURL: BASE_URL,
});

export default class MessageService {
  static createNewMessage(messageText, isMyMessage) {
    return { id: Date.now(), isMyMessage: isMyMessage, text: messageText, time: new Date() };
  }

  static async getMessageFromAPI() {
    return $api.get();
  }

  static getRandomNumberForResponseDelay() {
    return Math.floor(Math.random() * (6 - 2) + 2) * 1000;
  }
}
