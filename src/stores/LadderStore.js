import {observable} from "mobx";
import Ladder from '../model/Ladder';

class LadderStore {
  rootStore;
  @observable ladders = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  load(ladders) {
    ladders.forEach(json => this.updateLadderFromJson(json));
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