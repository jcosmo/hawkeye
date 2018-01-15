import {observable} from "mobx";
import Club from '../model/Club';

class ClubStore {
  rootStore;
  @observable clubs = [];

  constructor(rootStore ) {
    this.rootStore = rootStore;
    this.load();
  }

  load() {
    [
      {id: 1, name: 'aaa'},
      {id: 2, name: 'bbb'},
      {id: 3, name: 'ccc'},
    ].forEach(json => this.updateClubFromJson(json))
  }

  updateClubFromJson(json) {
    let club = this.clubs.find(x => x.id === json.id);
    if (!club) {
      this.clubs.push(club = new Club(this, json.id))
    }
    club.updateFromJson(json);
  }

  resolve(id) {
    return this.clubs.find(x => x.id === id);
  }
}

export default ClubStore;