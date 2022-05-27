import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

const usePlayerPosition = () => {
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 3 });
  useHotkeys("up", () => setPlayerPosition(({ x, y }) => ({ x, y: y - 1 })));
  useHotkeys("down", () => setPlayerPosition(({ x, y }) => ({ x, y: y + 1 })));
  useHotkeys("right", () => setPlayerPosition(({ x, y }) => ({ x: x + 1, y })));
  useHotkeys("left", () => setPlayerPosition(({ x, y }) => ({ x: x - 1, y })));

  return playerPosition;
};

export default usePlayerPosition;
