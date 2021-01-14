<!--
 * 登录
-->

<template>
  <div class="page-account">
    <div class="container">
      <div class="index_from page-account-container">
        <div class="labelPic">
          <img
            src="http://mer.crmeb.net/uploads/def/20200817/892ffe3a95d7a5d3466a4c5af7472408.jpg"
          />
        </div>
        <div class="page-account-top ">
          <div class="page-account-top-logo">
            <img src="../../assets/images/logo.png" alt="logo" />
            <img
              class="laber-img"
              src="../../assets/images/laber.png"
              alt="平台端"
            />
          </div>
          <div class="page-accout-from">
            <el-form
              ref="loginForm"
              :model="loginForm"
              :rules="loginRules"
              class="login-form"
              autocomplete="on"
              label-position="left"
            >
              <el-form-item prop="account">
                <el-input
                  ref="account"
                  v-model="loginForm.account"
                  prefix-icon="el-icon-user"
                  placeholder="用户名"
                  name="username"
                  type="text"
                  tabindex="1"
                  autocomplete="on"
                />
              </el-form-item>

              <el-form-item prop="password">
                <el-input
                  :key="passwordType"
                  ref="password"
                  v-model="loginForm.password"
                  prefix-icon="el-icon-lock"
                  :type="passwordType"
                  placeholder="密码"
                  name="password"
                  tabindex="2"
                  auto-complete="on"
                />
              </el-form-item>

              <el-form-item prop="code">
                <div class="captcha">
                  <el-input
                    ref="username"
                    v-model="loginForm.code"
                    style="width: 168px;"
                    prefix-icon="el-icon-message"
                    placeholder="验证码"
                    name="username"
                    type="text"
                    tabindex="3"
                    autocomplete="on"
                  />
                  <img
                    class="imgs"
                    src="../../assets/images/code.jpeg"
                    alt="验证码"
                  />
                </div>
              </el-form-item>
              <el-button
                :loading="loading"
                type="primary"
                style="width:100%;margin-bottom:30px;"
                 @click.native.prevent="handleLogin"
                >登录
              </el-button>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入密码"));
      } else {
        if (value.length < 6) {
          callback(new Error("请输入不少于6位数的密码"));
        } else {
          callback();
        }
      }
    };
    return {
      loginLogo: "",
      loginForm: {
        account: "",
        password: "",
        key: "",
        code: "",
      },
      loginRules: {
        account: [
          { required: true, validator: validateUsername, trigger: "blur" },
        ],
        password: [
          { required: true, validator: validatePassword, trigger: "blur" },
        ],
        code: [
          { required: true, message: "请输入正确的验证码", trigger: "blur" },
        ],
      },
      passwordType: "password",
      capsTooltip: false,
      loading: false,
    };
  },
  methods:{
      handleLogin() {
      this.$refs['loginForm'].validate(valid => {
        if (valid) {
          console.log('登录成功')
        } else {
          return false
        }
      })
    },
  }
};
</script>

<style lang="less" scoped>
.page-account {
  width: 100%;
  height: 100%;
  background: url("../../assets/images/bg.jpg");
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .page-account-container {
    width: 880px;
    display: flex;
    justify-content: space-between;
    .labelPic {
      flex: 1;
    }

    .page-account-top {
      position: relative;
      width: 380px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      background-color: #fff;
      border-radius: 0px 6px 6px 0px;
      padding: 0px 40px 32px 40px;
      box-sizing: border-box;
    }
    .page-account-top-logo {
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .laber-img {
      display: flex;
      justify-content: end;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  
  .captcha {
    display: flex;
    justify-content: space-between;
    .el-input {
      flex: 1;
    }
    .imgs {
      width: 40%;
    }
  }
}
</style>
