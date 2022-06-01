const Cell = ({ isPlayer }: { isPlayer: boolean }) => (
  <div
    style={{
      width: "3rem",
      height: "3rem",
      backgroundColor: isPlayer ? "lightblue" : "pink",
    }}
  >
    {/* {`${cell.x}, ${cell.y}`} */}
  </div>
);

export default Cell;
