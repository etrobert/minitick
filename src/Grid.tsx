import range from "lodash/range";
import { useRecoilValue } from "recoil";

import { gridSize } from "./constants";
import { playersPositionsState } from "./atoms";

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
        <div
          key={i}
          style={{
            width: "3rem",
            height: "3rem",
            backgroundColor: playersPositions.some((playerPosition) =>
              equalPositions(playerPosition, cell)
            )
              ? "lightblue"
              : "pink",
          }}
        >
          {`${cell.x}, ${cell.y}`}
        </div>
      ))}
    </div>
  );
};
export default Grid;
