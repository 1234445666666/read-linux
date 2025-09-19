import { program } from "commander";
import chalk from "chalk";
import ora from "ora";
import { promises as fs } from "fs";
import path from "path";

async function main() {
  // const spinner = ora("Loading unicorns").start();

  // setTimeout(() => {
  //   spinner.color = "yellow";
  //   spinner.text = "Loading rainbows";
  // }, 1000);
  program
    .name("read")
    .description("Node.ts implementation of cat command")
    .version("14.0.1")
    .option("-l , --lines", "use lines")
    .option("-n , --number", "use number")
    .argument("[files...]", "files to process")
    .action(async (files: string[], options) => {
      try {
        files.forEach((file: string) => {
          const absolutePath = path.resolve(file);
          fs.readFile(absolutePath, "utf-8").then((data) => {
            console.log(chalk.blue.bold("File content:"));
            fs.stat(absolutePath)
              .then((stats) => {
                console.log(chalk.green.bold(stats.size, `Bytes in ${file}`));
              })
              .catch((error) => {
                console.log(chalk.red.bold("error"));
              });
            if (options.lines) {
              const lines = data.split("\n");
              console.log(chalk.green.bold(lines.length, `Lines in ${file}`));
            } else if (options.number) {
              const lines = data.split("\n");
              lines.forEach((line, index) => {
                console.log(chalk.green.bold(index + 1, line));
              });
            } else {
              console.log(chalk.white.italic(data));
            }
          });
        });
      } catch (error) {
        console.log(chalk.red.bold("File not found:", files));
      }
    });

  program.parse();
}
main();
