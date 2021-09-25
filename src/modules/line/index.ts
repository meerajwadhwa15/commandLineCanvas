import { updateCanvas, readCanvas, printCanvas } from "../../utils/common";

const isValidInput = (x1: number, y1: number, x2: number, y2: number) => {
  return x1 > 0 && y1 > 0 && x2 > 0 && y2 > 0;
};

function drawLine(x1: number, y1: number, x2: number, y2: number) {
  if (!isValidInput(x1, y1, x2, y2)) {
    throw "Invalid Input";
  }

  const canvas = readCanvas();
  if (!canvas.lines) {
    canvas.lines = [];
  }

  canvas.lines.push({ x1, y1, x2, y2 });
  updateCanvas(canvas);
  return printCanvas(canvas);
}

export default drawLine;
