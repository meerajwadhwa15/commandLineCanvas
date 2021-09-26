import {
  updateCanvas,
  readCanvas,
  printCanvas,
  xAxisWithInRange,
  yAxisWithInRange,
} from "../../utils/common";

const isValidInput = (
  x: number,
  y: number,
  c: string,
  width: number,
  height: number
) => {
  return xAxisWithInRange(x, width) && yAxisWithInRange(y, height) && c;
};
const fillTheCanvas = (x: number, y: number, c: string) => {
  const canvas = readCanvas();
  if (!isValidInput(x, y, c, canvas.width, canvas.height)) {
    throw "Invalid Input";
  }

  if (!canvas.filler) {
    canvas.filler = [];
  }

  canvas.filler.push({ x, y, c });
  updateCanvas(canvas);
  return printCanvas(canvas);
};

export default fillTheCanvas;
