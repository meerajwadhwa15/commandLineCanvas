#!/usr/bin/env node

import yargs from "yargs";
import quitSession from "../modules/quitSession";

// Create Canvas Command
yargs
  .command("*", "Quit Canvas command", function () {
    try {
      quitSession();
      console.log("Session quit");
    } catch (e) {
      console.error(e);
    }
  })
  .help().argv;
