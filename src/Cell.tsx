import type { PlayerId } from "./types";

type Props = {
  playerId?: PlayerId;
};

const Cell = ({ playerId }: Props) => (
  <div
    style={{
      width: "3rem",
      height: "3rem",
      backgroundColor: playerId !== undefined ? "lightblue" : "pink",
    }}
  >
    {/* {`${cell.x}, ${cell.y}`} */}
  </div>
);

export default Cell;
