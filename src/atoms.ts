import { atom } from "recoil";
import { Direction } from "./types";

const playerIntentState = atom<Direction | null>({
  key: "playerIntent",
  default: null,
});

export { playerIntentState };
