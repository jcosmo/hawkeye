import {observable, action} from "mobx";
import Club from '../model/Club';
import BaseStore from './BaseStore';

class ClubStore extends BaseStore {
  @observable clubs = [];

  load(clubs) {
    clubs.forEach(json => this.updateClubFromJson(json))
    this.loaded();
  }

  @action
  updateClubFromJson(json) {
    let club = this.clubs.find(x => x.id === json.id);
    if (!club) {
      this.clubs.push(club = new Club(this, json.id))
    }
    club.updateFromJson(json);
  }

  resolve(id) {
    id = parseInt(id, 10);
    return this.clubs.find(x => x.id === id);
  }
}

export default ClubStore;