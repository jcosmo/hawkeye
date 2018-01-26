import ClubStore from './ClubStore';
import GradeStore from './GradeStore';
import TeamStore from './TeamStore';
import FixtureStore from './FixtureStore';
import PlayerStore from './PlayerStore';
import MatchStore from './MatchStore';

class RootStore {
  clubStore;
  gradeStore;
  teamStore;
  playerStore;
  fixtureStore;
  matchStore;

  constructor() {
    this.clubStore = new ClubStore(this);
    this.gradeStore = new GradeStore(this);
    this.teamStore = new TeamStore(this);
    this.fixtureStore = new FixtureStore(this);
    this.playerStore = new PlayerStore(this);
    this.matchStore = new MatchStore(this);
  }
}

export default RootStore;