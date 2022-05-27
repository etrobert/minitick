import { atom, atomFamily } from "recoil";
import { Direction } from "./types";

type PlayerId = number;

const playerIntentState = atomFamily<Direction | null, PlayerId>({
  key: "playerIntent",
  default: null,
});

const playerPositionState = atom({
  key: "playerPosition",
  default: { x: 0, y: 0 },
});

export { playerIntentState, playerPositionState };
