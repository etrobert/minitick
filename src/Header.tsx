import { useRecoilValue } from "recoil";
import { playerIntentState } from "./atoms";

const emojis = {
  up: "⬆️",
  down: "⬇️",
  right: "➡️",
  left: "⬅️",
};

const Header = () => {
  const playerIntent = useRecoilValue(playerIntentState);

  return (
    <div className="Header">{`Player: ${
      playerIntent === null ? "❌" : emojis[playerIntent]
    }`}</div>
  );
};

export default Header;
