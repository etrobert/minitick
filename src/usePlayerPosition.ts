import { useCallback, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

type Direction = "up" | "down" | "right" | "left";

const usePlayerPosition = () => {
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 3 });

  const movePlayer = useCallback((direction: Direction) => {
    switch (direction) {
      case "up":
        setPlayerPosition(({ x, y }) => ({ x, y: y - 1 }));
        break;
      case "down":
        setPlayerPosition(({ x, y }) => ({ x, y: y + 1 }));
        break;
      case "right":
        setPlayerPosition(({ x, y }) => ({ x: x + 1, y }));
        break;
      case "left":
        setPlayerPosition(({ x, y }) => ({ x: x - 1, y }));
        break;
    }
  }, []);

  useHotkeys("up", () => movePlayer("up"));
  useHotkeys("down", () => movePlayer("down"));
  useHotkeys("right", () => movePlayer("right"));
  useHotkeys("left", () => movePlayer("left"));

  return playerPosition;
};

export default usePlayerPosition;
