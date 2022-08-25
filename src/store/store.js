import { makeAutoObservable } from "mobx";
import { usersData } from "./usersData";

export default class Store {
  data = usersData;
  selectedUser = 1;

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedUser(id) {
    this.selectedUser = id;
  }
}
