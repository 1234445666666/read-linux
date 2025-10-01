import chalk from "chalk";
import { promises as fs } from "fs";

export function consoleFileContent(file: string) {
  console.log(chalk.blue.bold("File content:"));
  fs.readFile(file, "utf-8").then((data) => {
    const lines = data.split("\n");

    lines.forEach((line, index) => {
      const lineNumber = chalk.gray(`${(index + 1).toString().padStart(4)} │ `);
      console.log(lineNumber + chalk.white.bold(line));
    });
  });
}

export function consoleBytes(file: string, bytes: number): void {
  try {
    console.log(chalk.green.bold(bytes, `Bytes in ${file}`));
  } catch (error) {
    consoleError("File not found: " + file);
    return;
  }
}

export function consoleError(message: string): void {
  console.log(chalk.red.bold(message));
}
