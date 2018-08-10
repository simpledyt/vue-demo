<template>
  <div class="upload-container">
    <div class="image-preview" v-for="(item,index) in imageUrl" :key="index">
      <div class="image-preview-wrapper">
        <img :src="item">
        <div class="image-preview-action">
          <i @click="rmImage(index)" class="el-icon-delete"></i>
        </div>
      </div>
    </div>
    <el-upload v-loading="pload" :headers="headers" v-if="imageUrl.length < max" class="image-uploader" :data="dataObj" drag :multiple="false" :show-file-list="false" action="/api2/file/imgupload" :on-success="onScucess" :on-error="onError">
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
  name: 'multipleImageUpload',
  props: {
    value: String,
    max: Number
  },
  computed: {
    imageUrl () {
      return this.value ? this.value.split(',') : []
    },
    headers () {
      return {
        accessToken: localStorage.getItem('token')
      }
    }
  },
  data () {
    return {
      dataObj: {},
      url: this.value ? this.value.split(',') : [],
      pload: false
    }
  },
  methods: {
    rmImage (index) {
      let data = JSON.parse(JSON.stringify(this.imageUrl))
      data.splice(index, 1)
      this.url.splice(index, 1)
      this.emitInput(data.join(','))
    },
    emitInput (val) {
      this.$emit('input', val)
    },
    onScucess (c, file, fileList) {
      this.url.push(c)
      this.emitInput(this.imageUrl.concat(c).join(','))
      this.pload = false
      this.$notify({
        title: '上传成功',
        type: 'success',
        duration: 3000
      })
    },
    onError (c) {
      this.pload = false
      this.$notify({
        title: JSON.parse(c.message).message,
        type: 'error',
        duration: 3000
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.upload-container {
  display: flex;
  .image-uploader {
    height: 175px;
    max-width: 300px;
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
