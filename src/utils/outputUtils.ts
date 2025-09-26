import { program } from "commander";
import chalk from "chalk";
import ora from "ora";
import { promises as fs } from "fs";
import path from "path";
import boxen from "boxen";
import Table from "cli-table";

export function consoleFileContent(file: string) {
  console.log(chalk.blue.bold("File content:"));
  fs.readFile(file, "utf-8").then((data) => {
    const lines = data.split("\n");

    lines.forEach((line, index) => {
      const lineNumber = chalk.gray(`${(index + 1).toString().padStart(4)} │ `);
      console.log(lineNumber + chalk.white(line));
    });
  });
}

export function consoleBytes(file: string, bytes: number): void {
  console.log(chalk.green.bold(bytes, `Bytes in ${file}`));
}

export function consoleError(message: string): void {
  console.log(chalk.red.bold(message));
}
