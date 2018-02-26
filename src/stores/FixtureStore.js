import {observable} from "mobx";
import Fixture from '../model/Fixture';
import BaseStore from './BaseStore';

class FixtureStore extends BaseStore{
  @observable fixture;

  constructor(rootStore) {
    super(rootStore);
    this.fixture = new Fixture(this);
  }

  load(json) {
    this.updateFixtureFromJson(json);
    this.loaded();
  }

  updateFixtureFromJson(json) {
    if (!this.fixture) {
      this.fixture = new Fixture(this);
    }
    this.fixture.updateFromJson(json);
  }
}

export default FixtureStore;