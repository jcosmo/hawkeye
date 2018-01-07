import {observable, action, computed} from "mobx";
import Club from '../model/Club';

class ClubStore {
  rootStore;
  @observable clubs = [];

  constructor(rootStore ) {
    this.rootStore = rootStore;
    this.clubs.push(new Club(this, 'aaa'));
    this.clubs.push(new Club(this, 'bbb'));
    this.clubs.push(new Club(this, 'test'));
  }
}

export default ClubStore;