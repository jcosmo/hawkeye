import {observable} from "mobx";

class Player {
  playerStore;
  id;
  @observable name;
  @observable team;

  constructor(playerStore, id) {
    this.id = id;
    this.playerStore = playerStore;
  }

  updateFromJson(json) {
    this.name = json.name;
    this.team = this.playerStore.rootStore.teamStore.resolve(json.teamId);
    this.team.addMember(this);
  }
}

export default Player;