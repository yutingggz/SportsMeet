<template>
  <view class="container" :style="{ backgroundImage: 'url(' + bgImage + ')' }">
	  
    <view class="form-container">
      <uni-card>
        <view class="header">
          <text class="title">Add Activity</text>
        </view>
		
        <uni-forms :model="loginForm" :rules="rules">
          <uni-easyinput label="ActivityName" v-model="activityForm.name" placeholder="Enter activity name"></uni-easyinput>
          <uni-easyinput label="Description" v-model="activityForm.description" placeholder="Enter description"></uni-easyinput>
		  <uni-easyinput label="Score" v-model="activityForm.score" placeholder="Enter score"></uni-easyinput>
          <button class="add-button" type="primary" @click="addActivity">Add Activity</button>
        </uni-forms>
      </uni-card>
    </view>
  </view>
</template>


<script>

export default {
  data() {
    return {
      bgImage: '/static/bg.jpg',
      activityForm: {
        name: '',
        description: '',
		score: 0
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
    async addActivity() {
      try {
        const result = await uniCloud.callFunction({
          name: 'addActivity',
          data: this.activityForm
        });

        if (result.result.success) {
          uni.showToast({
            title: 'Activity successfully added',
            icon: 'success'
          });
          // 将用户信息存储在本地或跳转到主页
          uni.setStorageSync('activity', result.result.activityData);
          
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
.add-button {
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