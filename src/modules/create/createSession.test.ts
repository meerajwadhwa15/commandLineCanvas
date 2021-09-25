import createCanvas from "./index";
import { updateCanvas, resetCanvas, printCanvas } from "../../utils/common";

jest.mock("../../utils/common", () => ({
  ...jest.requireActual("../../utils/common"),
  updateCanvas: jest.fn(),
  printCanvas: jest.fn(),
}));

describe("CreateSession test cases", () => {
  beforeEach(() => {});

  test("Should validate input", () => {
    expect(() => createCanvas(0, 0)).toThrow("Invalid Input");
    expect(() => createCanvas(-1, 10)).toThrow("Invalid Input");
  });

  test("Should create canvas", () => {
    resetCanvas();
    createCanvas(20, 4);
    expect(updateCanvas).toHaveBeenCalledWith({
      filler: [],
      height: 4,
      lines: [],
      rectangle: [],
      width: 20,
    });
  });
});
