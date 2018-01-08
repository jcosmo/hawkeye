import ClubStore from './ClubStore';
import GradeStore from './GradeStore';
import TeamStore from './TeamStore';

class RootStore {
  clubStore;
  gradeStore;
  teamStore;

  constructor() {
    this.clubStore = new ClubStore(this);
    this.gradeStore = new GradeStore(this);
    this.teamStore = new TeamStore(this);
  }
}

export default RootStore;