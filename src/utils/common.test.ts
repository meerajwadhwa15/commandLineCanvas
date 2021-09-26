import {
  updateCanvas,
  resetCanvas,
  readCanvas,
  isCanvasCreated,
  xAxisWithInRange,
  yAxisWithInRange,
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
    expect(xAxisWithInRange(19, 20)).toBeFalsy();
  });

  test("Should test yAxes in Range", () => {
    expect(yAxisWithInRange(0, 20)).toBeFalsy();
    expect(yAxisWithInRange(3, 20)).toBeTruthy();
    expect(yAxisWithInRange(18, 20)).toBeTruthy();
    expect(yAxisWithInRange(19, 20)).toBeFalsy();
  });
});
