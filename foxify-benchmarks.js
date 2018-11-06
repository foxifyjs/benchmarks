#!/usr/bin/env node

"use strict"

const program = require("commander")
const pkg = require("./package.json")

program
  .command("bench", "Benchmark one, multiple or all modules.", { isDefault: true })
  .command("compare", "Compare results by module.")
  .version(pkg.version)
  .parse(process.argv);
