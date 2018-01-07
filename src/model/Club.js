import {observable, action, computed} from "mobx";

class Club {
  clubStore;
  @observable name = "";

  constructor(store, name) {
    this.clubStore = store;
    this.name = name
  }
}

export default Club;