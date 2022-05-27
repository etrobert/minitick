import { useRecoilValue } from "recoil";

import { playerIntentState, playersState } from "./atoms";

import type { PlayerId } from "./types";

const emojis = {
  up: "⬆️",
  down: "⬇️",
  right: "➡️",
  left: "⬅️",
};

const PlayerIntent = ({ playerId }: { playerId: PlayerId }) => {
  const playerIntent = useRecoilValue(playerIntentState(playerId));
  return (
    <div>{`Player ${playerId}: ${
      playerIntent === null ? "❌" : emojis[playerIntent]
    }`}</div>
  );
};

const Header = () => {
  const players = useRecoilValue(playersState);
  return (
    <div className="Header">
      {players.map((playerId) => (
        <PlayerIntent playerId={playerId} key={playerId} />
      ))}
    </div>
  );
};

export default Header;
