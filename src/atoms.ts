import { atom } from "recoil";
import { Direction } from "./types";

const playerIntentState = atom<Direction | null>({
  key: "playerIntent",
  default: null,
});

const playerPositionState = atom({
  key: "playerPosition",
  default: { x: 0, y: 0 },
});

export { playerIntentState, playerPositionState };
