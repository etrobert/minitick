import { Position } from "./types";

const adjacent = (pos1: Position, pos2: Position) =>
  (pos1.x === pos2.x && pos1.y === pos2.y - 1) ||
  (pos1.x === pos2.x && pos1.y === pos2.y + 1) ||
  (pos1.x === pos2.x - 1 && pos1.y === pos2.y) ||
  (pos1.x === pos2.x + 1 && pos1.y === pos2.y);

export { adjacent };
