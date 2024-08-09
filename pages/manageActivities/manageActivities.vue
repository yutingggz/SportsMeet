<template>
  <view class="container" :style="{ backgroundImage: 'url(' + bgImage + ')' }">
	  
    <view class="form-container">
      <uni-card>
        <view class="header">
          <text class="title">Manage Activities</text>
        </view>
		
        <view v-for="activity in activities" :key="activity._id" class="activity_lst">
			<text class="activityName" >Activity name: </text>
          <uni-easyinput label="Activity-name" v-model="activity.name" placeholder="Enter activity name"></uni-easyinput>
          <text class="activityScore" >Activity score: </text>
		  <uni-easyinput label="Activity-score" v-model="activity.score" placeholder="Enter activity score"></uni-easyinput>
         <button class="update" type="primary" @click="updateActivity(activity)" size="mini">Update activity</button>
        </view>
		 <button class="Add-activity" type="primary" @click="add">Add</button>
      </uni-card>
    </view>
  </view>
</template>


<script>

export default {
  data() {
    return {
      bgImage: '/static/bg.jpg',
	 activities: []
     
  };
},
  async mounted() {
    await this.fetchActivities();
  },
  methods: {
	  async fetchActivities(){
		  try{
			  const result = await uniCloud.callFunction({
				  name: 'getActivities'
			  });
			  if (result.result.success){
				  this.activities=result.result.data;
			  } else {
				  uni.showToast({
					  title: '获取活动失败'
				  });
			  }
		  }
		  catch (error){
			  uni.showToast({
			  	title: '获取活动失败'
			  });
		  }
		  
	  },
	  
	  async updateActivity(activity){
	  		  try{
	  			  const result = await uniCloud.callFunction({
	  				  name: 'updateActivity',
					  data: activity
	  			  });
	  			  if (result.result.success){
	  				  uni.showToast({
	  				  	title: 'Successfully updated'
	  				  })
	  			  } else {
	  				  uni.showToast({
	  					  title: 'Update failed'
	  				  });
	  			  }
	  		  }
	  		  catch (error){
	  			  uni.showToast({
	  			  	title: 'Update failed'
	  			  });
	  		  }
	  		  
	  },
	  
	    
    add() {
      uni.navigateTo({
        url: '/pages/addActivity/addActivity'
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
  margin-bottom: 5px;
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
.activityName{
	font-weight: bold;
	color: black;
}
.activityScore{
	font-weight: bold;
	color: black;
}
.activity_lst{
	padding: 5px;
}
.update{
	background-color: aliceblue;
	color: black;
	border-radius: 5px;
	cursor: pointer;
	display: block;
	
}
</style>