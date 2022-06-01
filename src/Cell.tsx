import type { PlayerId } from "./types";

import "./Cell.css";

type Props = {
  playerId?: PlayerId;
};

const Cell = ({ playerId }: Props) => (
  <div className="Cell" data-player-id={playerId}>
    {/* {`${cell.x}, ${cell.y}`} */}
  </div>
);

export default Cell;
