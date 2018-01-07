import {observable, action, computed} from "mobx";
import ClubStore from './ClubStore';

class RootStore {
  clubStore;

  constructor() {
    this.clubStore = new ClubStore(this);
  }
}

export default RootStore;