import range from "lodash/range";

const size = 4;
const cells = range(size * size);

const Grid = () => (
  <div className="Grid">
    {cells.map((_, i) => (
      <div key={i} style={{ width: 30, height: 30, backgroundColor: "pink" }} />
    ))}
  </div>
);

export default Grid;
