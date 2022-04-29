import { RotatingShape } from "../src/RotatingShape.mjs";
import { T_shape } from '../src/tetrominoes/T_shape.mjs';
import { Z_shape } from '../src/tetrominoes/Z_shape.mjs';
import { L_shape } from '../src/tetrominoes/L_shape.mjs';

export class Tetromino {

  static T_SHAPE = new RotatingShape('.T.TTT...');

  static T_SHAPE2 = new T_shape(0);

  static I_SHAPE = new RotatingShape('..........IIII...........')

  static O_SHAPE = new RotatingShape('.OO.OO...')

  static Z_SHAPE = new Z_shape(0);

  static L_SHAPE = new L_shape(0);

}