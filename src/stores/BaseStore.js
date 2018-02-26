import {observable, action} from "mobx";

class BaseStore {
  rootStore;
  @observable
  loading;

  constructor(rootStore ) {
    this.loading = true;
    this.rootStore = rootStore;
  }

  @action
  loaded()
  {
    this.loading = false;
  }
}

export default BaseStore;