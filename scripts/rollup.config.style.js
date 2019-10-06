"use strict";

const fs = require("fs");
const path = require("path");

import sass from "rollup-plugin-scss";
import autoprefixer from "autoprefixer";
import postcss from "postcss";

function getAllInputs() {
  const packages = {};
  const dir = path.join(__dirname, "../src/styles");
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const subDir = path.join(__dirname, `../src/styles/${file}`);
    if (!fs.lstatSync(subDir).isDirectory()) {
      const fileName = file.split('.')[0];
      packages[fileName] = `src/styles/${file}`;
    }
  });
  return packages;
}

function createRollupConfig(fileName, filePath) {
  return {
    input: filePath,
    output: {
      format: "es",
      file: `dist/style/${fileName}.css`,
    },
    plugins: [
      sass({
        processor: (css) => postcss([autoprefixer]).process(css).then((result) => result.css),
        output: `lib/style/${fileName}.css`,
      }),
    ],
  };
}

export default Object.entries(getAllInputs()).map(([fileName, filePath]) => createRollupConfig(fileName, filePath));