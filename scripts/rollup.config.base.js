"use strict";

const fs = require("fs");
const path = require("path");
const pkgJson = require("../package.json");
const { name } = pkgJson;

import vue from "rollup-plugin-vue2";
import alias from "rollup-plugin-alias";
import replace from "rollup-plugin-replace";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import sass from "rollup-plugin-scss";
import autoprefixer from "autoprefixer";
import postcss from "postcss";
import babel from "rollup-plugin-babel";

function getAllInputs() {
  const packages = {};
  const dir = path.join(__dirname, "../src/packages");
  const files = fs.readdirSync(dir);
  files.forEach(file => packages[file] = `src/packages/${file}/index.js`);
  packages[name] = "src/index.js";
  return packages;
}

function createRollupConfig(fileName, filePath) {
  return {
    input: filePath,
    output: {
      file: `lib/${fileName}.js`,
      format: "umd",
      name: fileName,
    },
    plugins: [
      vue(),
      alias({
        "@": path.resolve(__dirname, "src"),
      }),
      replace({
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      }),
      resolve({
        jsnext: true,
        main: true,
        browser: true,
      }),
      commonjs({
        include: "node_modules/**",
      }),
      sass({
        processor: (css) => postcss([autoprefixer]).process(css).then((result) => result.css),
        output: `lib/style/${fileName}.css`,
      }),
      babel({
        runtimeHelpers: true,
        exclude: "node_modules/**",
        extensions: [".js", ".vue", ".es6", ".es", ".mjs"],
      }),
    ],
  };
}

export default Object.entries(getAllInputs()).map(([fileName, filePath]) => createRollupConfig(fileName, filePath));