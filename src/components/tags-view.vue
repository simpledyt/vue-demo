<template>
  <div class="tags-view-container" :class="isCollapse?'hideBar':'showBar'">
    <div class="scroll-container tags-view-wrapper">
      <div class="scroll-wrapper">
        <router-link ref='tag' class="tags-view-item" :class="isActive(tag)?'active':''" v-for="tag in Array.from(visitedViews)" :dataCurrent="tag.current" :dataName="tag.name" :to="tag.metaLink?tag.metaLink:tag.path" :key="tag.path" @contextmenu.prevent.native="openMenu(tag,$event)">
          {{tag.title}}
          <span class='el-icon-close' @click.prevent.stop='closeSelectedTag(tag)'></span>
        </router-link>
      </div>
    </div>
    <ul class='contextmenu' v-show="visible" :style="{left:left+'px',top:top+'px'}">
      <li @click="closeSelectedTag(selectedTag)">移除</li>
      <li @click="closeOthersTags">移除其它</li>
      <li @click="closeAllTags">移除所有</li>
    </ul>
  </div>
</template>

<script>
// import ScrollPane from '@/components/ScrollPane'

export default {
  // components: { ScrollPane },
  data () {
    return {
      visible: false,
      top: 0,
      left: 0,
      selectedTag: {}
    }
  },
  computed: {
    isCollapse () {
      return this.$store.state.toggleBar
    },
    visitedViews () {
      return this.$store.state.tagsView.visitedViews
    }
  },
  watch: {
    $route () {
      this.addViewTags()
      this.moveToCurrentTag()
    },
    visible (value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    }
  },
  mounted () {
    this.addViewTags()
  },
  methods: {
    generateRoute () {
      if (this.$route.name) {
        return this.$route
      }
      return false
    },
    isActive (route) {
      if (this.$route.path.indexOf(route.path) > -1) {
        return true
      }
      return route.path === this.$route.path || route.name === this.$route.name
    },
    addViewTags () {
      const route = this.generateRoute()
      if (!route) {
        return false
      }

      this.$store.dispatch('addVisitedViews', route)
    },
    moveToCurrentTag () {
      const tags = this.$refs.tag
      this.$nextTick(() => {
        for (const tag of tags) {
          if (tag.to !== this.$route.path) {
            if (tag.$attrs.dataCurrent) {
              this.$store.dispatch('delVisitedViews', { path: tag.to, name: tag.$attrs.dataname })
            }
          }
          // if (tag.to === this.$route.path) {
          //   // this.$refs.scrollPane.moveToTarget(tag.$el)
          //   break
          // }
        }
      })
    },
    closeSelectedTag (view) {
      this.$store.dispatch('delVisitedViews', view).then((views) => {
        if (this.isActive(view)) {
          const latestView = views.slice(-1)[0]
          if (latestView) {
            this.$router.push(latestView.path)
          } else {
            this.$router.push('/')
          }
        }
      })
    },
    closeOthersTags () {
      this.$router.push(this.selectedTag.path)
      this.$store.dispatch('delOthersViews', this.selectedTag).then(() => {
        this.moveToCurrentTag()
      })
    },
    closeAllTags () {
      this.$store.dispatch('delAllViews')
      this.$router.push('/')
    },
    openMenu (tag, e) {
      this.visible = true
      this.selectedTag = tag
      this.left = e.clientX
      this.top = e.clientY
    },
    closeMenu () {
      this.visible = false
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.scroll-container {
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 100%;
  .scroll-wrapper {
    position: absolute;
  }
}
.tags-view-container {
  .tags-view-wrapper {
    background: #fff;
    height: 34px;
    border-bottom: 1px solid #d8dce5;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
    .tags-view-item {
      display: inline-block;
      position: relative;
      height: 26px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: #fff;
      padding: 0 8px;
      font-size: 12px;
      margin-left: 5px;
      margin-top: 4px;
      border-radius: 4px;
      &:first-of-type {
        margin-left: 15px;
      }
      &.active {
        background-color: $primary;
        color: #fff;
        border-color: $primary;
        &::before {
          content: "";
          background: #fff;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 2px;
        }
      }
    }
  }
  .contextmenu {
    margin: 0;
    background: #fff;
    z-index: 100;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      &:hover {
        background: #eee;
      }
    }
  }
}
.tags-view-container.hideBar {
  margin-left: 60px !important;
  transition: margin 0.5s;
}
.tags-view-container.showBar {
  margin-left: $sidebar-width !important;
  transition: margin 0.5s;
}
.tags-view-wrapper {
  .tags-view-item {
    .el-icon-close {
      width: 16px;
      height: 16px;
      vertical-align: 2px;
      border-radius: 50%;
      text-align: center;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform-origin: 100% 50%;
      &:before {
        transform: scale(0.6);
        display: inline-block;
        vertical-align: -3px;
      }
      &:hover {
        background-color: #b4bccc;
        color: #fff;
      }
    }
  }
}
</style>
