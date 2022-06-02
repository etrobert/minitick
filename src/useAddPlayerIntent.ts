import { useCallback } from "react";
import { useSetRecoilState } from "recoil";

import { playerIntentsState } from "./atoms";

import type { Action, PlayerId } from "./types";

const useAddPlayerIntent = (playerId: PlayerId) => {
  const setPlayerIntents = useSetRecoilState(playerIntentsState(playerId));

  const addPlayerIntent = useCallback(
    (action: Action) => setPlayerIntents((intents) => [...intents, action]),
    [setPlayerIntents]
  );

  return addPlayerIntent;
};

export default useAddPlayerIntent;
