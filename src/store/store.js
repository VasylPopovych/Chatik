import { makeAutoObservable } from "mobx";
import { usersData } from "./usersData";

export default class Store {
  data = usersData;

  constructor() {
    makeAutoObservable(this);
  }
}
