<template>
  <div>
    <span :class="['iconfont',icons]" style="font-size: 18px; margin-right: 5px;" v-if="icons"></span>
    <el-select v-model="icons" clearable @change="change" placeholder="请选择图标" style="width: 120px;">
      <el-option v-for="item in 15" :key="item" :label="'icon-' + item" :value="'icon-' + item">
        <div class="icons">
          <span :class="['iconfont','icon-' + item]"></span>
          <span>{{ 'icon-' + item}}</span>
        </div>
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'iconlist',
  data () {
    return {
      icons: ''
    }
  },
  props: {
    value: {
      type: String
    }
  },
  created () {
    this.icons = this.value
  },
  methods: {
    change () {
      this.$emit('input', this.icons)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.icons {
  display: flex;
  align-items: center;
  .iconfont {
    font-size: 18px;
    margin-right: 5px;
  }
}
</style>
