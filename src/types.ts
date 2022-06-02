type Direction = "up" | "down" | "right" | "left";

type Action = Direction | "hit";

type Position = {
  x: number;
  y: number;
};

type PlayerId = number;

export type { Direction, Action, Position, PlayerId };
