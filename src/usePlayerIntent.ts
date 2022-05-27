import { useCallback } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { useSetRecoilState } from "recoil";
import { playerIntentState } from "./atoms";

const usePlayerIntent = () => {
  const setPlayerIntent = useSetRecoilState(playerIntentState(0));

  useHotkeys("up", () => setPlayerIntent("up"));
  useHotkeys("down", () => setPlayerIntent("down"));
  useHotkeys("right", () => setPlayerIntent("right"));
  useHotkeys("left", () => setPlayerIntent("left"));

  const resetPlayerIntent = useCallback(() => setPlayerIntent(null), []);

  return { resetPlayerIntent };
};

export default usePlayerIntent;
