import type { PlayerId } from "./types";

import "./Cell.css";

type Props = {
  className?: string;
  playerId?: PlayerId;
  hit: boolean;
};

const Cell = ({ className, playerId, hit }: Props) => (
  <div
    className={"Cell " + className}
    data-player-id={playerId}
    data-hit={hit || null}
  />
);

export default Cell;
