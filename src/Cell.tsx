import type { PlayerId } from "./types";

import "./Cell.css";

type Props = {
  playerId?: PlayerId;
  hit: boolean;
};

const Cell = ({ playerId, hit }: Props) => (
  <div className="Cell" data-player-id={playerId} data-hit={hit || null} />
);

export default Cell;
