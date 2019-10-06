---
title: 自定义主题
---

RoyceUI 默认提供了一套主题，您也可以覆盖样式，进行不同程度的样式自定义。

## 在项目中改变 SCSS 变量

RoyceUI的样式使用 SCSS 编写，如果你的项目也使用了 SCSS，那么可以直接在项目中改变 RoyceUI 的样式变量。新建一个样式文件，例如 royce-variables.scss，写入以下内容：

```scss
/* 改变主题色变量 */
$--color-primary: red;

@import "~royce-ui/src/styles/index.scss";
```

之后，在项目的入口文件中，直接引入以上样式文件即可（无需引入 RoyceUI 编译好的 CSS 文件）：

```javascript
import Vue from "vue";
import RoyceUI from "royce-ui";
import "./royce-variables.scss";

Vue.use(RoyceUI);
```

## RoyceUI 的样式文件

详细的样式变量可以参考 [var.scss](https://github.com/kyuch4n/royce-ui/blob/master/src/styles/common/var.scss)。
