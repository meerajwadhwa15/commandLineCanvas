import drawLine from "./index";
import { updateCanvas, printCanvas } from "../../utils/common";

jest.mock("../../utils/common", () => ({
  ...jest.requireActual("../../utils/common"),
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
    expect(() => drawLine(1, 2, 6, 3)).toThrow("Invalid Input");
    expect(() => drawLine(6, 3, 5, 4)).toThrow("Invalid Input");
    expect(() => drawLine(21, 3, 5, 4)).toThrow("Invalid Input");
    expect(() => drawLine(5, 5, 5, 4)).toThrow("Invalid Input");
  });

  test("Should draw line", () => {
    drawLine(1, 1, 20, 1);
    expect(updateCanvas).toHaveBeenCalledWith({
      filler: [],
      height: 4,
      lines: [{ x1: 1, y1: 1, x2: 20, y2: 1 }],
      rectangle: [],
      width: 20,
    });
    expect(printCanvas).toHaveBeenCalled();
  });
});
