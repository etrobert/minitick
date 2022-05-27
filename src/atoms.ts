import { atom, atomFamily } from "recoil";

import type { Direction, Position } from "./types";

type PlayerId = number;

const playerIntentState = atomFamily<Direction | null, PlayerId>({
  key: "playerIntent",
  default: null,
});

const playerPositionState = atomFamily<Position, PlayerId>({
  key: "playerPosition",
  default: { x: 0, y: 0 },
});

const playersState = atom<PlayerId[]>({ key: "players", default: [0] });

export { playerIntentState, playerPositionState, playersState };
