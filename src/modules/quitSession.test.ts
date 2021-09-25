import quitSession from "./quitSession";
import { resetCanvas } from "../utils/common";

jest.mock("../utils/common", () => ({
  ...jest.requireActual("../utils/common"),
  resetCanvas: jest.fn(),
}));

describe("QuitSession test cases", () => {
  beforeEach(() => {});

  test("Should draw line", () => {
    quitSession();
    expect(resetCanvas).toHaveBeenCalled();
  });
});
