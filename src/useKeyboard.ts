import { useHotkeys } from "react-hotkeys-hook";

import useAddPlayerIntent from "./useAddPlayerIntent";

const useKeyboard = () => {
  const addPlayerIntent = useAddPlayerIntent(0);

  useHotkeys("up", () => addPlayerIntent("up"));
  useHotkeys("down", () => addPlayerIntent("down"));
  useHotkeys("right", () => addPlayerIntent("right"));
  useHotkeys("left", () => addPlayerIntent("left"));
  useHotkeys("space", () => addPlayerIntent("hit"));
};

export default useKeyboard;
