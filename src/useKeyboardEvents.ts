import { useEffect } from "react";

const useKeyboardEvents = () => {
  useEffect(() => {
    const listener = (event: KeyboardEvent) => console.log(event.key);
    window.addEventListener("keyup", listener);
    return () => window.removeEventListener("keyup", listener);
  }, []);
};

export default useKeyboardEvents;
