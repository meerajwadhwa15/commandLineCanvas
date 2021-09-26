import fillTheCanvas from "./index";
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

describe("FillTheCanvas test cases", () => {
  beforeEach(() => {});

  test("Should validate input", () => {
    expect(() => fillTheCanvas(0, 0, "O")).toThrow("Invalid Input");
    expect(() => fillTheCanvas(-1, 10, "O")).toThrow("Invalid Input");
    expect(() => fillTheCanvas(22, 1, "O")).toThrow("Invalid Input");
    expect(() => fillTheCanvas(5, 6, "O")).toThrow("Invalid Input");
    expect(() => fillTheCanvas(5, 6, "")).toThrow("Invalid Input");
  });

  test("Should draw line", () => {
    fillTheCanvas(5, 2, "O");
    expect(updateCanvas).toHaveBeenCalledWith({
      filler: [{ x: 5, y: 2, c: "O" }],
      height: 4,
      lines: [],
      rectangle: [],
      width: 20,
    });
  });
});
