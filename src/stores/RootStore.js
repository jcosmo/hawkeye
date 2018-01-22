import ClubStore from './ClubStore';
import GradeStore from './GradeStore';
import TeamStore from './TeamStore';
import FixtureStore from './FixtureStore';
import PlayerStore from './PlayerStore';

class RootStore {
  clubStore;
  gradeStore;
  teamStore;
  playerStore;
  fixtureStore;

  constructor() {
    this.clubStore = new ClubStore(this);
    this.gradeStore = new GradeStore(this);
    this.teamStore = new TeamStore(this);
    this.fixtureStore = new FixtureStore(this);
    this.playerStore = new PlayerStore(this);
  }
}

export default RootStore;