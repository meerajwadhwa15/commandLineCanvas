#!/usr/bin/env node

import yargs from "yargs";

// Fill Canvas Command
yargs.command("*", "Fill Canvas command", function (argv: any) {
  console.log('Fill Canvas');
}).help().argv;
