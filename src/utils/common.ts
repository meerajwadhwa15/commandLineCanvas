import fs from "fs";
import { SESSION_FILE_PATH, INITIAL_CANVAS_STATE } from "../config/constants";
import { canvasDataType, canvasLines, canvasRectangles } from "../types/type";

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

/*
  Print Canvas
  @input canvasData: canvasDataType
  @return string
*/
export const printCanvas = (canvasData: canvasDataType) => {
  let printArray = [];
  for (let i = 0; i < canvasData.height; i++) {
    printArray.push(Array(canvasData.width).fill("-"));
  }

  printArray = drawLine(canvasData.lines, printArray);
  printArray = drawRectangle(canvasData.rectangle, printArray);
  return printArray.map((item) => item.join(" ")).join("\r\n");
};

/*
  Draw Line
  @input lines: canvasLines
  @input printArray: string[][]
  @return printArray: string[][]
*/
export const drawLine = (lines: canvasLines, printArray: string[][]) => {
  lines.forEach((line) => {
    // Horizontal case
    if (line.y1 === line.y2) {
      for (let i = line.x1; i <= line.x2; i++) {
        printArray[line.y1][i] = "x";
      }
    } else if (line.x1 === line.x2) {
      // Vertical case
      for (let i = line.y1; i <= line.y2; i++) {
        printArray[i][line.x1] = "x";
      }
    }
  });
  return printArray;
};

/*
  Draw Rectangle
  @input rectangles: canvasRectangles
  @input printArray: string[][]
  @return printArray: string[][]
*/
export const drawRectangle = (
  rectangles: canvasRectangles,
  printArray: string[][]
) => {
  rectangles.forEach((rectangle) => {
    for (let i = rectangle.y1; i <= rectangle.y2; i++) {
      if (i !== rectangle.y1 && i !== rectangle.y2) {
        printArray[i][rectangle.x1] = "x";
        printArray[i][rectangle.x2] = "x";
      } else {
        for (let j = rectangle.x1; j <= rectangle.x2; j++) {
          printArray[i][j] = "x";
        }
      }
    }
  });
  return printArray;
};
