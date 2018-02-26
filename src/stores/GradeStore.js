import {observable} from "mobx";
import Grade from '../model/Grade';
import BaseStore from './BaseStore';

class GradeStore extends BaseStore {
  @observable grades = [];

  load(grades) {
    grades.forEach(json => this.updateGradeFromJson(json));
    this.loaded();
  }

  updateGradeFromJson(json) {
    let grade = this.grades.find(x => x.id === json.id);
    if (!grade) {
      this.grades.push(grade = new Grade(this, json.id))
    }
    grade.updateFromJson(json);
  }

  resolve(id) {
    id = parseInt(id, 10);
    return this.grades.find(x => x.id === id);
  }
}

export default GradeStore;