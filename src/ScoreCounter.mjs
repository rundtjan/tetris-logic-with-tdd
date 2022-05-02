
export class ScoreCounter {

  constructor(){
    this.level = 0;
    this.score = 0;
  }

  update(lines){
    switch(lines){
      case 1:
        this.score += 40 * (this.level+1);
        break;
      case 2:
        this.score += 100 * (this.level+1);
    }
  }

  getScore(){
    return this.score;
  }

}