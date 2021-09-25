import { updateCanvas, readCanvas, printCanvas } from "../utils/common";

const isValidInput = (x: number, y: number, c: string) => {
  return x > 0 && y > 0;
};
const fillTheCanvas = (x: number, y: number, c: string) => {
  if (!isValidInput(x, y, c)) {
    throw "Invalid Input";
  }

  const canvas = readCanvas();
  if (!canvas.filler) {
    canvas.filler = [];
  }

  canvas.filler.push({ x, y, c });
  updateCanvas(canvas);
  return printCanvas(canvas);
};

export default fillTheCanvas;
