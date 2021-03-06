import {observable} from "mobx";

class Ladder {
  gradeStore;
  teamStore;
  id;
  @observable grade;
  @observable round;
  @observable teams = [];

  constructor(ladderStore, id) {
    this.gradeStore = ladderStore.rootStore.gradeStore;
    this.teamStore = ladderStore.rootStore.teamStore;
    this.id = id;
  }

  updateFromJson(json) {
    this.round = json.round;
    this.grade = this.gradeStore.resolve(json.gradeId);
    if (this.grade) {
      this.grade.setLadder(this);
    }
    json.teams.forEach(teamDetail => {
      const score = {team: undefined, points: 0, percentage: 0, unmatched: undefined};
      score.unmatched = teamDetail.unmatched;
      score.team = this.teamStore.resolve(teamDetail.teamId);
      score.points = teamDetail.points;
      score.percentage = teamDetail.percentage;
      this.teams.push(score);
    })
  }
}

export default Ladder;