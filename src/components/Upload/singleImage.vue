<template>
  <div class="upload-container">
    <div class="image-preview" v-show="imageUrl">
      <div class="image-preview-wrapper">
        <img :src="imageUrl">
        <div class="image-preview-action">
          <i @click="rmImage" class="el-icon-delete"></i>
        </div>
      </div>
    </div>
    <el-upload v-if="!imageUrl" v-loading="pload" :headers="headers" class="image-uploader" :data="dataObj" drag :multiple="false" :show-file-list="false" action="/api2/file/imgupload" :on-success="handleScucess" :on-error="handleError">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或
        <em>点击上传</em>
      </div>
    </el-upload>
  </div>
</template>

<script>
// import { upload } from '@/utils/weApi'
export default {
  name: 'singleImageUpload',
  props: {
    value: String
  },
  computed: {
    imageUrl () {
      return this.value
    },
    headers () {
      return {
        accessToken: localStorage.getItem('token')
      }
    }
  },
  data () {
    return {
      tempUrl: '',
      dataObj: {},
      pload: false
    }
  },
  methods: {
    rmImage () {
      this.emitInput('')
    },
    emitInput (val) {
      this.$emit('input', val)
    },
    handleScucess (c) {
      this.emitInput(c)
      this.pload = false
      this.$notify({ title: '上传成功', type: 'success', duration: 3000 })
    },
    handleError (c) {
      this.pload = false
      this.$notify({ title: JSON.parse(c.message).message, type: 'error', duration: 3000 })
    },
    beforeUpload () {
      this.pload = true
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.upload-container {
  display: flex;
  .image-uploader {
    max-width: 300px;
    height: 175px;
    flex: 1;
  }
  .image-preview {
    height: 175px;
    width: 175px;
    position: relative;
    border: 1px dashed #d9d9d9;
    .image-preview-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      img {
        max-width: 100%;
        max-height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .image-preview-action {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      cursor: default;
      text-align: center;
      color: #fff;
      opacity: 0;
      font-size: 20px;
      background-color: rgba(0, 0, 0, 0.5);
      transition: opacity 0.3s;
      cursor: pointer;
      text-align: center;
      line-height: 200px;
      .el-icon-delete {
        font-size: 36px;
      }
    }
    &:hover {
      .image-preview-action {
        opacity: 1;
      }
    }
  }
}
</style>
