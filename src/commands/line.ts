#!/usr/bin/env node

import yargs from "yargs";

// Draw a Line Command
yargs
  .command("*", "Draw Line on canvas command", function (argv: any) {
    console.log('draw Line');
  })
  .help().argv;
