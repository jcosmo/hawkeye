import {observable} from "mobx";
import Player from '../model/Player';

class PlayerStore {
  rootStore;
  @observable players = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.load();
  }

  load() {
    [

    ].forEach(json => this.updatePlayerFromJson(json))
  }

  updatePlayerFromJson(json) {
    let player = this.players.find(player => player.id === json.id);
    if (!player) {
      this.players.push(player = new Player(this, json.id));
    }
    player.updateFromJson(json);
  }

  resolve(id) {
    id = parseInt(id, 10);
    return this.players.find(x => x.id === id);
  }
}

export default PlayerStore;