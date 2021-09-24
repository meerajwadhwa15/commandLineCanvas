import drawLine from "./line";
import { updateCanvas, printCanvas } from "../utils/common";

jest.mock("../utils/common", () => ({
  ...jest.requireActual("../utils/common"),
  updateCanvas: jest.fn(),
  readCanvas: () => ({
    width: 20,
    height: 4,
    lines: [],
    rectangle: [],
    filler: [],
  }),
  isCanvasCreated: () => true,
  printCanvas: jest.fn(),
}));

describe("DrawLine test cases", () => {
  beforeEach(() => {});

  test("Should validate input", () => {
    expect(() => drawLine(0, 0, 0, 0)).toThrow("Invalid Input");
    expect(() => drawLine(-1, 10, 5, 4)).toThrow("Invalid Input");
  });

  test("Should draw line", () => {
    drawLine(5, 4, 5, 6);
    expect(updateCanvas).toHaveBeenCalledWith({
      filler: [],
      height: 4,
      lines: [{ x1: 5, y1: 4, x2: 5, y2: 6 }],
      rectangle: [],
      width: 20,
    });
    expect(printCanvas).toHaveBeenCalled();
  });
});
