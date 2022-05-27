import { useState } from "react";

const usePlayerPosition = () => {
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });

  return playerPosition;
};

export default usePlayerPosition;
