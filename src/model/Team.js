import {computed, observable} from "mobx";

class Team {
  teamStore;
  id;
  @observable club;
  @observable grade;
  @observable fixtureNumber;
  @observable members = [];
  @observable matches = [];
  @observable name;

  constructor(teamStore, id) {
    this.id = id;
    this.teamStore = teamStore;
  }

  updateFromJson(json) {
    this.club = this.teamStore.rootStore.clubStore.resolve(json.clubId);
    this.club.addTeam(this);
    this.name = json.name;
    this.grade = this.teamStore.rootStore.gradeStore.resolve(json.gradeId);
    this.fixtureNumber = parseInt(json.fixtureNumber, 10);
  }

  addMember(player) {
    this.members.push(player);
  }

  addMatch(match) {
    this.matches.push(match);
  }

  @computed
  get label() {
    if (this.name) {
      return `${this.club.name} (${this.name})`;
    }
    return this.club.name;
  }
}

export default Team;