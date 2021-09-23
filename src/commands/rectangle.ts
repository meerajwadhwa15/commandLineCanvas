#!/usr/bin/env node

import yargs from "yargs";

// Draw a Rectangle Command
yargs
  .command("*", "Draw Rectangle on canvas command", function (argv: any) {
    console.log("draw Rectangle");
  })
  .help().argv;
