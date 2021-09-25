#!/usr/bin/env node

import yargs from "yargs";
import withCanvas from "../wrappers/withCanvas";
import fillTheCanvas from "../modules/filler";

// Fill Canvas Command
yargs
  .command("*", "Fill Canvas command", function (argv: any) {
    try {
      const x = parseInt(argv.argv._[0], 10);
      const y = parseInt(argv.argv._[1], 10);
      const c = argv.argv._[2];

      console.log(withCanvas(() => fillTheCanvas(x, y, c)));
    } catch (e) {
      console.error(e);
    }
  })
  .help().argv;
