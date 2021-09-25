#!/usr/bin/env node

import yargs from "yargs";
import drawLine from "../modules/line";
import withCanvas from "../wrappers/withCanvas";

// Draw a Line Command
yargs
  .command("*", "Draw Line on canvas command", function (argv: any) {
    try {
      const x1 = parseInt(argv.argv._[0], 10);
      const y1 = parseInt(argv.argv._[1], 10);
      const x2 = parseInt(argv.argv._[2], 10);
      const y2 = parseInt(argv.argv._[3], 10);

      console.log(withCanvas(() => drawLine(x1, y1, x2, y2)));
    } catch (e) {
      console.error(e);
    }
  })
  .help().argv;
