<template>
  <view class="container" :style="{ backgroundImage: 'url(' + bgImage + ')' }">
	  
    <view class="form-container">
      <uni-card>
        <view class="header">
          <text class="title">Login</text>
        </view>
		
        <uni-forms :model="loginForm" :rules="rules">
          <uni-easyinput label="Username" v-model="loginForm.username" placeholder="Enter username"></uni-easyinput>
          <uni-easyinput label="Password" v-model="loginForm.password" type="password" placeholder="Enter password"></uni-easyinput>
          <button class="login-button" type="primary" @click="login">Login</button>
        </uni-forms>
        <text class="register-link" @click="goToRegister">Don't have an account? Sign up</text>
      </uni-card>
    </view>
  </view>
</template>


<script>

export default {
  data() {
    return {
      bgImage: '/static/bg.jpg',
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: {
          required: true,
          message: '用户名不能为空'
        },
        password: {
          required: true,
          message: '密码不能为空'
        }
      }
    };
  },
  methods: {
    async login() {
      try {
        const result = await uniCloud.callFunction({
          name: 'login',
          data: this.loginForm
        });

        if (result.result.success) {
          uni.showToast({
            title: '登录成功',
            icon: 'success'
          });
          // 将用户信息存储在本地或跳转到主页
          uni.setStorageSync('user', result.result.userData);
          uni.navigateTo({
            url: '/pages/user-profile/user-profile'
          });
        } else {
          uni.showToast({
            title: result.result.message,
            icon: 'none'
          });
        }
      } catch (error) {
        uni.showToast({
          title: '登录失败',
          icon: 'none'
        });
      }
    },
    goToRegister() {
      uni.navigateTo({
        url: '/pages/register/register'
      });
    }
  }
};
</script>	



<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-size: cover;
  background-position: center;
}

.form-container {
  width: 80%;
  max-width: 400px;
}
.header {
  text-align: center;
  margin-bottom: 20px;
}
.title {
  font-size: 24px;
  font-weight: bold;
}
.login-button {
  width: 100%;
  margin-top: 20px;
}
.register-link {
  display: block;
  text-align: center;
  margin-top: 10px;
  color: #007aff;
  cursor: pointer;
}
</style>