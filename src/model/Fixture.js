import {observable, computed} from "mobx";
import Round from './Round';

class Fixture {
  fixtureStore;
  @observable schedule;

  constructor(fixtureStore) {
    this.fixtureStore = fixtureStore;
  }

  updateFromJson(json) {
    let rounds = json.rounds;
    this.schedule = [];
    rounds.forEach(roundJson => {
      let round = new Round();
      round.updateFromJson(roundJson);
      this.schedule.push(round);
    });
  }

  @computed
  get
  orderedSchedule(){
    return this.schedule.sort((a,b) => b.roundNumber - a.roundNumber);
  }
}

export default Fixture;