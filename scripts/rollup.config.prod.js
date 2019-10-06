"use strict";

import { uglify } from "rollup-plugin-uglify";
import rollupBaseConfig from "./rollup.config.base";
import rollupStyleConfig from "./rollup.config.style";

rollupBaseConfig.forEach((config) => {
  config.plugins = [...config.plugins, uglify()];
});

export default rollupBaseConfig.concat(rollupStyleConfig);