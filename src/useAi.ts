import useInterval from "use-interval";

import useAddPlayerIntent from "./useAddPlayerIntent";

import type { PlayerId } from "./types";

const directions = ["up", "down", "left", "right"] as const;

const randomInt = (max: number) => Math.floor(Math.random() * max);

const randomElement = <T>(array: readonly T[]) =>
  array[randomInt(array.length)];

const randomIntent = () => randomElement(directions);

const useAi = (playerId: PlayerId) => {
  const addPlayerIntent = useAddPlayerIntent(playerId);
  useInterval(() => addPlayerIntent(randomIntent()), 1000);
};

export default useAi;
