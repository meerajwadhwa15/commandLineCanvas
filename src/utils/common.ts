import fs from "fs";
import { SESSION_FILE_PATH, INITIAL_CANVAS_STATE } from "../config/constants";
import { canvasDataType } from "../types/type";

export const updateCanvas = async (canvasData: canvasDataType) => {
  fs.writeFileSync(SESSION_FILE_PATH, JSON.stringify(canvasData));
};

export const resetCanvas = async () => {
  return updateCanvas(INITIAL_CANVAS_STATE);
};

export const readCanvas = (): canvasDataType => {
  return JSON.parse(
    fs.readFileSync(SESSION_FILE_PATH, {
      encoding: "utf8",
      flag: "r",
    })
  );
};

export const isCanvasCreated = (): boolean => {
  const fileText = readCanvas();
  return fileText && fileText.width > 0 ? true : false;
};
