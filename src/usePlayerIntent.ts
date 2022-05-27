import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

import type { Direction } from "./types";

const usePlayerIntent = () => {
  const [playerIntent, setPlayerIntent] = useState<Direction | null>(null);

  useHotkeys("up", () => setPlayerIntent("up"));
  useHotkeys("down", () => setPlayerIntent("down"));
  useHotkeys("right", () => setPlayerIntent("right"));
  useHotkeys("left", () => setPlayerIntent("left"));

  return playerIntent;
};

export default usePlayerIntent;
