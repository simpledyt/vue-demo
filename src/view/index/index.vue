<template>
  <div class="index">
    <div class="index-logo">
      <!-- <img src="static/img/index-logo.png" width="139" height="41" alt=""> -->
    </div>
    <div class="index-main">
      <!-- <img class="index-bg" src="static/img/index-img.png" alt=""> -->
      <div class="index-form">
        <h1>管理员登陆</h1>
        <el-form @submit.native.prevent="submitForm()"  ref="loginForm" :rules="rules" :model="form" label-width="10px">
          <el-form-item class="index-form-item" prop="userAccount">
            <i class="icon iconfont icon-shouji"></i>
            <el-input v-model="form.userAccount" placeholder="请输入登陆账号"></el-input>
          </el-form-item>
          <el-form-item class="index-form-item" prop="password">
            <i class="icon iconfont icon-mima1"></i>
            <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item class="index-form-item" prop="code">
            <i class="icon iconfont icon-Verification-Code"></i>
            <el-input v-model="form.code" placeholder="请输入验证码"></el-input>
            <!-- <img @click="getLoginCode()" class="index-code-img" :src="form.codeimg" alt=""> -->
          </el-form-item>
          <el-form-item>
            <el-button class="index-login-btn" type="warning" native-type="submit">登陆</el-button>
          </el-form-item>
        </el-form>
      </div>

    </div>
  </div>
</template>
<script>
// import * as api from '../../service/api'
import uuid from 'uuid'
// import SHA256 from 'crypto-js/sha256'
export default {
  titile: '登录',
  data () {
    return {
      loading: false,
      rules: {
        userAccount: [{ required: true, message: '请输入账号', trigger: ['blur', 'change'] }],
        password: [{ required: true, message: '请输入密码', trigger: ['blur', 'change'] }],
        code: [{ required: true, message: '请输入验证码', trigger: ['blur', 'change'] }]
      },
      form: {
        uuid: uuid(),
        userAccount: '',
        password: '',
        code: null,
        siteId: 0,
        codeimg: null
      }
    }
  },
  methods: {
    async submitForm () {
      try {
        await this.$refs.loginForm.validate()
      } catch (e) {
        console.log(e)
      }
      this.$router.push('/dashboard/index')
    },
    resetForm () {
      this.$refs.loginForm.resetFields()
    }
  }
}
</script>
<style lang="scss">
.index {
  background-color: #ececec;
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
  &-logo {
    margin: 20px 40px 0;
  }
  &-main {
    position: relative;
    min-width: 1164px;
    // overflow: hidden;
  }
  &-bg {
    display: block;
    width: 1164px;
    margin: 0 auto;
  }
  &-form {
    position: absolute;
    margin: 0 auto;
    top: 80px;
    width: 250px;
    left: 50%;
    transform: translate(-50%, 50%);
    h1 {
      color: $yellow;
      text-align: center;
      // font-weight: bold;
      font-size: 20px;
      margin-bottom: 10px;
    }
  }
  &-login-btn {
    width: 100%;
    letter-spacing: 4px;
    font-size: 16px;
  }
  &-form-item {
    position: relative;
    i {
      position: absolute;
      left: -30px;
      color: $yellow;
      font-size: 22px;
    }
  }
  &-code-img {
    width: 76px;
    height: 36px;
    position: absolute;
    right: 0px;
    top: 0;
    border-radius: 4px;
  }
}
</style>
