import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

function move(board, direction, times) {
  for (let i = 0; i < times; i++) {
    board.moveBlock(direction);
  }
}

describe("Rotating falling tetrominoes", () => {
  let board;
  beforeEach(() => {
    board = new Board(10, 6);
  });

  it("a tetromino can be rotated left", () => {
    board.drop(Tetromino.T_SHAPE);
    board.rotateBlockLeft();
    expect(board.toString()).to.equalShape(
      `....T.....
       ...TT.....
       ....T.....
       ..........
       ..........
       ..........`
    );
  });

  it("a tetromino can be rotated right", () => {
    board.drop(Tetromino.T_SHAPE);
    board.rotateBlockRight();
    expect(board.toString()).to.equalShape(
      `....T.....
       ....TT....
       ....T.....
       ..........
       ..........
       ..........`
    );
  });

  xit("a falling tetromino can be moved right", () => {
    board.drop(Tetromino.T_SHAPE);
    board.moveBlock("right");
    expect(board.toString()).to.equalShape(
      `.....T....
       ....TTT...
       ..........
       ..........
       ..........
       ..........`
    );
  });

  xit("a falling tetromino can be moved down", () => {
    board.drop(Tetromino.T_SHAPE);
    board.moveBlock("down");
    expect(board.toString()).to.equalShape(
      `..........
       ....T.....
       ...TTT....
       ..........
       ..........
       ..........`
    );
  });
});
