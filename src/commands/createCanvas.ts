#!/usr/bin/env node

import yargs from "yargs";
import createSession from "../modules/create";

// Create Canvas Command
yargs
  .command("*", "Create Canvas command", function (argv: any) {
    try {
      // Adding 2 for canvas border
      const width = parseInt(argv.argv._[0], 10);
      const height = parseInt(argv.argv._[1], 10);

      console.log(createSession(width, height));
    } catch (e) {
      console.error("Some error occured, Please check your input");
    }
  })
  .help().argv;
