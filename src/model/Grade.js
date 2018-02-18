import {computed, observable, action} from "mobx";

class Grade {
  gradeStore;
  id;
  @observable letter = "D";
  @observable category = 'Special';
  @observable level = 0;
  @observable ladder;

  constructor(gradeStore, id) {
    this.gradeStore = gradeStore;
    this.id = id;
  }

  updateFromJson(json) {
    this.letter = json.letter;
    this.category = json.category;
    this.level = json.level;
  }

  @computed
  get teams() {
    return this.gradeStore.rootStore.teamStore.findForGrade(this);
  }

  team(fixtureNumber) {
    const match = parseInt(fixtureNumber, 10);
    return this.teams.find(t => t.fixtureNumber === match)
  }

  @computed
  get name() {
    return `${this.letter} ${this.category}${this.level !== 0 ? ' ' + this.level : ''}`;
  }

  @computed
  get rank() {
    let base = ('D'.charCodeAt(0) - this.letter.charCodeAt(0)) * 30;
    if (this.category === 'Special') {
      base = base + 20;
    }
    if (this.category === 'Grade') {
      base = base + 10;
    }
    return base + (6 - this.level);
  }

  @action
  setLadder(ladder) {
    this.ladder = ladder;
  }
}

export default Grade;