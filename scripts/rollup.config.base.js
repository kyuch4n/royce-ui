"use strict";

const fs = require("fs");
const path = require("path");
const pkgJson = require("../package.json");
const { name } = pkgJson;

import vue from "rollup-plugin-vue2";
import postcss from "rollup-plugin-postcss";
import postcssScss from "postcss-scss";
import autoprefixer from "autoprefixer";
import base64 from "postcss-base64";
import alias from "rollup-plugin-alias";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import resolve from "rollup-plugin-node-resolve";

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
      file: `lib/${fileName}.min.js`,
      format: "umd",
      name: fileName,
      sourcemap: true,
    },
    plugins: [
      vue(),
      postcss({
        extract: true,
        parser: postcssScss,
        plugins: [
          base64({
            root: "src",
            extensions: [".png", ".jpeg", ".jpg", ".svg"],
          }),
          autoprefixer({ add: true }),
        ],
        minimize: true,
      }),
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
      babel({
        runtimeHelpers: true,
        exclude: "node_modules/**",
        extensions: [".js", ".vue", ".es6", ".es", ".mjs"],
      }),
    ],
  };
}

export default Object.entries(getAllInputs()).map(([fileName, filePath]) => createRollupConfig(fileName, filePath));