import {computed, observable} from "mobx";

class Match {
  matchStore;
  id;
  @observable round;
  @observable homeTeam;
  @observable awayTeam;
  @observable homePlayers = [];
  @observable awayPlayers = [];
  @observable homeScore;
  @observable awayScore;


  constructor(store, id) {
    this.matchStore = store;
    this.id = id;
  }

  updateFromJson(json) {
    this.round = this.matchStore.rootStore.fixtureStore.fixture.round(json.roundNumber);
    this.homeTeam = this.matchStore.rootStore.teamStore.resolve(json.homeTeamId);
    this.awayTeam = this.matchStore.rootStore.teamStore.resolve(json.awayTeamId);
    this.homeScore = json.homeScore;
    this.awayScore = json.awayScore;
    this.round.addMatch(this);
    this.homeTeam.addMatch(this);
    this.awayTeam.addMatch(this);
  }

  @computed
  get isDraw() {
    return this.homeScore === this.awayScore;
  }

  @computed
  get winningTeam() {
    if (this.homeScore >= this.awayScore) {
      return this.homeTeam;
    }
    return this.awayTeam;
  }

  isForTeam(team) {
    return this.awayTeam === team || this.homeTeam === team;
  }

  @computed
  get scoreDifference() {
    if (this.awayScore > this.homeScore)
      return this.awayScore - this.homeScore;
    return this.homeScore - this.awayScore;
  }

  @computed
  get isCompleted() {
    return this.homeScore >= 0 || this.awayScore >= 0;
  }
}

export default Match;