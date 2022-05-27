import { useHotkeys } from "react-hotkeys-hook";
import { useSetRecoilState } from "recoil";

import { playerIntentState } from "./atoms";

const useKeyboard = () => {
  const setPlayerIntent = useSetRecoilState(playerIntentState(0));

  useHotkeys("up", () => setPlayerIntent("up"));
  useHotkeys("down", () => setPlayerIntent("down"));
  useHotkeys("right", () => setPlayerIntent("right"));
  useHotkeys("left", () => setPlayerIntent("left"));
};

export default useKeyboard;
