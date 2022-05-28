import { useSetRecoilState } from "recoil";
import useInterval from "use-interval";
import { playerIntentState } from "./atoms";
import { PlayerId } from "./types";

const directions = ["up", "down", "left", "right"] as const;

const randomInt = (max: number) => Math.floor(Math.random() * max);

const randomElement = <T>(array: readonly T[]) =>
  array[randomInt(array.length)];

const randomIntent = () => randomElement(directions);

const useAi = (playerId: PlayerId) => {
  const setIntent = useSetRecoilState(playerIntentState(playerId));
  useInterval(() => setIntent(randomIntent()), 1000);
};

export default useAi;
