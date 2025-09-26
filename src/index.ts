import { program } from "commander";
import chalk from "chalk";
import ora from "ora";
import { promises as fs } from "fs";
import path from "path";
import boxen from "boxen";
import {
  consoleBytes,
  consoleError,
  consoleFileContent,
} from "./utils/outputUtils.ts";
import { options } from "./utils/inputUtils.ts";

async function main(): Promise<void> {
  program
    .name("read")
    .description("Node.ts implementation of cat command")
    .version("14.0.1")
    .option("-b , --bytes", "use bytes is files")
    .option("-n , --number", "use number")
    .argument("[files...]", "files to process")
    .action(async (files: string[], options) => {
      for (let file of files) {
        try {
          const absolutePath = path.resolve(file);
          if (options.bytes) {
            consoleFileContent(absolutePath);
            consoleBytes(absolutePath, (await fs.stat(absolutePath)).size);
          } else if (options.number) {
            consoleFileContent(absolutePath);
          } else {
            consoleFileContent(absolutePath);
          }

          // const spinner = ora("Loading unicorns").start();
          // setTimeout(() => {
          //   spinner.color = "yellow";
          //   spinner.text = "Loading rainbows";
          // }, 1000);

          // spinner.stop();
        } catch (error) {
          consoleError("File not found: " + files);
        }
      }
    });
  program.parse();
}
main();
