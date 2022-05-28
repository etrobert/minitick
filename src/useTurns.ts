import useInterval from "use-interval";
import { useRecoilTransaction_UNSTABLE, useRecoilValue } from "recoil";

import { playerIntentState, playerPositionState, playersState } from "./atoms";

import type { Direction, PlayerId, Position } from "./types";

const movePosition = ({ x, y }: Position, direction: Direction) => {
  switch (direction) {
    case "up":
      return { x, y: y - 1 };
    case "down":
      return { x, y: y + 1 };
    case "right":
      return { x: x + 1, y };
    case "left":
      return { x: x - 1, y };
  }
};

const useTurns = () => {
  const takeTurn = useRecoilTransaction_UNSTABLE(
    ({ set, get, reset }) =>
      (player: PlayerId) => {
        const intent = get(playerIntentState(player));
        if (intent === null) return;
        set(playerPositionState(player), (position) =>
          movePosition(position, intent)
        );
        reset(playerIntentState(player));
      },
    []
  );

  const players = useRecoilValue(playersState);

  useInterval(() => players.forEach(takeTurn), 1000);
};

export default useTurns;
