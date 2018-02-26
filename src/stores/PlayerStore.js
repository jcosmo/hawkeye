import {observable} from "mobx";
import Player from '../model/Player';
import BaseStore from './BaseStore';

class PlayerStore extends BaseStore{
  @observable players = [];

  load(players) {
    players.forEach(json => this.updatePlayerFromJson(json));
    this.loaded();
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