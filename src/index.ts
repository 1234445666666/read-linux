import { program } from "commander";
import fs from "fs";
import path from "path";

program
  .name("read")
  .description("Node.js implementation of cat command")
  .version("14.0.1")
  .option("-s, --separator <char>")
  .argument("[files...]", "files to process")
  .action((files, options) => {
    files.forEach((file: string) => {
      try {
        const absolutePath = path.resolve(file);
        console.log("Reading:", absolutePath);

        const data = fs.readFileSync(absolutePath, "utf-8");
        console.log(data);

        const stats = fs.statSync(absolutePath);
        console.error(`\nFile size: ${stats.size} bytes`);
      } catch (error) {
        console.log("Error");
      }
    });
  });

program.parse();
