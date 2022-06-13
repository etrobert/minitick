import { useHotkeys } from "react-hotkeys-hook";
import { useResetRecoilState } from "recoil";

import { playerIntentsState } from "./atoms";
import useAddPlayerIntent from "./useAddPlayerIntent";

const useKeyboard = () => {
  const addPlayerIntent = useAddPlayerIntent(0);
  const resetPlayerIntents = useResetRecoilState(playerIntentsState(0));

  useHotkeys("up", () => addPlayerIntent("up"));
  useHotkeys("down", () => addPlayerIntent("down"));
  useHotkeys("right", () => addPlayerIntent("right"));
  useHotkeys("left", () => addPlayerIntent("left"));
  useHotkeys("space", () => addPlayerIntent("hit"));
  useHotkeys("backspace", () => resetPlayerIntents());
};

export default useKeyboard;
