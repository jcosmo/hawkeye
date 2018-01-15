import {observable} from "mobx";

class Round {
  @observable number;
  @observable date;
  @observable schedule;

  /*
  schedule = {home => away]
   */
  updateFromJson(json) {
    this.number = json.number;
    this.date = json.date;
    this.schedule = json.schedule;
  }
}

export default Round;