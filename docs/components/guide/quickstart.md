---
title: 快速上手
---

# 引入

你可以引入整个 Element，或是根据需要仅引入部分组件。

## 完整引入

在入口文件中写入如下内容：

```javascript
import Vue from "vue";
import RoyceUI from "royce-ui";
import "royce-ui/lib/royce-ui.min.css";
import App from "./App.vue";

Vue.use(RoyceUI);

new Vue({
  el: "#app",
  render: h => h(App),
});
```

以上代码便完成了 RoyceUI 的引入。需要注意的是，样式文件需要单独引入。

## 按需引入
