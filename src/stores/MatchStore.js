import {observable} from "mobx";
import Match from '../model/Match';
import BaseStore from './BaseStore';

class MatchStore extends BaseStore{
  @observable matches = [];

  load(matches) {
    matches.forEach(json => this.updateMatchFromJson(json));
    this.loaded();
  }

  updateMatchFromJson(json) {
    let match = this.matches.find(match => match.id === json.id);
    if (!match) {
      this.matches.push(match = new Match(this, json.id));
    }
    match.updateFromJson(json);
  }

  findForGrade(grade) {
    return this.matches.filter(match => match.grade === grade);
  }

  resolve(id) {
    id = parseInt(id, 10);
    return this.matches.find(x => x.id === id);
  }
}

export default MatchStore;