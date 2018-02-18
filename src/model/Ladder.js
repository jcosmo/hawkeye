import {observable} from "mobx";

class Ladder {
  gradeStore;
  teamStore;
  id;
  @observable grade;
  @observable teams = [];

  constructor(ladderStore, id) {
    this.gradeStore = ladderStore.rootStore.gradeStore;
    this.teamStore = ladderStore.rootStore.teamStore;
    this.id = id;
  }

  updateFromJson(json) {
    this.grade = this.gradeStore.resolve(json.gradeId);
    if (this.grade) {
      this.grade.setLadder(this);
    }
    json.teams.forEach( teamDetail => {
      const score ={team: undefined, points: 0, percentage: 0};
      score.team = this.teamStore.resolve(teamDetail.teamId);
      score.points = teamDetail.points;
      score.percentage = teamDetail.percentage;
      this.teams.push( score );
    })
  }
}

export default Ladder;