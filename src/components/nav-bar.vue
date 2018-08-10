<template>
  <nav class="nav" :class="isCollapse?'hideBar':'showBar'">
    <div class="nav-content cur-flex cur-align-center cur-justify-between">
      <div class="nav-left" @click="toggleBar">
        <i class="icon iconfont icon-daohang"></i>
      </div>
      <ul class="nav-right clearfix">
        <!-- <li @click="$router.push('/notification')">
          <i class="icon icon-message"></i>
          <el-badge class="mark" :value="unReadCount" />
        </li> -->
        <li v-if="$store.state.me.user" class="pull-left">
          <i class="icon iconfont icon-yonghu"></i>
          <span class="nav__user_name">admin</span>
        </li>
        <li class="pull-left" @click="logout()" title="退出登录">
          <i class="icon iconfont icon-tuichu"></i>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  data () {
    return {
      visible: false,
      loading: false
    }
  },
  computed: {
    isCollapse () {
      return this.$store.state.toggleBar
    }
    // ...mapState({
    //   userName: state => state.me.user.userName
    // })
  },
  methods: {
    toggleBar () {
      this.$store.commit('TOGGLE_BAR')
    },
    async logout () {
      this.$confirm('确认要退出登录吗', { type: 'warning' }).then(() => {
        this.$store.dispatch('delAllViews')
        this.$store.dispatch('loginOut')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  margin-left: $sidebar-width;
  height: $navbar-height;
  z-index: 1000;
  background-color: #fff;
  padding: 0 20px;
  box-sizing: border-box;
  &-content {
    height: 100%;
  }
  &-left {
    padding: 10px;
    cursor: pointer;
  }
  &-right {
    height: $navbar-height;
    padding: 16px;
    ul {
      display: flex;
    }

    li {
      font-size: 16px;
      line-height: 40px;
      cursor: pointer;
    }

    li:last-child {
      padding: 0 0 0 30px;
      color: $danger;
    }

    li:hover {
      opacity: 0.8;
    }
  }
}
.nav.hideBar {
  margin-left: 60px !important;
  transition: margin 0.5s;
}
.nav.showBar {
  margin-left: $sidebar-width !important;
  transition: margin 0.5s;
}
</style>
