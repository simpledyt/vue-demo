<template>
  <div class="agentRadio">
    <el-dialog title="选择保险经理" :visible.sync="show">
      <el-radio v-for="item in dataList" :key="item.managerId" v-model="curValue" :label="item.managerId" border>
        <span>{{item.managerName}}</span>(
        <span>{{item.phone}}</span>)</el-radio>
      <el-pagination v-if="total > pageSize" background :total="total" :page-size="pageSize" layout="prev, pager, next" style="margin-top: 10px;" :current-page.sync="pageIndex" @current-change="changePage">
      </el-pagination>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelEvent()">取 消</el-button>
        <el-button type="primary" @click="confirmEvent()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import * as api from '@/service/api'
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    curData: Object
  },
  data () {
    return {
      loading: false,
      keyword: '',
      curValue: '',
      dataList: [],
      pageSize: 10,
      pageIndex: 1,
      total: null
    }
  },
  watch: {
    value (val) {
      if (val) {
        this.getManagerList()
      }
    }
  },
  computed: {
    show: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input')
        return val
      }
    }
  },
  methods: {
    async getManagerList () {
      api.getManagerList({
        pageNum: this.pageIndex,
        pageSize: this.pageSize,
        keyword: this.keyword
      }).then(res => {
        this.dataList = res.data.list
        this.total = res.data.total
      }).catch(err => {
        console.log(err)
      })
    },
    changePage (page) {
      this.pageIndex = page
      this.getManagerList()
    },
    cancelEvent () {
      this.$emit('input')
    },
    confirmEvent () {
      let curItem = this.dataList.filter(item => item.managerId === this.curValue)
      this.$emit('input')
      this.$emit('confirm-event', curItem)
    },
    handleClose () {
      console.log(333)
    }
  }
}
</script>
<style lang="scss">
.agentRadio {
  .el-dialog {
    max-width: 600px;
  }
  .el-radio--medium.is-bordered{
    margin: 8px;
  }
}
</style>
