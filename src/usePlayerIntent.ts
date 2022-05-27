import { useCallback } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { useRecoilState } from "recoil";
import { playerIntentState } from "./atoms";

const usePlayerIntent = () => {
  const [playerIntent, setPlayerIntent] = useRecoilState(playerIntentState);

  useHotkeys("up", () => setPlayerIntent("up"));
  useHotkeys("down", () => setPlayerIntent("down"));
  useHotkeys("right", () => setPlayerIntent("right"));
  useHotkeys("left", () => setPlayerIntent("left"));

  const resetPlayerIntent = useCallback(() => setPlayerIntent(null), []);

  return { playerIntent, resetPlayerIntent };
};

export default usePlayerIntent;
