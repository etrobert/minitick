import { useRecoilValue } from "recoil";

import { playerIntentsState, playersState } from "./atoms";

import type { Direction, PlayerId } from "./types";

const emojis = {
  up: "⬆️",
  down: "⬇️",
  right: "➡️",
  left: "⬅️",
};

const PlayerIntent = ({ playerIntent }: { playerIntent: Direction }) => {
  return <div>{`${playerIntent === null ? "❌" : emojis[playerIntent]}`}</div>;
};

const PlayerIntents = ({ playerId }: { playerId: PlayerId }) => {
  const playerIntents = useRecoilValue(playerIntentsState(playerId));
  return (
    <div>
      {`Player ${playerId}`}
      {playerIntents.map((intent, index) => (
        <PlayerIntent playerIntent={intent} key={index} />
      ))}
    </div>
  );
};

const Header = () => {
  const players = useRecoilValue(playersState);
  return (
    <div className="Header">
      {players.map((playerId) => (
        <PlayerIntents playerId={playerId} key={playerId} />
      ))}
    </div>
  );
};

export default Header;
