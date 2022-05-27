import { useCallback, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

import type { Direction } from "./types";

const usePlayerIntent = () => {
  const [playerIntent, setPlayerIntent] = useState<Direction | null>(null);

  useHotkeys("up", () => setPlayerIntent("up"));
  useHotkeys("down", () => setPlayerIntent("down"));
  useHotkeys("right", () => setPlayerIntent("right"));
  useHotkeys("left", () => setPlayerIntent("left"));

  const resetPlayerIntent = useCallback(() => setPlayerIntent(null), []);

  return { playerIntent, resetPlayerIntent };
};

export default usePlayerIntent;
