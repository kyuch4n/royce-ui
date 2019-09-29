<template>
  <div class="resize-box">
    <div v-if="move.t" class="line line-t" data-type="t" @mousedown.prevent="onMousedown" />
    <div v-if="move.l" class="line line-l" data-type="l" @mousedown.prevent="onMousedown" />
    <div v-if="move.r" class="line line-r" data-type="r" @mousedown.prevent="onMousedown" />
    <div v-if="move.b" class="line line-b" data-type="b" @mousedown.prevent="onMousedown" />
    <div v-if="move.tl" class="angle angle-tl" data-type="tl" @mousedown.prevent="onMousedown" />
    <div v-if="move.tr" class="angle angle-tr" data-type="tr" @mousedown.prevent="onMousedown" />
    <div v-if="move.bl" class="angle angle-bl" data-type="bl" @mousedown.prevent="onMousedown" />
    <div v-if="move.br" class="angle angle-br" data-type="br" @mousedown.prevent="onMousedown" />
    <slot />
  </div>  
</template>

<script>
"use strict";

export default {
  name: "ResizeBox",

  props: {
    max: {
      type: Object,
      default: () => ({ width: 0, height: 0 }),
    },
    min: {
      type: Object,
      default: () => ({ width: 0, height: 0 }),
    },
    move: {
      type: Object,
      default: () => ({ t: true, l: true, r: true, b: true, tl: true, tr: true, bl: true, br: true }),
    },
    speed: {
      type: Number,
      default: 1,
    },
  },

  created() {
    document.body.addEventListener("mouseup", this.onMouseup);
  },

  destroyed() {
    document.body.removeEventListener("mouseup", this.onMouseup);
  },

  methods: {
    getStyle(element) {
      return element.currentStyle
        ? element.currentStyle
        : getComputedStyle(element, false);
    },

    onMouseup(event) {
      document.body.style.cursor = "default";
      document.body.removeEventListener("mousemove", this.onMousemove);
    },

    onMousedown(event) {
      this.dataType = event.target.getAttribute("data-type");
      this.event = event;

      const { cursor } = this.getStyle(event.target);
      document.body.style.cursor = cursor;
      document.body.addEventListener("mousemove", this.onMousemove);
    },

    onMousemove(event) {
      const { width, height } = this.getStyle(this.$el);
      this[this.dataType]({ event, width: parseInt(width), height: parseInt(height) });
      this.event = event;
    },

    tl({ event, width, height }) {
      this.t({ event, height });
      this.l({ event, width });
    },

    tr({ event, width, height }) {
      this.t({ event, height });
      this.r({ event, width });
    },

    bl({ event, width, height }) {
      this.b({ event, height });
      this.l({ event, width });
    },

    br({ event, width, height }) {
      this.b({ event, height });
      this.r({ event, width });
    },

    t({ event, height }) {
      if (event.y > this.event.y) {
        this.$el.style.height = this.min.height
          ? `${Math.max(this.min.height, height - (event.y - this.event.y) * this.speed)}px`
          : `${height - (event.y - this.event.y) * this.speed}px`;
      } else {
        this.$el.style.height = this.max.height
          ? `${Math.min(this.max.height, height + (this.event.y - event.y) * this.speed)}px`
          : `${height + (this.event.y - event.y) * this.speed}px`;
      }
    },

    l({ event, width }) {
      if (event.x > this.event.x) {
        this.$el.style.width = this.min.width
          ? `${Math.max(this.min.width, width - (event.x - this.event.x) * this.speed)}px`
          : `${width - (event.x - this.event.x) * this.speed}px`;
      } else {
        this.$el.style.width = this.max.width
          ? `${Math.min(this.max.width, width + (this.event.x - event.x) * this.speed)}px`
          : `${width + (this.event.x - event.x) * this.speed}px`;
      }
    },

    r({ event, width }) {
      if (event.x > this.event.x) {
        this.$el.style.width = this.max.width
          ? `${Math.min(this.max.width, width + (event.x - this.event.x) * this.speed)}px`
          : `${width + (event.x - this.event.x) * this.speed}px`;
      } else {
        this.$el.style.width = this.min.width
          ? `${Math.max(this.min.width, width - (this.event.x - event.x) * this.speed)}px`
          : `${width - (this.event.x - event.x) * this.speed}px`;
      }
    },

    b({ event, height }) {
      if (event.y > this.event.y) {
        this.$el.style.height = this.max.height
          ? `${Math.min(this.max.height, height + (event.y - this.event.y) * this.speed)}px`
          : `${height + (event.y - this.event.y) * this.speed}px`;
      } else {
        this.$el.style.height = this.min.height
          ? `${Math.max(this.min.height, height - (this.event.y - event.y) * this.speed)}px`
          : `${height - (this.event.y - event.y) * this.speed}px`;
      }
    },
  },
};
</script>

<style lang="scss">
.resize-box {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.line,
.angle {
  position: absolute;
  z-index: 999;
  margin: auto;
}

.line:hover,
.angle:hover {
  background: #1aa7cb;
}

.line-t {
  top: -3px;
  left: 0;
  right: 0;
  width: 100%;
  height: 3px;
  background: #edf0f7;
  cursor: row-resize;
}

.line-l {
  top: 0;
  left: -3px;
  bottom: 0;
  width: 3px;
  height: 100%;
  background: #edf0f7;
  cursor: col-resize;
}

.line-r {
  top: 0;
  right: -3px;
  bottom: 0;
  width: 3px;
  height: 100%;
  background: #edf0f7;
  cursor: col-resize;
}

.line-b {
  left: 0;
  right: 0;
  bottom: -3px;
  width: 100%;
  height: 3px;
  background: #edf0f7;
  cursor: row-resize;
}

.angle {
  width: 3px;
  height: 3px;
}

.angle-tl {
  top: -3px;
  left: -3px;
  background: #edf0f7;
  cursor: nwse-resize;
}

.angle-tr {
  top: -3px;
  right: -3px;
  background: #edf0f7;
  cursor: nesw-resize;
}

.angle-bl {
  bottom: -3px;
  left: -3px;
  background: #edf0f7;
  cursor: nesw-resize;
}

.angle-br {
  bottom: -3px;
  right: -3px;
  background: #edf0f7;
  cursor: nwse-resize;
}
</style>