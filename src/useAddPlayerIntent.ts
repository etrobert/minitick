import { useCallback } from "react";
import { useSetRecoilState } from "recoil";

import { playerIntentsState } from "./atoms";

import type { Direction, PlayerId } from "./types";

const useAddPlayerIntent = (playerId: PlayerId) => {
  const setPlayerIntents = useSetRecoilState(playerIntentsState(playerId));

  const addPlayerIntent = useCallback(
    (direction: Direction) =>
      setPlayerIntents((intents) => [...intents, direction]),
    [setPlayerIntents]
  );

  return addPlayerIntent;
};

export default useAddPlayerIntent;
