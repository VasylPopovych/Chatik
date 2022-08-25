import { makeAutoObservable } from "mobx";
import { usersData } from "./usersData";

export default class Store {
  data = usersData;
  selectedUser = 2;

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedUser(id) {
    this.selectedUser = id;
  }
}
