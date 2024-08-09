<template>
  <view class="container">
	  		
			
    <uni-card>
      <view class="header">
        <view class="info">
          <text class="nickname">Nickname: {{ user.nickname }}</text>
          <text class="score">Totalscore: {{ user.totalScore }}</text>
        </view>
      </view>
    </uni-card>

	<button v-if="isAdmin" @click="goToAddActivity" class="add-activity-button">管理活动</button>
    <uni-card>
      <view class="header">
        <text class="title">Activity records</text>
      </view>
      <uni-list>
        <uni-list-item v-for="record in activityRecords" :key="record._id" 
        			:title="record.activityName + '    '+  record.activityScore +'积分'"
        			:note=" record.data">
            </uni-list-item>
      </uni-list>
    </uni-card>
	
  </view>
</template>

<script>


export default {

  data() {
    return {
      user: {
        nickname: '',
        totalScore: 0,
        role: ''
      },
      activityRecords: [],
      isAdmin: false,
	  userId: ''
    };
  },
  async mounted() {
     const user = uni.getStorageSync('user');
     if (!user || !user._id) {
       uni.showToast({
         title: '用户ID获取失败',
         icon: 'none'
       });
       return;
     }
     this.userId = user._id; 
     await this.getUserProfileAndActivityRecords();
   },
   
  methods: {
	async getUserProfileAndActivityRecords() {
	      try {
	        const userId = this.userId;
	        const res = await uniCloud.callFunction({
	          name: 'getUserProfile', 
	          data: {
	            userId: userId
	          }
	        });
	        if (res.result && res.result.success) {
	          this.user = res.result.user;
	          this.activityRecords = res.result.activityRecords;
	          this.isAdmin = this.user.role === 'admin';
	        } else {
	          uni.showToast({
	            title: res.result ? res.result.message : '获取用户信息失败',
	            icon: 'none'
	          });
	        }
	      } catch (error) {
	        uni.showToast({
	          title: '获取用户信息失败',
	          icon: 'none'
	        });
	      }
	    },
		
    goToAddActivity() {
      uni.navigateTo({
        url: '/pages/manageActivities/manageActivities'
      });
    }
  }
};
</script>

<style scoped>
.container {
  padding: 20rpx;
}
.header {
  display: flex;
  align-items: center;
  margin-bottom: 20rpx;
}
.avatar {
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
}
.info {
  margin-left: 20rpx;
}
.nickname {
  font-size: 36rpx;
  font-weight: bold;
}
.score {
  font-size:;
}
</style>