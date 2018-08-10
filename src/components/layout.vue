<template>
  <div>
    <nav-bar/>
    <side-bar/>
    <tags-view></tags-view>
    <div class="container" :class="isCollapse?'hideBar':'showBar'">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from './nav-bar'
import SideBar from './side-bar'
import TagsView from './tags-view'
// import throttle from 'throttle-debounce/throttle'

export default {
  components: {
    NavBar,
    SideBar,
    TagsView
  },
  data () {
    return {
      viewportHeight: 600
    }
  },
  computed: {
    styles () {
      return {
        minHeight: this.viewportHeight - 72 + 'px'
      }
    },
    isCollapse () {
      return this.$store.state.toggleBar
    }
  },
  created () {
    window.addEventListener('resize', this.getViewportHeight(), false)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.getViewportHeight())
  },
  methods: {
    getViewportHeight () {
      this.viewportHeight = document.documentElement.clientHeight || document.body.clientHeight
      // return throttle(100, e => {
      //   this.viewportHeight = document.documentElement.clientHeight || document.body.clientHeight
      // })
    }
  }
}
</script>

<style lang="scss">
.container {
  position: relative;
  margin-left: $sidebar-width;
  // margin-top: $navbar-height;
  padding: 20px 20px 50px;
  // min-width: 1200px - 240px;
  width: auto;
  // background: #ebeef5;
  min-height: calc(100vh - 72px);
  transition: margin-left .5s;
}

.container.hideBar{
  margin-left: 60px !important;
}
.container.showBar{
  margin-left: $sidebar-width !important;
}
</style>
