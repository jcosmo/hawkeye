import {observable} from "mobx";
import Fixture from '../model/Fixture';

class FixtureStore {
  rootStore;
  @observable fixture;

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.load();
  }

  load() {
    let json = {
      rounds: [
        {number: 1, date: '08 Feb 2018', schedule:{1:8,3:6,5:4,7:2}},
        {number: 2, date: '15 Feb 2018', schedule:{2:5,4:3,6:1,8:7}},
        {number: 3, date: '22 Feb 2018', schedule:{1:4,3:2,5:7,8:6}},
        {number: 4, date: '01 Mar 2018', schedule:{1:4,3:2,5:7,8:6}},
      ]
    };
    this.updateFixtureFromJson(json);
  }

  updateFixtureFromJson(json) {
    if ( !this.fixture )
    {
      this.fixture = new Fixture(this);
    }
    this.fixture.updateFromJson(json);
  }
}

export default FixtureStore;