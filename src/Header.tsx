import { useRecoilValue } from "recoil";

import { playerIntentsState, playersState } from "./atoms";
import Timer from "./Timer";

import type { PlayerId } from "./types";

const emojis = {
  up: "⬆️",
  down: "⬇️",
  right: "➡️",
  left: "⬅️",
  hit: "💥",
};

const PlayerIntents = ({ playerId }: { playerId: PlayerId }) => {
  const playerIntents = useRecoilValue(playerIntentsState(playerId));

  return (
    <div>
      {`Player ${playerId}: `}
      {playerIntents.length === 0 && "❌"}
      {playerIntents.map((intent) => emojis[intent])}
    </div>
  );
};

const Header = () => {
  const players = useRecoilValue(playersState);

  return (
    <div className="Header">
      <Timer />
      {players.map((playerId) => (
        <PlayerIntents playerId={playerId} key={playerId} />
      ))}
    </div>
  );
};

export default Header;
