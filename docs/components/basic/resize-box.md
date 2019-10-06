---
title: ResizeBox
---

可通过拖动，改变宽高的容器组件。

## 两列布局

左侧侧边栏可以通过拖动改变大小。

<template>
  <div class="container1">
    <resize-box class="resize-box-demo1" :move="{ r: true }"></resize-box>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.container1 {
  height: 400px;
  display: flex;
  border: 3px solid #F0F0F0;

  .resize-box-demo1 {
    width: 200px;
    background: #F0F0F0;
  }
}
</style>

```vue
<template>
  <div class="container1">
    <resize-box class="resize-box-demo1" :move="{ r: true }"></resize-box>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.container1 {
  height: 400px;
  display: flex;
  border: 3px solid #F0F0F0;

  .resize-box-demo1 {
    width: 200px;
    background: #F0F0F0;
  }
}
</style>
```

## 最大宽度

ResizeBox 可以设置宽度（高度）缩放的最大值（最小值），还是以两列布局为例：

<template>
  <div class="container2">
    <resize-box class="resize-box-demo2" :move="{ r: true }" :max="{ width: 300 }" :min="{ width: 100 }"></resize-box>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.container2 {
  height: 400px;
  display: flex;
  border: 3px solid #F0F0F0;

  .resize-box-demo2 {
    width: 200px;
    background: #F0F0F0;
  }
}
</style>

```vue
<template>
  <div class="container2">
    <resize-box class="resize-box-demo2" :move="{ r: true }" :max="{ width: 300 }" :min="{ width: 100 }"></resize-box>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.container2 {
  height: 400px;
  display: flex;
  border: 3px solid #F0F0F0;

  .resize-box-demo2 {
    width: 200px;
    background: #F0F0F0;
  }
}
</style>
```

## 有效方向

支持上、下、左、右、左上、右上、左下和右下八个方向进行拖动缩放，可以通过move属性限制拖动的有效方向。

<template>
  <resize-box class="resize-box-demo3" :move="{ r: true, b: true, br: true }" :max="{ width: 300, height: 300 }" :min="{ width: 100, height: 100 }"></resize-box>
</template>

<script>
export default {};
</script>

<style lang="scss">
.resize-box-demo3 {
  width: 200px;
  height: 200px;
  background: #F0F0F0;
}
</style>

```vue
<template>
  <resize-box class="resize-box-demo3" :move="{ r: true, b: true, br: true }" :max="{ width: 300, height: 300 }" :min="{ width: 100, height: 100 }"></resize-box>
</template>

<script>
export default {};
</script>

<style lang="scss">
.resize-box-demo3 {
  width: 200px;
  height: 200px;
  background: #F0F0F0;
}
</style>
```

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 示例 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| max  | 可以拖动的最大宽高 | object | - | {} | { width: 400, height: 400 } |
| min  | 可以拖动的最小宽高 | object | - | {} | { width: 100, height: 100 } |
| move  | 可以拖动的方向 | object | - | { t: true, l: true, r: true, b: true, tl: true, tr: true, bl: true, br: true } | { r: true, b: true, br: true } |
| speed  | 移动速度 | number | - | 1 | - |

## Slots

| name | 说明 |
| ---- | ---- |
| default | ResizeBox容器内的内容 |
