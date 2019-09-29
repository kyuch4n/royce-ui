"use strict";

import ResizeBox from "./packages/resize-box";

const components = {
  ResizeBox,
};

const install = (Vue, /* options = {} */) => {
  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key]);
  });
};

export default install;