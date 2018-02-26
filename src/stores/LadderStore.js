import {observable} from "mobx";
import Ladder from '../model/Ladder';
import BaseStore from './BaseStore';

class LadderStore extends BaseStore{
  @observable ladders = [];

  load(ladders) {
    ladders.forEach(json => this.updateLadderFromJson(json));
    this.loaded();
  }

  updateLadderFromJson(json) {
    let ladder = this.ladders.find(x => x.id === json.id);
    if (!ladder) {
      this.ladders.push(ladder = new Ladder(this, json.id))
    }
    ladder.updateFromJson(json);
  }

  resolve(id) {
    id = parseInt(id, 10);
    return this.ladders.find(x => x.id === id);
  }
}

export default LadderStore;