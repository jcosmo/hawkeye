import {observable} from "mobx";

class Club {
  clubStore;
  id;
  @observable name = "";

  constructor(store, id) {
    this.clubStore = store;
    this.id = id;
  }

  updateFromJson(json) {
    this.name = json.name;
  }
}

export default Club;