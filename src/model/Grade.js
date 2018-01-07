import {observable, action, computed} from "mobx";

class Grade {
  @observable grade = 'D';
  @observable level = "1";

  constructor(grade, level){
    this.grade = grade;
    this.level = level;
  }

  @computed
  name() {
    `${grade} ${levelAsString}`
  }

  @computed
  levelAsString()
  {
    if (level < 0){
      return `reserve ${-level}`
    }
    if ( level > 0 ){
      return `special ${level}`
    }
    return `${level}`
  }

  @computed
  rank() {
    return (4 - ('D' - grade)) * 12 + level;
  }
}

export default Team;