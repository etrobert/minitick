import useInterval from "use-interval";
import { useRecoilTransaction_UNSTABLE } from "recoil";
import { drop } from "lodash";

import { gridSize } from "./constants";
import { playerIntentsState, playerPositionState, playersState } from "./atoms";

import type { Action, Direction, PlayerId, Position } from "./types";

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

const processTurn = (
  players: PlayerId[],
  playersIntents: Map<PlayerId, Action[]>,
  playersPositions: Map<PlayerId, Position>
) => {
  const newPlayersPositions = new Map(playersPositions);

  players.forEach((playerId) => {
    // We cast away undefined cause we know it exists
    const playerIntents = playersIntents.get(playerId) as Action[];
    if (playerIntents.length === 0) return;
    const playerIntent = playerIntents[0];
    // TODO: We ignore hits for now
    if (playerIntent === "hit") return;
    // We cast away undefined cause we know it exists
    const playerPosition = playersPositions.get(playerId) as Position;
    const newPosition = movePosition(playerPosition, playerIntent);

    // TODO: Collisions

    newPlayersPositions.set(playerId, newPosition);
  });

  return newPlayersPositions;
};

const useTurns = () => {
  const recoilProcessTurn = useRecoilTransaction_UNSTABLE(
    ({ set, get }) =>
      () => {
        const players = get(playersState);
        const playersPositions = new Map(
          players.map((playerId) => [
            playerId,
            get(playerPositionState(playerId)),
          ])
        );
        const playersIntents = new Map(
          players.map((playerId) => [
            playerId,
            get(playerIntentsState(playerId)),
          ])
        );

        const newPlayersPositions = processTurn(
          players,
          playersIntents,
          playersPositions
        );

        Array.from(newPlayersPositions).map(([playerId, position]) =>
          set(playerPositionState(playerId), position)
        );

        players.forEach((playerId) => set(playerIntentsState(playerId), drop<Action>));
      }
  );

  useInterval(() => {
    recoilProcessTurn();
  }, 1000);
};

export default useTurns;
