<template>
  <div class="ueditor">
    <script :id="id" type="text/plain"></script>
  </div>
</template>
<style scoped>
.ueditor {
  line-height: 1;
}
</style>
<script>
import '../../../static/ueditor/ueditor.config.js'
import '../../../static/ueditor/ueditor.all.js'
import '../../../static/ueditor/lang/zh-cn/zh-cn.js'
import '../../../static/ueditor/ueditor.parse.min.js'
export default {
  name: 'UE',
  data () {
    return {
      editor: null,
      token: ''
    }
  },
  props: {
    value: String,
    id: {
      type: String,
      default: 'editor'
    },
    config: {
      type: Object
    }
  },
  created () {
    this.token = localStorage.getItem('token')
  },
  mounted () {
    // api2/file/imgupload
    if (window.UE && this.id) {
      this.$nextTick(() => {
        const _this = this
        _this.editor = window.UE.getEditor(this.id, this.JSONo(this.config, {
          serverUrl: '/api2/upload/upload?accessToken=' + this.token
        }))
        _this.editor.addListener('ready', () => {
          this.editor.setContent(this.value || '')
        })
        _this.editor.addListener('contentChange', () => {
          this.$emit('input', _this.editor.getContent())
        })
      })
    }
  },
  destroyed () {
    if (this.editor) {
      this.editor.destroy()
    }
  }
}
</script>
