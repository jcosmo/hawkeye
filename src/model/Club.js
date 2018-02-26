import {observable, action} from "mobx";

class Club {
  clubStore;
  id;
  @observable name = "";
  @observable teams = [];

  constructor(store, id) {
    this.clubStore = store;
    this.id = id;
  }

  updateFromJson(json) {
    this.name = json.name;
  }

  @action
  addTeam( team ) {
    this.teams.push( team)
  }
}

export default Club;