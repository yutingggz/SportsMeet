<template>
  <view class="container" :style="{ backgroundImage: 'url(' + bgImage + ')' }">
	  
    <view class="form-container">
      <uni-card>
        <view class="header">
          <text class="title">Register</text>
        </view>
		
        <uni-forms :model="registerForm" :rules="rules">
          <uni-easyinput label="Username" v-model="registerForm.username" placeholder="Enter G number here"></uni-easyinput>
          <uni-easyinput label="Password" v-model="registerForm.password" type="password" placeholder="Enter password here"></uni-easyinput>
		  <uni-easyinput label="Nickname" v-model="registerForm.nickname" type="" placeholder="Enter nickname here"></uni-easyinput>
          <button class="register-button" type="primary" @click="register">Register</button>
        </uni-forms>
        <text class="register-link" @click="goToLogin">Have an account? Login here</text>
      </uni-card>
    </view>
  </view>
</template>




<script>

export default {
  data() {
    return {
      bgImage: '/static/bg.jpg',
      registerForm: {
        username: '',
        password: '',
		nickname: ''
      },
      rules: {
        username: {
          required: true,
          message: 'Username cannot be empty'
        },
        password: {
          required: true,
          message: 'Password cannot be empty'
        },
		nickname: {
		  required: true,
		  message: 'Nickname cannot be empty'
		}
      }
    };
  },
  methods: {
    async register() {
     
      try {
        const result = await uniCloud.callFunction({
          name: 'registerUser',
          data: this.registerForm
        });

        if (result.result.success) {
          uni.showToast({
            title: '注册成功',
            icon: 'success'
          });
          uni.navigateTo({
            url: '/pages/login/login'
          });
        } else {
          uni.showToast({
            title: result.result.message,
            icon: 'error'
          });
        }
      } catch (error) {
        uni.showToast({
          title: '注册失败',
          icon: 'error'
        });
      }
    },
    goToLogin() {
      uni.navigateTo({
        url: '/pages/login/login'
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
.register-button {
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
