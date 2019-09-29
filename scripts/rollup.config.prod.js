"use strict";

import { uglify } from "rollup-plugin-uglify";
import rollupBaseConfig from "./rollup.config.base";

export default rollupBaseConfig.map(
  config => (config.plugins = [...config.plugins, uglify()], config)
);