import { atom, atomFamily, selector } from "recoil";

import type { Direction, PlayerId, Position } from "./types";

const playerIntentState = atomFamily<Direction | null, PlayerId>({
  key: "playerIntent",
  default: null,
});

const playerPositionState = atomFamily<Position, PlayerId>({
  key: "playerPosition",
  default: { x: 0, y: 0 },
});

const playersState = atom<PlayerId[]>({ key: "players", default: [0] });

const playersPositionsState = selector({
  key: "playersPositions",
  get: ({ get }) => get(playersState).map((id) => get(playerPositionState(id))),
});

export {
  playerIntentState,
  playerPositionState,
  playersState,
  playersPositionsState,
};
