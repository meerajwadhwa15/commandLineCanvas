import drawRectangle from "./index";
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

describe("DrawRectangle test cases", () => {
  beforeEach(() => {});

  test("Should validate input", () => {
    expect(() => drawRectangle(0, 0, 0, 0)).toThrow("Invalid Input");
    expect(() => drawRectangle(-1, 10, 5, 4)).toThrow("Invalid Input");
  });

  test("Should draw Rectangle", () => {
    drawRectangle(5, 4, 5, 6);
    expect(updateCanvas).toHaveBeenCalledWith({
      filler: [],
      height: 4,
      lines: [],
      rectangle: [{ x1: 5, y1: 4, x2: 5, y2: 6 }],
      width: 20,
    });
    expect(printCanvas).toHaveBeenCalled();
  });
});
