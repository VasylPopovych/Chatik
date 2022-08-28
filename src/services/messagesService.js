import axios from "axios";

export const BASE_URL = "https://api.chucknorris.io/jokes/random";

const $api = axios.create({
  baseURL: BASE_URL,
});

export default class MessageService {
  static async getMessageFromAPI() {
    return $api.get();
  }
}
