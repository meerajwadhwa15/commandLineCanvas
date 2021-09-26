import {
  updateCanvas,
  readCanvas,
  printCanvas,
  xAxisWithInRange,
  yAxisWithInRange,
} from "../../utils/common";

const isValidInput = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  width: number,
  height: number
) => {
  return (
    xAxisWithInRange(x1, width) &&
    yAxisWithInRange(y1, height) &&
    xAxisWithInRange(x2, width) &&
    yAxisWithInRange(y2, height) &&
    (x1 === x2 || y1 === y2)
  );
};

function drawLine(x1: number, y1: number, x2: number, y2: number) {
  const canvas = readCanvas();

  if (!isValidInput(x1, y1, x2, y2, canvas.width, canvas.height)) {
    throw "Invalid Input";
  }

  if (!canvas.lines) {
    canvas.lines = [];
  }

  canvas.lines.push({ x1, y1, x2, y2 });
  updateCanvas(canvas);
  return printCanvas(canvas);
}

export default drawLine;
