<template>
  <div class="aside" :class="isCollapse?'hideBar':'showBar'">
    <div class="logo">
    </div>
    <el-menu :default-active="activeMenu" unique-opened :collapse="isCollapse" @select="selectMenu" @open="handleOpen" @close="handleClose">
      <el-menu-item index="/dashboard/index" router>
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="/syetem-settings">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>系统设置</span>
        </template>
        <el-menu-item index="/user-management/index">用户管理</el-menu-item>
        <el-menu-item index="/role-management/index">角色管理</el-menu-item>
        <el-menu-item index="/function-management/index">功能管理</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
// import Routes from '@/router'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      existRoutes: []
      // activeMenu: '/dashboard'
    }
  },
  computed: {
    activeMenu () {
      return this.$route.path
    },
    isCollapse () {
      return this.$store.state.toggleBar
    },
    ...mapState({
      menus: state => state.me.menus
    })
  },
  created () {
    // this.existRoutes = Routes.options.routes
  },
  methods: {
    selectMenu (index, path) {
      this.$router.push(index)
    },
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss">
.el-menu {
  border-right: none;
}
.aside {
  position: fixed;
  top: 0;
  left: 0;
  width: $sidebar-width;
  padding-bottom: 100px;
  background-color: #4d5e70;
  height: 100%;
  z-index: 100;
  overflow-y: auto;
  transition: width 0.5s;
  // -moz-transition: width 1s; /* Firefox 4 */
  // -webkit-transition: width 1s; /* Safari 和 Chrome */
  // -o-transition: width 1s; /* Opera */
  .logo {
    height: $navbar-height;
    text-align: center;
    background-color: $primary;
    img {
      width: 100px;
      height: 32px;
      margin-top: $navbar-height/2;
      transform: translate(0, -50%);
    }
  }
  .el-submenu {
    background-color: #4d5e70;
  }
  .el-submenu {
    background-color: #4d5e70;
  }
  .el-submenu .el-submenu__title {
    color: #8a9597;
  }
  .el-submenu .el-submenu__title:hover {
    background-color: #4d5e70;
  }
  .el-menu {
    // padding-bottom: 100px;
    // background-color: #4d5e70;
  }
  .el-menu-item {
    background-color: #4d5e70;
    color: #8a9597;
    &.is-active {
      color: #fff;
    }
  }
  .el-menu-item:focus,
  .el-menu-item:hover,
  .el-submenu__title:hover {
    background-color: #4d5e70;
    color: #fff;
    span,
    i {
      color: #fff;
    }
  }

  &::-webkit-scrollbar {
    width: 0;
  }
}
.aside.hideBar {
  width: 60px !important;
  .el-menu-item.is-active {
    border: 0;
  }
}
.aside.showBar {
  width: $sidebar-width !important;
  .el-menu-item.is-active {
    width: $sidebar-width;
    border-right: 4px solid $primary;
    transition: border 0.5s;
  }
}
</style>
