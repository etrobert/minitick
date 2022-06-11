import range from "lodash/range";
import { useRecoilValue } from "recoil";

import { gridSize } from "./constants";
import { hitPositionState, playersPositionsState } from "./atoms";
import Cell from "./Cell";
import { adjacent, equalPositions } from "./helpers";

import "./Grid.css";

const cells = range(gridSize)
  .map((y) => range(gridSize).map((x) => ({ x, y })))
  .flat();

const Grid = () => {
  const playersPositions = useRecoilValue(playersPositionsState);
  const hitPosition = useRecoilValue(hitPositionState);

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
          hit={hitPosition !== null && adjacent(cell, hitPosition)}
        />
      ))}
    </div>
  );
};
export default Grid;
