<template>
  <!-- container -->
  <div class="vue-drawer" :class="show ? 'active' : ''">
    <div :style="{'transform': 'translate3d('+translateX+'px,0,0)'}" class="main">
      <div class="mask" :class="show ? 'active' : ''" @click="hideMask"></div>
    </div>
    <div ref="drawer" class="drawer" :class="[pos!=='left' ? 'drawer-right' : 'drawer-left', show ? 'active' : '']">
      <div class="vue-drawer-header cur-flex cur-justify-between">
        <h2>{{title}}</h2>
        <i @click="hideMask" class="el-dialog__close el-icon el-icon-close" style="padding: 4px 10px;cursor: pointer"></i>
      </div>
      <div class="vue-drawer-content">
        <slot name="drawer"></slot>
      </div>
      <div class="vue-drawer-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<script scoped>
import { addClass, removeClass } from '@/utils/dom'
import getScrollBarWidth from '@/utils/scrollbar-width'
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '提示'
    },
    pos: {
      type: String,
      default: 'right'
    },
    tran: {
      type: String,
      default: 'overlay'
    }
  },
  watch: {
    show (val) {
      if (val) {
        document.body.style.paddingRight = getScrollBarWidth() + 'px'
        addClass(document.body, 'no-scroll-y')
      } else {
        document.body.style.paddingRight = 0 + 'px'
        removeClass(document.body, 'no-scroll-y')
      }
    }
  },
  data () {
    return {
      drawerWidth: 0,
      translateX: 0
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.drawerWidth = this.$refs.drawer.clientWidth
    })
  },
  methods: {
    hideMask () {
      // this.$emit('update:show', false)
      this.$emit('on-hide')
    }
  }
}
</script>
<style lang="scss">
.vue-drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 101;
  visibility: hidden;
  transition: all 0.5s;
  &-header {
    font-size: 16px;
    padding: 15px;
    border-bottom: 1px solid $gray-200;
  }
  &-content, &-footer {
    padding: 15px;
  }
  .main {
    /*max-width: 600px;*/
    height: 100%;
    position: absolute;
    visibility: hidden;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: transform ease-in-out 0.38s, visibility 0.38s;
  }
  .main > .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    visibility: hidden;
    opacity: 0;
    transition: opacity ease-in-out 0.38s, visibility ease-in-out 0.38s;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .main > .active {
    visibility: visible;
    opacity: 1;
  }
  .drawer {
    width: 750px;
    background-color: #fff;
    position: absolute;
    top: 0;
    height: 100%;
    overflow: auto;
    pointer-events: none;
    visibility: hidden;
    transition: transform ease-in-out 0.38s, visibility 0.38s;
    will-change: none;
  }
  .drawer-left {
    left: 0;
    transform: translateX(-102%);
  }
  .drawer-right {
    right: 0;
    transform: translateX(102%);
  }
  .active {
    pointer-events: inherit;
    visibility: visible;
    transform: translateX(0%);
  }
}
.vue-drawer.active {
  visibility: visible;
}

/* .vue-drawer.show {
  width: 100%;
  display: block;
}
.vue-drawer.hide {
  width: 0;
  display: none;
} */
</style>
