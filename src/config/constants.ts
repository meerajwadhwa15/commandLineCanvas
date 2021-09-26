import { canvasDataType } from "../types/type";

export const SESSION_FILE_PATH = "./session/canvas.json";
export const INITIAL_CANVAS_STATE: canvasDataType = {
  width: 0,
  height: 0,
  lines: [],
  rectangle: [],
  filler: [],
};

export const EXTRA_WIDTH = 2;
export const EXTRA_HEIGHT = 2;
export const FILLER_VALUE = 'x';
