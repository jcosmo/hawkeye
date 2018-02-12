import {observable} from "mobx";
import Fixture from '../model/Fixture';

class FixtureStore {
  rootStore;
  @observable fixture;

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.fixture = new Fixture(this);
  }

  load(json) {
    this.updateFixtureFromJson(json);
  }

  updateFixtureFromJson(json) {
    if (!this.fixture) {
      this.fixture = new Fixture(this);
    }
    this.fixture.updateFromJson(json);
  }
}

export default FixtureStore;