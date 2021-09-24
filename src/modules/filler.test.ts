import fillTheCanvas from "./filler";
import { updateCanvas } from "../utils/common";

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
}));

describe("FillTheCanvas test cases", () => {
  beforeEach(() => {});

  test("Should validate input", () => {
    expect(() => fillTheCanvas(0, 0, "O")).toThrow("Invalid Input");
    expect(() => fillTheCanvas(-1, 10, "X")).toThrow("Invalid Input");
  });

  test("Should draw line", () => {
    fillTheCanvas(5, 4, "O");
    expect(updateCanvas).toHaveBeenCalledWith({
      filler: [{ x: 5, y: 4, c: "O" }],
      height: 4,
      lines: [],
      rectangle: [],
      width: 20,
    });
  });
});
