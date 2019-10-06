"use strict";

import serve from "rollup-plugin-serve";
import rollupBaseConfig from "./rollup.config.base";
import rollupStyleConfig from "./rollup.config.style";

rollupBaseConfig.forEach((config, index) => {
  if (!index) {
    config.plugins = [
      ...config.plugins,
      serve({ port: 3000, contentBase: "src" }),
    ];
  }
});

export default rollupBaseConfig.concat(rollupStyleConfig);