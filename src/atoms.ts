import { atom, atomFamily, selector } from "recoil";

import type { Direction, PlayerId, Position } from "./types";

const playerIntentsState = atomFamily<Direction[], PlayerId>({
  key: "playerIntents",
  default: [],
});

const playerPositionState = atomFamily<Position, PlayerId>({
  key: "playerPosition",
  default: { x: 0, y: 0 },
});

const playersState = atom<PlayerId[]>({ key: "players", default: [0, 1] });

const playersPositionsState = selector({
  key: "playersPositions",
  get: ({ get }) =>
    get(playersState).map((id) => ({
      id,
      position: get(playerPositionState(id)),
    })),
});

export {
  playerIntentsState,
  playerPositionState,
  playersState,
  playersPositionsState,
};
