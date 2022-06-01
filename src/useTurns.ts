import useInterval from "use-interval";
import { useRecoilTransaction_UNSTABLE, useRecoilValue } from "recoil";

import { gridSize } from "./constants";
import { playerIntentsState, playerPositionState, playersState } from "./atoms";

import type { Direction, PlayerId, Position } from "./types";

const movePosition = (position: Position, direction: Direction) => {
  const { x, y } = position;
  switch (direction) {
    case "up":
      return y === 0 ? position : { x, y: y - 1 };
    case "down":
      return y === gridSize - 1 ? position : { x, y: y + 1 };
    case "right":
      return x === gridSize - 1 ? position : { x: x + 1, y };
    case "left":
      return x === 0 ? position : { x: x - 1, y };
  }
};

const useTurns = () => {
  const takeTurn = useRecoilTransaction_UNSTABLE(
    ({ set, get }) =>
      (player: PlayerId) => {
        const playerIntents = get(playerIntentsState(player));
        if (playerIntents.length === 0) return;
        const intent = playerIntents[0];
        set(playerPositionState(player), (position) =>
          movePosition(position, intent)
        );
        set(playerIntentsState(player), ([_, ...rest]) => rest);
      },
    []
  );

  const players = useRecoilValue(playersState);

  useInterval(() => players.forEach(takeTurn), 1000);
};

export default useTurns;
