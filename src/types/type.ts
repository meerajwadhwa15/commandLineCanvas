export type canvasLineType = { x1: number; y1: number; x2: number; y2: number };
export type canvasLines = canvasLineType[];

export type canvasRectangleType = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};
export type canvasRectangles = canvasRectangleType[];

export type canvasFillerType = { x: number; y: number; c: string };
export type canvasFillers = canvasFillerType[];

export type canvasDataType = {
  width: number;
  height: number;
  lines: canvasLines;
  rectangle: canvasRectangles;
  filler: canvasFillers;
};
