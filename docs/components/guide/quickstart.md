---
title: 快速上手
---

你可以引入整个 RoyceUI，或是根据需要仅引入部分组件。

## 完整引入

在入口文件中写入如下内容：

```javascript
import Vue from "vue";
import RoyceUI from "royce-ui";
import "royce-ui/lib/style/index.css";

import App from "./App.vue";

Vue.use(RoyceUI);

new Vue({
  el: "#app",
  render: h => h(App),
});
```

以上代码便完成了 RoyceUI 的引入。需要注意的是，样式文件需要单独引入。

## 按需引入

借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```shell
npm install babel-plugin-component -D
```

然后，将 .babelrc 修改为：

```json
plugins: [
  [
    "component",
    {
      "libraryName": "royce-ui",
      "styleLibrary": { "name": "style" }
    }
  ]
]
```

接下来，如果你只希望引入部分组件，比如 ResizeBox，那么需要在代码中写入以下内容：

```Javascript
import { ResizeBox } from "royce-ui";
```
