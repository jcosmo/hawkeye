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
      {id: 1, name: 'Tom Sawyer', teamId: 1},
      {id: 2, name: 'John Smith', teamId: 1},
      {id: 3, name: 'Some Dood', teamId: 1},
      {id: 4, name: 'Bob Brown', teamId: 2},
      {id: 5, name: 'Monkey Boy', teamId: 2},
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