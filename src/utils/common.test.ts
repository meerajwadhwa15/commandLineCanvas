import {
  updateCanvas,
  resetCanvas,
  readCanvas,
  isCanvasCreated,
  xAxisWithInRange,
  yAxisWithInRange,
  generateArray,
  drawLine,
  drawRectangle,
  printCanvas,
  fill,
} from "./common";
import { INITIAL_CANVAS_STATE } from "../config/constants";
jest.mock("fs");

jest.mock("../config/constants", () => ({
  ...jest.requireActual("../config/constants"),
  SESSION_FILE_PATH: "canvas.json",
}));

describe("Utils Common test cases", () => {
  let initialCanvasState = INITIAL_CANVAS_STATE;

  beforeEach(() => {
    initialCanvasState = Object.assign({}, INITIAL_CANVAS_STATE);
  });

  test("Should write data in file", () => {
    initialCanvasState.width = 20;
    initialCanvasState.height = 20;

    updateCanvas(initialCanvasState);
    const response = JSON.parse(require("fs").readFileSync("canvas.json"));
    expect(response.width).toBe(20);
    expect(response.height).toBe(20);
    expect(response.lines.length).toBe(0);
    expect(response.rectangle.length).toBe(0);
    expect(response.filler.length).toBe(0);
  });

  test("Should Reset Canvas", () => {
    resetCanvas();
    const response = JSON.parse(require("fs").readFileSync("canvas.json"));
    expect(response.width).toBe(0);
    expect(response.height).toBe(0);
    expect(response.lines.length).toBe(0);
    expect(response.rectangle.length).toBe(0);
    expect(response.filler.length).toBe(0);
  });

  test("Should read canvas data", () => {
    const response = readCanvas();
    expect(response.width).toBe(0);
    expect(response.height).toBe(0);
    expect(response.lines.length).toBe(0);
    expect(response.rectangle.length).toBe(0);
    expect(response.filler.length).toBe(0);
  });

  test("Should return `false` if canvas is not created", () => {
    expect(isCanvasCreated()).toBe(false);
  });

  test("Should return `true` if canvas is not created", () => {
    initialCanvasState.width = 20;
    initialCanvasState.height = 20;

    updateCanvas(initialCanvasState);
    expect(isCanvasCreated()).toBe(true);
  });

  test("Should test xAxes in Range", () => {
    expect(xAxisWithInRange(0, 20)).toBeFalsy();
    expect(xAxisWithInRange(3, 20)).toBeTruthy();
    expect(xAxisWithInRange(18, 20)).toBeTruthy();
    expect(xAxisWithInRange(21, 20)).toBeFalsy();
  });

  test("Should test yAxes in Range", () => {
    expect(yAxisWithInRange(0, 20)).toBeFalsy();
    expect(yAxisWithInRange(3, 20)).toBeTruthy();
    expect(yAxisWithInRange(18, 20)).toBeTruthy();
    expect(yAxisWithInRange(21, 20)).toBeFalsy();
  });

  test("Should test generateArray", () => {
    expect(generateArray(20, 4)).toEqual([
      [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
      ],
      [
        "|",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        "|",
      ],
      [
        "|",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        "|",
      ],
      [
        "|",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        "|",
      ],
      [
        "|",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        "|",
      ],
      [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
      ],
    ]);
  });

  test("Should Draw Line", () => {
    const printArray = generateArray(10, 4);
    expect(
      drawLine(
        [
          { x1: 1, y1: 2, x2: 6, y2: 2 },
          { x1: 6, y1: 3, x2: 6, y2: 4 },
          { x1: 8, y1: 4, x2: 8, y2: 3 },
          { x1: 3, y1: 4, x2: 1, y2: 4 },
        ],
        printArray
      )
    ).toEqual([
      ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
      ["|", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "|"],
      ["|", "x", "x", "x", "x", "x", "x", " ", " ", " ", " ", "|"],
      ["|", " ", " ", " ", " ", " ", "x", " ", "x", " ", " ", "|"],
      ["|", "x", "x", "x", " ", " ", "x", " ", "x", " ", " ", "|"],
      ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
    ]);
  });

  test("Should Draw Rectangle", () => {
    const printArray = generateArray(4, 3);
    expect(drawRectangle([{ x1: 1, y1: 1, x2: 4, y2: 3 }], printArray)).toEqual(
      [
        ["-", "-", "-", "-", "-", "-"],
        ["|", "x", "x", "x", "x", "|"],
        ["|", "x", " ", " ", "x", "|"],
        ["|", "x", "x", "x", "x", "|"],
        ["-", "-", "-", "-", "-", "-"],
      ]
    );
  });

  test("Should Fill", () => {
    let printArray = generateArray(10, 4);
    printArray = drawRectangle([{ x1: 5, y1: 1, x2: 8, y2: 3 }], printArray);
    printArray = drawLine(
      [
        { x1: 1, y1: 2, x2: 3, y2: 2 },
        { x1: 3, y1: 3, x2: 3, y2: 4 },
      ],
      printArray
    );

    expect(fill([{ x: 1, y: 2, c: "o" }], 10, 4, printArray)).toEqual([
      ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
      ["|", " ", " ", " ", " ", "x", "x", "x", "x", " ", " ", "|"],
      ["|", "x", "x", "x", " ", "x", " ", " ", "x", " ", " ", "|"],
      ["|", " ", " ", "x", " ", "x", "x", "x", "x", " ", " ", "|"],
      ["|", " ", " ", "x", " ", " ", " ", " ", " ", " ", " ", "|"],
      ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
    ]);

    expect(fill([{ x: 4, y: 1, c: "o" }], 10, 4, printArray)).toEqual([
      ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
      ["|", "o", "o", "o", "o", "x", "x", "x", "x", "o", "o", "|"],
      ["|", "x", "x", "x", "o", "x", " ", " ", "x", "o", "o", "|"],
      ["|", " ", " ", "x", "o", "x", "x", "x", "x", "o", "o", "|"],
      ["|", " ", " ", "x", "o", "o", "o", "o", "o", "o", "o", "|"],
      ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
    ]);
  });
});
