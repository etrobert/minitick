import range from "lodash/range";

import "./Grid.css";

const size = 4;
const cells = range(size)
  .map((x) => range(size).map((y) => ({ x, y })))
  .flat();

const Grid = () => (
  <div className="Grid">
    {cells.map((cell, i) => (
      <div key={i} style={{ width: 30, height: 30, backgroundColor: "pink" }}>
        {`${cell.x}, ${cell.y}`}
      </div>
    ))}
  </div>
);

export default Grid;
