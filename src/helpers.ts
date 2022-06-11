import { Position } from "./types";

const adjacent = (pos1: Position, pos2: Position) =>
  (pos1.x === pos2.x && pos1.y === pos2.y - 1) ||
  (pos1.x === pos2.x && pos1.y === pos2.y + 1) ||
  (pos1.x === pos2.x - 1 && pos1.y === pos2.y) ||
  (pos1.x === pos2.x + 1 && pos1.y === pos2.y);

const equalPositions = (p1: Position, p2: Position) =>
  p1.x === p2.x && p1.y === p2.y;

export { adjacent, equalPositions };
