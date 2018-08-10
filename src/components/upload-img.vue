/*
 * @Author: dyt
 * @Date: 2018-07-17 11:39:01
 * @Last Modified by: dyt
 * @Last Modified time: 2018-07-27 13:53:50
 */
<template>
  <div class="uploadImg">
    <el-upload class="avatar-uploader" :action="action" :headers="headers" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>
<script>
import * as api from '@/service/api'
export default {
  props: {
    value: ''
  },
  computed: {
    imageUrl: {
      get () {
        return this.value
      },
      set (val) {
        console.log(val)
        this.$emit('input', val)
      }
    },
    action () {
      return api.uploadUrl
    },
    headers () {
      return {
        accessToken: localStorage.getItem('token')
      }
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = res
      console.log(res)
      // this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      // console.log(file)
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!file.type.includes('image/')) {
        return this.$message.error({
          title: '提示',
          content: '文件格式错误'
        })
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isLt2M
    }
  }
}
</script>
<style lang="scss">
.uploadImg {
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>
