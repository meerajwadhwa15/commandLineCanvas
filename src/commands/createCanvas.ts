#!/usr/bin/env node

import yargs from "yargs";

// Create Canvas Command
yargs.command("*", "Create Canvas command", function (argv: any) {
    console.log('Create Canvas');
}).help()
  .argv;
