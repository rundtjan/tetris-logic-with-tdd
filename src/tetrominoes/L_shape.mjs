export class L_shape {

  constructor(shape = 0) {
    this.shape = this.createShape(shape);
    this.direction = shape;
    this.rotates = this.rotatable();
  }

  rotatable() {
    return true;
  }

  getSize() {
    return 3;
  }

  getStartRow() {
    return 1;
  }

  getShape(){
    return this.shape;
  }

  createShape(shape) {
    let shapes = [
      [
        [".", ".", "."],
        ["L", "L", "L"],
        ["L", ".", "."],
      ],
      [
        ["L", "L", "."],
        [".", "L", "."],
        [".", "L", "."],
      ],
      [
        [".", ".", "."],
        [".", ".", "L"],
        ["L", "L", "L"],
      ],
      [
        [".", "L", "."],
        [".", "L", "."],
        [".", "L", "L"],
      ],
    ];
    return shapes[shape];
  }
  
  rotateRight() {
    this.direction++;
    if (this.direction > 3) this.direction = 0;
    return new T_shape(this.direction);
  }

  rotateLeft() {
    this.direction--;
    if (this.direction < 0) this.direction = 3;
    return new T_shape(this.direction);
  }

  toString() {
    var output = "";
    this.shape.forEach((elem) => {
      elem.forEach((elemint) => {
        output += elemint;
      });
      output += "\n";
    });
    return output;
  }
}