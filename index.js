fs = require("fs");
path = require("path");

const argv = process.argv;

const absolutePath = path.resolve(argv[2]);

try {
  const data = fs.readFileSync(absolutePath, "utf-8");
  console.log(data);

  fs.stat(absolutePath, (err, stats) => {
    if (err) console.error(err);

    console.log(stats.isFile(), "есть ли файл");
    console.log(stats.isDirectory(), "есть ли директория");
    console.log(stats.size, "размер в байтах");
  });
} catch {
  console.log("File not found");
}
