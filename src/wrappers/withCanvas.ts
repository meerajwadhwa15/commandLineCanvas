import { isCanvasCreated } from "../utils/common";

const withCanvas = (cb: Function) => {
  if (!isCanvasCreated()) {
    throw "Please create canvas first by using command `C <w> <h>`";
  }

  return cb();
};

export default withCanvas;
