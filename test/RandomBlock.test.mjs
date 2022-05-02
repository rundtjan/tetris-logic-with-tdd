import { expect } from "chai";
import sinon from "sinon";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";
import { ScoreCounter } from '../src/ScoreCounter.mjs';

function move(board, direction, times) {
  for (let i = 0; i < times; i++) {
    board.moveBlock(direction);
  }
}

describe("Picking random blocks", () => {
  let board;
  beforeEach(() => {
    board = new Board(10, 6);
  });

  it("The board has a method that picks a new block", () => {
    expect(board.getBlock()).to.be.an('object');
  });

});