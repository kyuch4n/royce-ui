"use strict";

import serve from "rollup-plugin-serve";
import rollupBaseConfig from "./rollup.config.base";

export default rollupBaseConfig.map((config, index) => {
  if (!index) {
    config.plugins = [
      ...config.plugins,
      serve({ port: 3000, contentBase: "src" }),
    ];
  }
  return config;
});
