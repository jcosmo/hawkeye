import {observable} from "mobx";
import Grade from '../model/Grade';

class GradeStore {
  rootStore;
  @observable grades = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.load();
  }

  load() {
    [
      {id: 1, letter: 'A', category: 'Grade', level: 0},
      {id: 2, letter: 'A', category: 'Reserve', level: 1},
      {id: 3, letter: 'A', category: 'Reserve', level: 2},
      {id: 4, letter: 'B', category: 'Special', level: 1},
      {id: 5, letter: 'B', category: 'Special', level: 2},
      {id: 6, letter: 'B', category: 'Special', level: 3},
      {id: 7, letter: 'B', category: 'Special', level: 4},
      {id: 8, letter: 'B', category: 'Special', level: 5},
      {id: 9, letter: 'B', category: 'Special', level: 6},
      {id: 10, letter: 'B', category: 'Grade', level: 1},
      {id: 11, letter: 'B', category: 'Grade', level: 2},
      {id: 12, letter: 'B', category: 'Grade', level: 3},
      {id: 13, letter: 'B', category: 'Grade', level: 4},
      {id: 14, letter: 'B', category: 'Grade', level: 5},
      {id: 15, letter: 'B', category: 'Reserve', level: 1},
      {id: 16, letter: 'B', category: 'Reserve', level: 2},
      {id: 17, letter: 'B', category: 'Reserve', level: 3},
      {id: 18, letter: 'B', category: 'Reserve', level: 4},
      {id: 19, letter: 'B', category: 'Reserve', level: 5},
      {id: 20, letter: 'C', category: 'Special', level: 1},
      {id: 21, letter: 'C', category: 'Special', level: 2},
      {id: 22, letter: 'C', category: 'Special', level: 3},
      {id: 23, letter: 'C', category: 'Special', level: 4},
      {id: 24, letter: 'C', category: 'Special', level: 5},
      {id: 25, letter: 'C', category: 'Special', level: 6},
      {id: 26, letter: 'C', category: 'Grade', level: 1},
      {id: 27, letter: 'C', category: 'Grade', level: 2},
      {id: 28, letter: 'C', category: 'Grade', level: 3},
      {id: 29, letter: 'C', category: 'Grade', level: 4},
      {id: 30, letter: 'C', category: 'Grade', level: 5},
      {id: 31, letter: 'C', category: 'Reserve', level: 1},
      {id: 32, letter: 'C', category: 'Reserve', level: 3},
      {id: 33, letter: 'C', category: 'Reserve', level: 3},
      {id: 34, letter: 'C', category: 'Reserve', level: 4},
      {id: 35, letter: 'C', category: 'Reserve', level: 5},
      {id: 36, letter: 'D', category: 'Special', level: 0},
    ].forEach(json => this.updateGradeFromJson(json));
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