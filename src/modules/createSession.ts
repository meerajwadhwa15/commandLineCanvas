import { updateCanvas, isCanvasCreated } from "../utils/common";
import { INITIAL_CANVAS_STATE } from "../config/constants";

export const isValidInput = (width: number = 0, height: number = 0) => {
  return width > 0 && height > 0;
};

const createSession = (width: number, height: number) => {
  if (!isValidInput(width, height)) {
    throw "Invalid Input";
  }

  if (isCanvasCreated()) {
    throw "Canvas is already defined, Please use quit command to startover";
  }

  // Create New Canvas
  const canvas = Object.assign({}, INITIAL_CANVAS_STATE);
  canvas.width = width;
  canvas.height = height;

  updateCanvas(canvas);
};

export default createSession;
