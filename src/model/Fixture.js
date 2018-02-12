import {computed, observable} from "mobx";
import Round from './Round';

class Fixture {
  fixtureStore;
  @observable schedule;

  constructor(fixtureStore) {
    this.fixtureStore = fixtureStore;
    this.schedule = [];
  }

  updateFromJson(json) {
    this.schedule = [];
    let rounds = json.rounds;
    if (!rounds) {
      return;
    }
    rounds.forEach(roundJson => {
      let round = new Round();
      round.updateFromJson(roundJson);
      this.schedule.push(round);
    });
  }

  @computed
  get orderedSchedule() {
    return this.schedule.sort((a, b) => a.number - b.number);
  }

  round(roundNumber) {
    roundNumber = parseInt(roundNumber, 10);
    return this.schedule.find(r => r.number === roundNumber);
  }
}

export default Fixture;