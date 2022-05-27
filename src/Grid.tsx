import range from "lodash/range";
import { useRecoilValue } from "recoil";

import { playerPositionState } from "./atoms";

import "./Grid.css";

const size = 4;
const cells = range(size)
  .map((y) => range(size).map((x) => ({ x, y })))
  .flat();

type Position = {
  x: number;
  y: number;
};

const equalPositions = (p1: Position, p2: Position) =>
  p1.x === p2.x && p1.y === p2.y;

const Grid = () => {
  const playerPosition = useRecoilValue(playerPositionState);

  return (
    <div className="Grid">
      {cells.map((cell, i) => (
        <div
          key={i}
          style={{
            width: "3rem",
            height: "3rem",
            backgroundColor: equalPositions(playerPosition, cell)
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
