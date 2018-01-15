import ClubStore from './ClubStore';
import GradeStore from './GradeStore';
import TeamStore from './TeamStore';
import FixtureStore from './FixtureStore';

class RootStore {
  clubStore;
  gradeStore;
  teamStore;
  fixtureStore;

  constructor() {
    this.clubStore = new ClubStore(this);
    this.gradeStore = new GradeStore(this);
    this.teamStore = new TeamStore(this);
    this.fixtureStore = new FixtureStore(this);
  }
}

export default RootStore;