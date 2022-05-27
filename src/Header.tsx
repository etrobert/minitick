import { useRecoilValue } from "recoil";
import { playerIntentState } from "./atoms";

const Header = () => {
  const playerIntent = useRecoilValue(playerIntentState);

  return <div className="Header">{`PlayerIntent: ${playerIntent}`}</div>;
};

export default Header;
