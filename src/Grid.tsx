import range from "lodash/range";
import { useRecoilValue } from "recoil";

import { gridSize } from "./constants";
import { playersPositionsState } from "./atoms";
import Cell from "./Cell";

import type { Position } from "./types";

import "./Grid.css";

const cells = range(gridSize)
  .map((y) => range(gridSize).map((x) => ({ x, y })))
  .flat();

const equalPositions = (p1: Position, p2: Position) =>
  p1.x === p2.x && p1.y === p2.y;

const Grid = () => {
  const playersPositions = useRecoilValue(playersPositionsState);

  return (
    <div className="Grid">
      {cells.map((cell, i) => (
        <Cell
          key={i}
          playerId={
            playersPositions.find(({ position }) =>
              equalPositions(position, cell)
            )?.id
          }
        />
      ))}
    </div>
  );
};
export default Grid;
