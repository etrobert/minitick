import { useCallback, useState } from "react";
import useInterval from "use-interval";

import usePlayerIntent from "./usePlayerIntent";

import type { Direction } from "./types";

const usePlayerPosition = () => {
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 3 });
  const { playerIntent, resetPlayerIntent } = usePlayerIntent();

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

  const takeTurn = useCallback(() => {
    if (playerIntent === null) return;
    movePlayer(playerIntent);
    resetPlayerIntent();
  }, [playerIntent, resetPlayerIntent]);
  useInterval(takeTurn, 1000);

  return playerPosition;
};

export default usePlayerPosition;
