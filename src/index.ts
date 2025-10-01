import { program } from "commander";
import { promises as fs } from "fs";
import path from "path";
import {
  consoleBytes,
  consoleError,
  consoleFileContent,
} from "./utils/outputUtils.ts";

async function main(): Promise<void> {
  program
    .name("read")
    .description("Node.ts implementation of cat command")
    .version("14.0.1")
    .option("-b , --bytes", "use bytes is files")
    .argument("[files...]", "files to process")
    .action(async (files: string[], options) => {
      for (let file of files) {
        try {
          const absolutePath = path.resolve(file);
          if (options.bytes) {
            consoleFileContent(absolutePath);
            consoleBytes(absolutePath, (await fs.stat(absolutePath)).size);
          } else {
            consoleFileContent(absolutePath);
          }
        } catch (error) {
          consoleError("File not found: " + files);
        }
      }
    });
  program.parse();
}
main();
